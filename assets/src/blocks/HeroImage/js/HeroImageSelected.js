import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {Button, PanelBody, ToggleControl, ToolbarButton} from '@wordpress/components';

export default class HeroImageSelected extends Component {

  render() {

    const {
      title,
      description,
      link_text,
      link_url,
      image_id,
      image_url,
      is_small,
      onValueChange,
      onSelectImage,
    } = this.props;


    const fields =
      <div className="page-template hero__wrapper ">
        <div className="hero__text">
          <h2>
            <RichText
              onChange={onValueChange.bind('title')}
              value={title}
              tagName={'span'}
              className={'hero__title'}
              placeholder={'enter a title (optional)'}
            />
          </h2>
          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'p'}
            className={'hero__description'}
            placeholder={'enter an abstract / description (optional)'}
          />
          <div style={{width: '280px'}}>
            <RichText
              onChange={onValueChange.bind('link_text')}
              value={link_text}
              tagName={'button'}
              className={'btn btn-small btn-medium btn-primary hero__button'}
              placeholder={'button text (optional)'}
            />
          </div>
          <div style={{width: '400px'}}>
            <RichText
              onChange={onValueChange.bind('link_url')}
              value={link_url}
              tagName={'p'}
              className={''}
              placeholder={'button url (optional unless button text is used)'}
              style={{backgroundColor: 'white'}}
            />
          </div>
        </div>
      </div>
    ;

    const getImageOrButton = (openEvent) => {
      if (image_id) {
        return (
          <div style={{
            height: "100%",
            overflow: "hidden",
            backgroundImage: `url(${image_url})`,
            backgroundSize: "cover"
          }}>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>change hero image</a>
              </div>


            </BlockControls>
            {fields}
          </div>
        );
      } else {
        return (
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button
              onClick={openEvent}
              style={{position: "absolute", top: "50%", left: "50%", transform: 'translateX(-50%) translateY(-50%)'}}
              className="btn btn-large btn-primary">
              select an image
            </Button>
          </div>
        );
      }
    };

    let heroClass = "hero";
    if (is_small === true) {
      heroClass = "hero hero__small"
    }
    return ([
      <div className={heroClass}
           style={{backgroundColor: "#f4f4f4", maxWidth: "100%", margin: "0"}}>
        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={onSelectImage}
            value={image_id}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>
      </div>,
      <InspectorControls>
        <PanelBody title={'Height'}>
          <ToggleControl
            label={'small header'}
            help={'When selected the header height will be smaller than normal. Also, the abstract / description text will no longer appear!'}
            value={is_small}
            checked={is_small}
            onChange={onValueChange.bind('is_small')}
          />
        </PanelBody>
      </InspectorControls>
    ])
  }

}


