import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from '@wordpress/editor';
// import {Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';
import {TextControl, RangeControl, PanelBody, FocalPointPicker} from '@wordpress/components';


export default class Newsletter extends Component {

  render() {

    const {
      title,
      subtitle,
      background,
      opacity,
      focus_image,
      marketingcode,
      literaturecode,
      screenid,
      form_id,
      image_url,
      onValueChange,
      onNumberChange,
      onSelectImage,
      onFocalPointChange
    } = this.props;

    let focal_point_params = {x: '', y: ''};

    if (focus_image) {
      let focus_image_str = focus_image.replace(/%/g, '');
      let [x, y] = focus_image_str.split(' ');
      focal_point_params = {x: x / 100, y: y / 100};
    } else {
      focal_point_params = {x: 0.5, y: 0.5};
    }

    const getImageOrButton = (openEvent) => {
      if (background) {
        return (
          <BlockControls>
            <div className={'components-toolbar'}>
              <a className={'components-toolbar-text-button'} onClick={openEvent}>verander achtergrondafbeelding</a>
            </div>
          </BlockControls>
        );
      } else {
        return (
          <BlockControls>
            <div className={'components-toolbar'}>
              <a className={'components-toolbar-text-button'} onClick={openEvent}>voeg achtergrondafbeelding toe</a>
            </div>
          </BlockControls>
        );
      }
    };


    return ([

      <div
        className={'gpnl-newsletter__block'}
        style={{
          // height: "100%",
          overflow: 'hidden',
          maxWidth: '100%',
          margin: '0',
        }}>

        <div className={'background-image'}

             style={{
               backgroundColor: '#f4f4f4',
               margin: '0',
               width: '100%',
               backgroundImage: `url(${image_url})`,
               backgroundPosition: `${focus_image}`,
               backgroundSize: 'cover',
               opacity: `${opacity}%`,
             }}
        />


        <div className="page-template gpnl-newsletter__block">

          <div className="gpnl-newsletter__text">
            <h2>
              <RichText
                onChange={onValueChange.bind('title')}
                value={title}
                className={'gpnl-newsletter__title'}
                placeholder={'Voeg een titel toe (optioneel)'}
              />
            </h2>
            <p className={'gpnl-newsletter__description'}>
              <RichText
                onChange={onValueChange.bind('subtitle')}
                value={subtitle}
                // tagName={'p'}
                // style={{backgroundColor: 'green'}}
                // className={'gpnl-newsletter__description'}
                placeholder={'Voeg een ondertitel toe (optioneel)'}
              />
            </p>

            <form className="gpnl-newsletter__form" onSubmit="return false;">
              <fieldset className="row">
                <div className="form-group col-12 col-md-6 col-lg-5 ">
                  <input type="text" name="name" id="name" className="form-control" placeholder="Naam"
                         aria-describedby="helpId" readOnly={true}/>
                </div>
                <div className="form-group col-12 col-md-6 col-lg-4 ">
                  <input type="email" className="form-control" name="mail" id="mail" aria-describedby="emailHelpId"
                         placeholder="E-mail" readOnly={true}/>
                </div>
                <div className="form-group col-12 col-md-12 col-lg-3 ">
                  {/*<input type="submit" className="btn btn-primary submit-button-newsletter" disabled readOnly={'readonly'} value="Aanmelden" />*/}
                  <a href={'#'} className="btn btn-primary submit-button-newsletter">AANMELDEN</a>
                </div>
              </fieldset>
            </form>

          </div>
        </div>

      </div>,
      <div>
        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={onSelectImage}
            value={background}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>
      </div>,
      <InspectorControls>


        <PanelBody title={'Focus point'}>
          <FocalPointPicker
            help={'Plaats het focus punt op het onderwerp van deze afbeelding. Op kleinere monitors (zoals op telefoons) zal het focus punt zichtbaar zijn.'}
            url={image_url}
            value={focal_point_params}
            onChange={onFocalPointChange}
          />

          <RangeControl
            label={'Opaciteit in procenten'}
            onChange={onNumberChange.bind('opacity')}
            value={opacity}
          />

        </PanelBody>

        <PanelBody title={'Database instellingen'}>
          <TextControl
            label={'Marketing code'}
            value={marketingcode}
            placeholder={'marketing code'}
            onChange={onValueChange.bind('marketingcode')}
          />
          <TextControl
            label={'literature code'}
            value={literaturecode}
            placeholder={'literature code'}
            onChange={onValueChange.bind('literaturecode')}
          />
          <TextControl
            label={'Screen ID'}
            value={screenid}
            onChange={onValueChange.bind('screenid')}
          />
        </PanelBody>
        <PanelBody title={'Extra instellingen'}>

          <RangeControl
            label={'Form ID'}
            onChange={onNumberChange.bind('form_id')}
            value={form_id}
            help={'Gebruik dit als er meerdere petitieformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.'}
          />
        </PanelBody>


      </InspectorControls>,
    ]);
  }

}


