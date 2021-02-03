/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from '@wordpress/editor';
import {
  TextControl,
  TextareaControl,
  SelectControl,
  CheckboxControl,
  RangeControl,
  Button,
  PanelBody,
  ToggleControl,
  FocalPointPicker
} from '@wordpress/components';


export default class TwoColumnEmbed extends Component {

  render() {

    const {
      title,
      description,
      column_title,
      column_description,
      column_cta_text,
      column_cta_link,
      embed_option,
      iframe_src,
      iframe_height,
      image,
      column_size,
      image_url,
      onSelectImage,
      onValueChange,
      onNumberChange,
    } = this.props;

    // this will render either the fields for the image in the second column, or the iframe fields.
    const showIframeOrImageFields = () => {

      if (embed_option === 'image') {
        return (
          <Fragment>
            <label>Afbeelding</label>
            <MediaUploadCheck>
              <MediaUpload
                type="image"
                onSelect={onSelectImage}
                value={image}
                render={({open}) => getImageOrButton(open)}
              />
            </MediaUploadCheck>
          </Fragment>
        );
      } else if (embed_option === 'iframe') {
        return (
          <Fragment>
            <TextControl
              label={'iframe_src'}
              onChange={onValueChange.bind('iframe_src')}
              value={iframe_src}
              placeholder={'iframe_src'}
              help={'De URL van  de iframe.'}
            />
            <TextControl
              label={'iframe_height'}
              onChange={onNumberChange.bind('iframe_height')}
              value={iframe_height}
              placeholder={'iframe_height'}
              help={'Hoogte van iframe in px.'}
            />
          </Fragment>
        );
      } else {
        console.log('There is something wrong with the code. Please check the code for this block.');
      }
    }
    ;


    const getImageOrButton = (openEvent) => {
      if (image && (0 < image)) {

        return (
          <div>
            <img
              src={image_url}
              onClick={openEvent}
              width={'100px'}
              height={'100px'}
            />
          </div>
        );
      } else {
        return (
          <div className='button-container'>
            <Button
              onClick={openEvent}
              className='button'>
              + {'Selecteer afbeelding'}
            </Button>
          </div>
        );
      }
    };

    return (
      <Fragment>
        <TextControl
          label={'Titel van het blok (optioneel)'}
          onChange={onValueChange.bind('title')}
          value={title}
          placeholder={'Vul een titel in'}
        />
        <TextControl
          label={'Ondertitel van het blok (optioneel)'}
          onChange={onValueChange.bind('description')}
          value={description}
          placeholder={'Description'}
        />
        <TextControl
          label={'Titel van de kolom (optioneel)'}
          onChange={onValueChange.bind('column_title')}
          value={column_title}
          placeholder={'columns_title'}
        />
        <TextareaControl
          label={'Tekst in kolom (optioneel)'}
          onChange={onValueChange.bind('column_description')}
          value={column_description}
        />
        <TextControl
          label={'Tekst op CTA knop (optioneel)'}
          onChange={onValueChange.bind('column_cta_text')}
          value={column_cta_text}
          help={'Deze tekst wordt getoond op de knop die voor een "call to action" is.'}
        />
        <TextControl
          label={'CTA link (optioneel, behalve wanneer knop wordt gebruikt)'}
          onChange={onValueChange.bind('column_cta_link')}
          value={column_cta_link}
          help={'Vul de link in waarnaar de CTA-knop verwijst.'}
        />

        {/* Rneder fields for the image or the iframe*/}
        {showIframeOrImageFields()}

        <InspectorControls>
          <PanelBody title={'Iframe of afbeelding'}>

            <SelectControl
              label={'embed_option?'}
              onChange={onValueChange.bind('embed_option')}
              value={embed_option}
              options={[
                {label: 'Iframe', value: 'iframe'},
                {label: 'Afbeelding', value: 'image'},
              ]}
            />
          </PanelBody>

          <PanelBody title={'Verhouding kolommen'}>

            <SelectControl
              label={'column_size?'}
              onChange={onValueChange.bind('column_size')}
              value={column_size}
              options={[
                {label: '50% / 50%', value: '6'},
                {label: '66% / 33%', value: '8'},
              ]}
            />

          </PanelBody>
        </InspectorControls>

      </Fragment>
    );
  }
}
/* eslint-enable */
