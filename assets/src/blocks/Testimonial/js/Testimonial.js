import React, {Component} from 'react';
import {PanelBody, ServerSideRender, ToggleControl} from '@wordpress/components';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from '@wordpress/editor';

const {Button} = wp.components;

export class Testimonial extends Component {

  constructor(props) {
    super(props);
  }

  renderEdit() {

    const {title, name, content, image_id, image_url, image_right, handleValueChange} = this.props;

    const getImageOrButton = (openEvent) => {
      if (image_id) {
        return (
          [<img
            src={image_url}
            onClick={openEvent}
            className="quote__img"
          />,
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>verander afbeelding</a>
              </div>
            </BlockControls>]
        );
      } else {
        return (
          <div className="button-container">
            <Button
              onClick={openEvent}
              className="button">
              + image
            </Button>
          </div>
        );
      }
    };
    return (
      <section className="block block-testimonial">
        <RichText
          onChange={handleValueChange.bind('title')}
          value={title}
          name="title"
          tagName="p"
          className="title"
          placeholder="Vul een titel in."
          keepPlaceholderOnFocus
        />
        <div className="image-container" style={this.props.image_right === true ? {float: 'right'} : null}>
          <MediaUploadCheck>
            <MediaUpload
              type="image"
              onSelect={this.props.onSelectImage}
              value={this.props.image_id}
              render={({open}) => getImageOrButton(open)}
            />
          </MediaUploadCheck>
          <RichText
            onChange={handleValueChange.bind('name')}
            value={name}
            name="name"
            tagName="p"
            className="name"
            placeholder="Vul de naam en eventueel de leeftijd in."
          />
        </div>

        <RichText
          onChange={handleValueChange.bind('content')}
          value={content}
          name="content"
          tagName="p"
          className="content"
          placeholder="Vul de aanbeveling of ervaring in."
        />
        <p style={{clear: 'both'}}></p>


        <InspectorControls>
          <PanelBody title={'Positie van de afbeelding'}>
            <ToggleControl
              label={'Afbeelding rechts'}
              value={image_right}
              checked={image_right}
              onChange={handleValueChange.bind('image_right')}
            />
          </PanelBody>
        </InspectorControls>

      </section>
    );
  }

  renderView() {
    return (
      <ServerSideRender
        block={'planet4-gpnl-blocks/' + this.props.blockNameKebabCase}
        attributes={{
          title: this.props.title,
          name: this.props.name,
          description: this.props.description,
          content: this.props.content,
          image_url: this.props.image_url,
          image_id: this.props.image_id,
          image_right: this.props.image_right,
        }}
      >
      </ServerSideRender>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.isSelected
            ? this.renderEdit()
            : this.renderView()
        }
      </div>
    );
  }
}
