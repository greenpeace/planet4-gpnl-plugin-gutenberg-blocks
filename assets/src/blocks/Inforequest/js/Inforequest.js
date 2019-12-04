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
            label={'Titel van het formulier'}
            onChange={onValueChange.bind('formtitle')}
            value={formtitle}
            placeholder={'Formuliertitel'}
          />
        <TextControl
          label={'Benaming van het aangevraagde'}
          onChange={onValueChange.bind('itemtitle')}
          value={itemtitle}
        />
        <h4>Voer hieronder minimaal 1 en maximaal 5 artikelen in</h4>
        <TextControl
          label={'Optie 1: Marketingcode'}
          onChange={onValueChange.bind('mcode1_code')}
          value={mcode1_code}
          placeholder={'marketingcode'}
        />
        <TextControl
          label={'Optie 1: Naam'}
          onChange={onValueChange.bind('mcode1_label')}
          value={mcode1_label}
          placeholder={'marketingcode label'}
        />
        <TextControl
          label={'Optie 2: Marketingcode'}
          onChange={onValueChange.bind('mcode2_code')}
          value={mcode2_code}
          placeholder={'marketingcode'}
        />
        <TextControl
          label={'Optie 2: Naam'}
          onChange={onValueChange.bind('mcode2_label')}
          value={mcode2_label}
          placeholder={'marketingcode label'}
        />
        <TextControl
          label={'Optie 3: Marketingcode'}
          onChange={onValueChange.bind('mcode3_code')}
          value={mcode3_code}
          placeholder={'marketingcode'}
        />
        <TextControl
          label={'Optie 3: Naam'}
          onChange={onValueChange.bind('mcode3_label')}
          value={mcode3_label}
          placeholder={'marketingcode label'}
        />
        <TextControl
          label={'Optie 4: Marketingcode'}
          onChange={onValueChange.bind('mcode4_code')}
          value={mcode4_code}
          placeholder={'marketingcode'}
        />
        <TextControl
          label={'Optie 4: Naam'}
          onChange={onValueChange.bind('mcode4_label')}
          value={mcode4_label}
          placeholder={'marketingcode label'}
        />
        <TextControl
          label={'Optie 5: Marketingcode'}
          onChange={onValueChange.bind('mcode5_code')}
          value={mcode5_code}
          placeholder={'marketingcode'}
        />
        <TextControl
          label={'Optie 5: Naam'}
          onChange={onValueChange.bind('mcode5_label')}
          value={mcode5_label}
          placeholder={'marketingcode label'}
        />
        <TextareaControl
          label={'Opt in tekst'}
          onChange={onValueChange.bind('consent')}
          value={consent}
          placeholder={'consent'}
          help={'Deze tekst wordt getoond bij de opt-in.'}
        />
        <TextControl
          label={'Tekst op registreer knop'}
          onChange={onValueChange.bind('sign')}
          value={sign}
          placeholder={'Tekst op registreer knop'}
        />
        <SelectControl
          label={'Waar wordt dit blok gebruikt?'}
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
