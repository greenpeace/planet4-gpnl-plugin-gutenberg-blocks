import React, {Fragment} from 'react';
import BaseBlock from '../../BaseBlock';
import {TextareaControl, TimePicker} from '@wordpress/components';
import {RawHTML} from '@wordpress/element';


const {__} = wp.i18n; // Import __() from wp.i18n
const {MediaUpload, PlainText, InspectorControls,} = wp.editor;
const {PanelBody, TextControl, SelectControl,} = wp.components;

// I am trying to create a LiveBlog block which contains all items of the blog.
export class LiveblogBlock extends BaseBlock {


  constructor() {
    super();

    const {registerBlockType} = wp.blocks;

    registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
      title: this.blockName,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
      ],
      attributes: {
        items_shown: {
          type: 'number',
          default: 25,
        },
        liveblog_style: {
          type: 'select',
          default: 'one',
        },
        items: {
          type: 'array',
          default: [],
          selector: 'p.liveblog',
          image: {
            source: 'attribute',
            selector: 'img',
            attribute: 'src'
          },
          index: {
            source: 'text',
            selector: 'span.liveblog-index'
          },
          content: {
            source: 'html',
            selector: 'span.liveblog-content'
          },
          datetime: {
            source: 'text',
            selector: 'span.liveblog-datetime',
          },
          position: {
            source: 'text',
            selector: 'span.liveblog-position'
          }
        },

      },

      /**
       * The edit function describes the structure of your block in the context of the editor.
       * This represents what the editor will render when the block is used.
       *
       * The "edit" property must be a valid function.
       *
       * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
       */

      // The "edit" property must be a valid function.
      edit: function (props) {

        const {items} = props.attributes;

        const t_style_control = [
          {value: 'one', label: __('Style 1')},
          {value: 'two', label: __('Style 2')},
          {value: 'three', label: __('Style 3')},
        ];

        const inspectorControls = (
          <InspectorControls>
            <PanelBody title={__('Liveblog Setting')}>
              <SelectControl
                label={__('Liveblog style')}
                options={t_style_control}
                value={props.attributes.liveblog_style}
                onChange={(liveblog_style) => props.setAttributes({liveblog_style})}
              />
              <TextControl
                label={__('Maximum number of items to show')}
                type="text"
                value={props.attributes.items_shown}
                onChange={(items_shown) => props.setAttributes({items_shown})}
              />
            </PanelBody>
          </InspectorControls>
        );

        const itemsList = items
          .sort((a, b) => b.index - a.index)
          .map(liveblog => {

            return (

              <div className="liveblog-item" key={this.id}>
                <p>
                  <span>
										Item {Number(liveblog.index) + 1}
                  </span>
                  {' '}
                  (
                  <a
                    className="remove-liveblog-item"
                    onClick={() => {
                      let result = confirm('Are you sure you want to delete this item?');
                      if (!result) {
                        e.preventDefault(); // eslint-disable-line
                      } else {
                        const newItems = items
                          .filter(item => item.index != liveblog.index)
                          .map(t => {
                            if (t.index > liveblog.index) {
                              t.index -= 1;
                            }
                            return t;
                          });

                        props.setAttributes({
                          items: newItems
                        });
                      }
                    }
                    }
                  >
                    remove item
                  </a>
                  )
                </p>
                <div className="wp-block-liveblog">
                  <TextareaControl
                    className="liveblog-content"
                    style={{height: 58}}
                    placeholder="content"
                    value={liveblog.content}
                    // autoFocus
                    onChange={content => {
                      const newObject = Object.assign({}, liveblog, {
                        content: content
                      });
                      props.setAttributes({
                        items: [
                          ...items.filter(
                            item => item.index != liveblog.index
                          ),
                          newObject
                        ]
                      });
                    }}
                  />

                  { /*TODO: make this a working pop-up? */}
                  <Fragment>
                    <TimePicker
                      currentDate={liveblog.datetime}
                      value={liveblog.datetime}
                      onChange={datetime => {
                        const newObject = Object.assign({}, liveblog, {
                          datetime: datetime
                        });
                        props.setAttributes({
                          items: [
                            ...items.filter(
                              item => item.index != liveblog.index
                            ),
                            newObject
                          ]
                        });
                      }}
                      is12Hour={false}
                    />
                  </Fragment>

                  <MediaUpload
                    onSelect={media => {
                      const image = media.sizes.medium
                        ? media.sizes.medium.url
                        : media.url;
                      const newObject = Object.assign({}, liveblog, {
                        image: image
                      });
                      props.setAttributes({
                        items: [
                          ...items.filter(
                            item => item.index != liveblog.index
                          ),
                          newObject
                        ]
                      });
                    }}
                    type="image"
                    value={liveblog.image}
                    render={({open}) =>
                      liveblog.image ? (

                        <div
                          className="gpnl_liveblog_datetime_img"
                          style={{
                            backgroundImage: `url(${liveblog.image})`,
                            height: '100px',
                          }}
                          onClick={open}
                        />

                      ) : (
                        <a
                          href="#"
                          className="gpnl_liveblog_datetime_img"
                          onClick={open}
                        >
                          Select Image (optional)
                        </a>
                      )
                    }
                  />

                  <PlainText
                    className="liveblog-position-content"
                    style={{display: 'none'}}
                    placeholder="Position"
                    value={liveblog.position}
                    onChange={position => {
                      const newObject = Object.assign({}, liveblog, {
                        position: position
                      });
                      props.setAttributes({
                        items: [
                          ...items.filter(
                            item => item.index != liveblog.index
                          ),
                          newObject
                        ]
                      });
                    }}
                  />

                </div>
              </div>
            );
          });
        return ([
          inspectorControls,
          <div className={props.className} key={this.id}>
            <button
              // className="add-more-liveblog"
              onClick={() =>
                props.setAttributes({
                  items: [
                    ...props.attributes.items,
                    {
                      index: props.attributes.items.length,
                      content: '',
                      datetime: '',
                      position: ''
                    }
                  ]
                })
              }
            >
              + add item
            </button>
            {itemsList}
          </div>
        ]);
      },

      /**
       * The save function defines the way in which the different attributes should be combined
       * into the final markup, which is then serialized by Gutenberg into post_content.
       *
       * The "save" property must be specified and must be a valid function.
       *
       * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
       */
      save: props => {
        const {items} = props.attributes;

        const itemsList = items.map((liveblog) => {

          let moment;
          if (liveblog.datetime === '') {
            let currentdate = new Date();
            moment = currentdate.toString();
          } else {
            moment = liveblog.datetime.toString();
          }
          console.log(moment);

          return (
            <div key={liveblog.index}>
              <div className="liveblog-item">
                <span className="liveblog-index" style={{display: 'none'}}>{liveblog.index}</span>
                <img className="liveblog-image" src={liveblog.image}/>
                <span className="liveblog-datetime">{moment}</span>
                <span className="liveblog-content">
                  <RawHTML>
                    {liveblog.content}
                  </RawHTML>
                </span>
                <span className="liveblog-position">{liveblog.position}</span>
              </div>
            </div>
          );
        });
        if (items.length > 0) {
          return (

            <section className="section liveblog-block">
              <div className="liveblog"
                data-t_style={props.attributes.liveblog_style}
                data-t_show={props.attributes.items_shown}
              >
                {itemsList}
              </div>
            </section>

          );
        } else {
          return null;
        }
      }
    });
  }
}
