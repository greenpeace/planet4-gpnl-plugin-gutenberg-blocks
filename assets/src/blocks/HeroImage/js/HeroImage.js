import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';

export default class HeroImage extends Component {

  render() {

    const {
      title,
      description,
      link_text,
      link_url,
      image_id,
      image_url,
      is_small,
      focus_image,
      onValueChange,
      onSelectImage,
      onFocalPointChange,
    } = this.props;

    let focal_point_params = {x:'',y:''};

    if (focus_image) {
      let focus_image_str = focus_image.replace(/%/g, '');
      let [x, y] = focus_image_str.split(' ');
      focal_point_params = {x: x/100,y: y/100};
    } else {
      focal_point_params = {x:0.5, y:0.5};
    }

    const fields =
      <div className="page-template hero__wrapper ">
        <div className="hero__text">
          <h2>
            <RichText
              onChange={onValueChange.bind('title')}
              value={title}
              tagName={'span'}
              className={'hero__title'}
              placeholder={'Enter a title'}
            />
          </h2>
          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'p'}
            className={'hero__description'}
            placeholder={'Abstract / description (optional)'}
          />
          <div style={{width: '280px'}}>
            <RichText
              onChange={onValueChange.bind('link_text')}
              value={link_text}
              tagName={'button'}
              className={'btn btn-small btn-medium btn-primary hero__button something'}
              placeholder={'button text (optional)'}
            />
          </div>
          <div style={{width: '380px'}}>
            <RichText
              onChange={onValueChange.bind('link_url')}
              value={link_url}
              tagName={'p'}
              placeholder={'button URL (optional unless button is used)'}
              style={{backgroundColor: 'white', padding: '3px 30px', color: '#666'}}
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
                <a className={'components-toolbar-text-button'} onClick={openEvent}>change background image</a>
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
            help={'When selected, the header height will be smaller than normal. Also, the abstract / description text will no longer appear!'}
            value={is_small}
            checked={is_small}
            onChange={onValueChange.bind('is_small')}
          />
        </PanelBody>

        <PanelBody title={'Focal point'}>
          <FocalPointPicker
            help={'Set the focal point to where your subject is on the image. On smaller screens, this part of the image will be shown.'}
            url={image_url}
            value={focal_point_params}
            onChange={onFocalPointChange}
          />
          </PanelBody>
      </InspectorControls>
    ])
  }

}


