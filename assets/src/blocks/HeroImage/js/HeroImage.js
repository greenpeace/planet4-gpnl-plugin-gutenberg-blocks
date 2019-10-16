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
      image,
      image_url,
      small,
      focus_image,
      onValueChange,
      onSelectImage,
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
    if (title.length > 75) {
      isTitleTooLong = true;
    }
    let isDescriptionTooLong = false;
    if (description.length > 250) {
      isDescriptionTooLong = true;
    }

    const fields =
      <div className="hero__wrapper">

        <div className="hero__text">
          <h2 className="hero__title" style={{marginBottom: '0'}}>
            <RichText
              style={{display: 'inline-block', size: '2rem', backgroundColor: isTitleTooLong == true ? 'red' : 'white', color: isTitleTooLong == true ? 'white' : '', padding: '15px' }}
              onChange={onValueChange.bind('title')}
              value={title}
              placeholder={'Enter a title'}
            />
          </h2>
          <p className={"warning-message"}>  { isTitleTooLong == true ? "De titel is erg lang en dit kan problemen opleveren op kleinere displays." : ""  }</p>

          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'p'}
            className={'hero__description'}
            style={{ backgroundColor: isDescriptionTooLong == true ? 'red' : '' }}
            placeholder={'Abstract / description (optional)'}
          />
          <p className={"warning-message"}>  { isDescriptionTooLong == true ? "De omschrijving is erg lang en dit kan problemen opleveren op kleinere displays." : ""  }</p>

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
      if (image) {
        return (
          <div style={{
            height: "100%",
            overflow: "hidden",
            backgroundImage: `url(${image_url})`,
            backgroundSize: "cover",
            backgroundPosition: `${focus_image}`
          }}>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>verander achtergrondafbeelding</a>
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
              selecteer een afbeelding
            </Button>
          </div>
        );
      }
    };

    let heroClass = "hero";
    if (small === true) {
      heroClass = "hero hero__small"
    }
    return ([
      <div className={heroClass}
           style={{maxWidth: "100%", height: "500px", margin: "0"}}>
        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={onSelectImage}
            value={image}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>
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
    ])
  }

}


