import React, {Component, Fragment} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {TextControl, TextareaControl, SelectControl, CheckboxControl, RangeControl, Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';


export default class Inforequest extends Component {

  render() {

    const {
      formtitle,
      itemtitle,
      mcode1_code,
      mcode1_label,
      mcode2_code,
      mcode2_label,
      mcode3_code,
      mcode3_label,
      mcode4_code,
      mcode4_label,
      mcode5_code,
      mcode5_label,
      consent,
      sign,
      hider,
      onValueChange,
    } = this.props;
    
    return ([
      <Fragment>
          <TextControl
            label={'formtitle'}
            onChange={onValueChange.bind('formtitle')}
            value={formtitle}
            placeholder={'formtitle'}
          />
        <TextControl
          label={'itemtitle'}
          onChange={onValueChange.bind('itemtitle')}
          value={itemtitle}
          placeholder={'itemtitle'}
        />
        <h4>Voer hieronder minimaal 1 en maximaal 5 artikelen in</h4>
        <TextControl
          label={'mcode1_code'}
          onChange={onValueChange.bind('mcode1_code')}
          value={mcode1_code}
          placeholder={'mcode1_code'}
        />
        <TextControl
          label={'mcode1_label'}
          onChange={onValueChange.bind('mcode1_label')}
          value={mcode1_label}
          placeholder={'mcode1_label'}
        />
        <TextControl
          label={'mcode2_code'}
          onChange={onValueChange.bind('mcode2_code')}
          value={mcode2_code}
          placeholder={'mcode2_code'}
        />
        <TextControl
          label={'mcode2_label'}
          onChange={onValueChange.bind('mcode2_label')}
          value={mcode2_label}
          placeholder={'mcode2_label'}
        />
        <TextControl
          label={'mcode3_code'}
          onChange={onValueChange.bind('mcode3_code')}
          value={mcode3_code}
          placeholder={'mcode3_code'}
        />
        <TextControl
          label={'mcode3_label'}
          onChange={onValueChange.bind('mcode3_label')}
          value={mcode3_label}
          placeholder={'mcode3_label'}
        />
        <TextControl
          label={'mcode4_code'}
          onChange={onValueChange.bind('mcode4_code')}
          value={mcode4_code}
          placeholder={'mcode4_code'}
        />
        <TextControl
          label={'mcode4_label'}
          onChange={onValueChange.bind('mcode4_label')}
          value={mcode4_label}
          placeholder={'mcode4_label'}
        />
        <TextControl
          label={'mcode5_code'}
          onChange={onValueChange.bind('mcode5_code')}
          value={mcode5_code}
          placeholder={'mcode5_code'}
        />
        <TextControl
          label={'mcode5_label'}
          onChange={onValueChange.bind('mcode5_label')}
          value={mcode5_label}
          placeholder={'mcode5_label'}
        />
        <TextareaControl
          label={'consent'}
          onChange={onValueChange.bind('consent')}
          value={consent}
          placeholder={'consent'}
          help={'Deze tekst wordt getoond bij de opt-in.'}
        />
        <TextControl
          label={'sign'}
          onChange={onValueChange.bind('sign')}
          value={sign}
          placeholder={'Tekst op registreer knop'}
        />
        <SelectControl
          label={'hider'}
          onChange={onValueChange.bind('hider')}
          value={hider}
          options={ [
            { label: 'Op de hoofdpagina', value: '0' },
            { label: 'Op een lesmateriaalpagina', value: '1' },
          ] }
        />
      </Fragment>
    ])
  }
}
