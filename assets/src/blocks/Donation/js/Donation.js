import React, {Component, Fragment} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {TextControl, TextareaControl, SelectControl, CheckboxControl, RangeControl, Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';


export default class Donation extends Component {

  render() {

    const {
      title,
      description,
      thanktitle,
      thankdescription,
      onValueChange,
      onNumberChange,
    } = this.props;

    return ([
      <Fragment>
          <TextControl
            label={'Titel'}
            onChange={onValueChange.bind('title')}
            value={title}
            placeholder={'Vul een titel in'}
          />
        <TextareaControl
          label={'Omschrijving'}
          onChange={onValueChange.bind('description')}
          value={description}
          placeholder={'Omschrijving'}
        />
        <TextControl
          label={'Bedanktitel'}
          onChange={onValueChange.bind('thanktitle')}
          value={thanktitle}
          thanktitle={'Vul een titel in'}
        />
        <TextareaControl
          label={'Bedank omschrijving'}
          onChange={onValueChange.bind('thankdescription')}
          value={thankdescription}
          placeholder={'Bedankt tmschrijving'}
        />
      </Fragment>
    ])
  }
}
