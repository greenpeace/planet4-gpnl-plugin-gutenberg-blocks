import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from '@wordpress/editor';
import {Button, PanelBody, ToggleControl, FocalPointPicker, Toolbar} from '@wordpress/components';
import {URLInput} from '@wordpress/block-editor';
import variables from '../../../base/_variables_gpnl.scss';


export default class HeroImage extends Component {

  render() {

    const {
      title,
      description,
      link_text,
      link_url,
      image,
      image_url,
      video,
      video_url,
      small,
      focus_image,
      setAttributes,
      onValueChange,
      onSelectImage,
      onSelectVideo,
      onFocalPointChange,
    } = this.props;

    let focal_point_params = {x: '', y: ''};

    if (focus_image) {
      let focus_image_str = focus_image.replace(/%/g, '');
      let [x, y] = focus_image_str.split(' ');
      focal_point_params = {x: x / 100, y: y / 100};
    } else {
      focal_point_params = {x: 0.5, y: 0.5};
    }

    let isTitleTooLong = false;
    if (title != null && title.length > 75) {
      isTitleTooLong = true;
    }
    let isDescriptionTooLong = false;
    if (description != null && description.length > 250) {
      isDescriptionTooLong = true;
    }

    const fields =
      <div className="hero__wrapper">

        <div className="hero__text">
          <h2 className="hero__title" style={{marginBottom: '0'}}>
            <RichText
              style={{
                display: 'inline-block', size: '2rem',
                backgroundColor: isTitleTooLong === true ? '#f0b112' : 'white',
                color: isTitleTooLong === true ? 'white' : '',
                padding: '15px'
              }}
              onChange={onValueChange.bind('title')}
              value={title}
              placeholder={'Voer een titel in'}
            />
          </h2>

          {isTitleTooLong === true &&
          <p className={'warning-message'}>De titel is erg lang en dit kan problemen opleveren op kleinere displays.</p>
          }

          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'span'}
            className={'hero__description'}
            style={{
              display: 'block', marginTop: '30px', backgroundColor: isDescriptionTooLong === true ? '#f0b112' : ''
            }}
            placeholder={'Abstract / omschrijving (optioneel)'}
          />

          {isDescriptionTooLong === true &&
          <p className={'warning-message'}>De omschrijving is erg lang en dit kan problemen opleveren op kleinere
            displays.</p>
          }

          <div style={{width: '280px'}}>
            <RichText
              onChange={onValueChange.bind('link_text')}
              value={link_text}
              tagName={'p'}
              className={'hero__button'}
              placeholder={'Tekst op knop (optioneel)'}
            />
          </div>

          {link_text &&
          <div>
            <span style={{backgroundColor: 'white', padding: '3px', color: '#666'}}
            ><strong>URL van knop: </strong></span>
            <div style={{width: '380px'}}>
              <URLInput
                autoFocus={false}
                onChange={onValueChange.bind('link_url')}
                value={link_url}
                tagName={'p'}
                placeholder={'URL van knop (kan een interne of externe link zijn)'}
                style={{backgroundColor: 'white', padding: '3px', color: '#666'}}
              />
            </div>
          </div>
          }

        </div>
      </div>
    ;

    const getImageOrButton = (openEvent) => {
      if (image) {
        return (
          <div style={{
            minHeight: 'inherit',
            overflow: 'hidden',
            backgroundImage: `url(${image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: `${focus_image}`
          }}>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>change image</a>
              </div>
            </BlockControls>
            {fields}
          </div>
        );
      } else {
        return (
          <>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>add image</a>
              </div>
            </BlockControls>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Button
                onClick={openEvent}
                style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}
                className="btn btn-large btn-primary">
                select image (required)
              </Button>
              <p style={{position: 'absolute', top: 'calc(50% + 20px)', width: '80%'}}>
                <strong>Adding a video is optional</strong> (see the button on top of this block). If you select a video, make sure this is in the MP4-format and the file size does not exceed 5mb. The video will be muted and is only shown on tablets and computers, not on mobile devices. On mobile devices your selected image will be shown instead of the video. An image is always necessary, both for mobile devices and as a fallback solution.
              </p>
            </div>
          </>
        );
      }
    };

    const videoButton = (openEvent) => {
      return (
        <BlockControls>
          <div className={'components-toolbar'}>
            <a className={'components-toolbar-text-button'} onClick={openEvent}>{video ? 'change video' : 'add video'}</a>
          </div>
        </BlockControls>
      );
    };

    const removeImageButton = () => {
      return (
        <BlockControls>
          <div className={'components-toolbar'}>
            <a className={'components-toolbar-text-button'} onClick={() => setAttributes({image: 0})}>remove image</a>
          </div>
        </BlockControls>
      );
    };

    const removeVideoButton = () => {
      return (
        <BlockControls>
          <div className={'components-toolbar'}>
            <a className={'components-toolbar-text-button'} onClick={() => setAttributes({video: 0})}>remove video</a>
          </div>
        </BlockControls>
      );
    };

    let heroClass = 'hero';
    if (small === true) {
      heroClass = 'hero hero__small';
    }
    return ([
      <div className={heroClass}
        style={{maxWidth: '100%', margin: '0'}}>
        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={onSelectImage}
            value={image}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>
        <MediaUploadCheck>
          <MediaUpload
            type="video"
            onSelect={onSelectVideo}
            value={video}
            render={({open}) => videoButton(open)}
          />
        </MediaUploadCheck>
        {image !== 0 ? removeImageButton() : ''}
        {video !== 0 ? removeVideoButton() : ''}
      </div>,
      <InspectorControls>
        <PanelBody title={'Height'}>
          <ToggleControl
            label={'small header'}
            help={'When selected, the header height will be smaller than normal. Also, the abstract / description text will no longer appear!'}
            value={small}
            checked={small}
            onChange={onValueChange.bind('small')}
          />
        </PanelBody>

        <PanelBody title={'Focus punt'}>
          <FocalPointPicker
            help={'Plaats het focus punt op het onderwerp van deze afbeelding. Op kleinere monitors (zoals op telefoons) zal het focus punt zichtbaar zijn.'}
            url={image_url}
            value={focal_point_params}
            onChange={onFocalPointChange}
          />
        </PanelBody>
      </InspectorControls>
    ]);
  }

}


