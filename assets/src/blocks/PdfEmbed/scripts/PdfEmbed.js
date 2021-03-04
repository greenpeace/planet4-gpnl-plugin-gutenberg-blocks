import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from '@wordpress/editor';
import {Button, PanelBody, RangeControl } from '@wordpress/components';
// import variables from '../../../base/_variables_gpnl.scss';
import PdfImage from './PdfImage.js';
import PropTypes from 'prop-types';

export default class PdfEmbed extends Component {

  static get propTypes() {
    return {
      'title': PropTypes.string,
      'description': PropTypes.string,
      'document_id': PropTypes.string,
      'height': PropTypes.string,
      'onSelectMedia': PropTypes.fu,
      'onValueChange': PropTypes.fu,
      'onNumberChange': PropTypes.fu,
    };
  }


  render() {

    const {
      title,
      description,
      document_id,
      height,
      onSelectMedia,
      onValueChange,
      onNumberChange
    } = this.props;

    const fields =
      <div className="pdf-embed__wrapper">
        <div className="">
          <h3 className="" style={{margin: '0'}}>
            <RichText
              onChange={onValueChange.bind('title')}
              value={title}
              placeholder={'Voeg een titel toe (optioneel)'}
            />
          </h3>
          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'p'}
            className={''}
            placeholder={'Voeg een ondertitel toe (optioneel)'}
          />
        </div>
        {PdfImage}
      </div>
    ;

    const getMediaOrButton = (openEvent) => {
      if (document_id) {
        return (
          <div style={{
            minHeight: 'inherit',
            overflow: 'hidden',
            backgroundSize: 'cover',
          }}>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>verander document</a>
              </div>
            </BlockControls>
            {fields}
          </div>
        );
      } else {
        return (
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'grey'}}>
            <Button
              onClick={openEvent}
              style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}
              className="btn btn-large btn-primary">
              selecteer een pdf
            </Button>
          </div>
        );
      }
    };

    return ([
      <div className={''} style={{maxWidth: '100%', margin: '0'}} key={this.id}>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectMedia}
            value={document_id}
            render={({open}) => getMediaOrButton(open)}
          />
        </MediaUploadCheck>
      </div>,
      <InspectorControls key={this.id}>
        <PanelBody title={'Height'}>
          <RangeControl
            label={'Height in pixels'}
            min={0}
            max={1080}
            initialPosition={800}
            value={height}
            onChange={onNumberChange.bind('height')}
          />
        </PanelBody>
      </InspectorControls>
    ]);
  }
}


