import React, {Component} from 'react';
import {RichText, InspectorControls} from '@wordpress/editor';
import {TextControl, PanelBody} from '@wordpress/components';
import PropTypes from 'prop-types';

export default class FacebookComments extends Component {
  static get propTypes() {
    return {
      'title': PropTypes.string,
      'description': PropTypes.string,
      'url': PropTypes.string,
      'width': PropTypes.string,
      'numberOfPosts': PropTypes.number,
      'onValueChange': PropTypes.func,
      'onNumberChange': PropTypes.func,
    };
  }

  render() {

    const {
      title,
      description,
      url,
      width,
      numberOfPosts,
      onValueChange,
      onNumberChange
    } = this.props;



    return (
      <div>
        <div>
          <TextControl
            label={'URL van de pagina'}
            value={url}
            onChange={onValueChange.bind('url')}
            help={'Gebruik de URL (ook wel permalink genoemd) van deze pagina. Als de permalink verandert, terwijl dit blok al in gebruik is, blijf dan de oude URL gebruiken'}
          />
          <RichText
            tagName={'h2'}
            className={'page-section-header'}
            placeholder={'Voer een titel in (optioneel)'}
            value={title}
            onChange={onValueChange.bind('title')}
            keepPlaceholderOnFocus={true}
          />
          <RichText
            tagName={'span'}
            className={'page-section-description'}
            placeholder={'Omschrijving (optioneel)'}
            value={description}
            onChange={onValueChange.bind('description')}
            keepPlaceholderOnFocus={true}
          />
          <InspectorControls>
            <PanelBody title={'Layout'}>
              <TextControl
                label={'Breedte in pixels'}
                value={width}
                onChange={onValueChange.bind('width')}
                help={'Percentage met toevoeging "%" of in pixels zonder toevoeging.'}
              />
              <TextControl
                label={'Aantal zichtbare reacties'}
                value={numberOfPosts}
                onChange={onNumberChange.bind('numberOfPosts')}
                help={'Het aantal reacties dat standaard zichtbaar is. Meer reacties kunnen altijd geladen worden door de bezoeker.'}
              />
            </PanelBody>
          </InspectorControls>
        </div>
      </div>
    );
  }
}
