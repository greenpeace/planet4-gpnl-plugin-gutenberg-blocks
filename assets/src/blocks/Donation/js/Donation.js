import React, {Component, Fragment} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {TextControl, TextareaControl, SelectControl, CheckboxControl, RangeControl, Button, Panel, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';


export default class Donation extends Component {

  render() {

    const {
      title,
      description,
      thanktitle,
      thankdescription,
      suggested_frequency,
      allow_frequency_override,
      min_amount,
      oneoff_amount1,
      oneoff_amount2,
      oneoff_amount3,
      oneoff_suggested_amount,
      recurring_amount1,
      recurring_amount2,
      recurring_amount3,
      recurring_suggested_amount,
      literatuurcode,
      marketingcode_recurring,
      marketingcode_oneoff,
      returnpage,
      errorpage,
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
          label={'Bedankt omschrijving'}
          onChange={onValueChange.bind('thankdescription')}
          value={thankdescription}
          placeholder={'Bedankt omschrijving'}
        />
      </Fragment>,
      <InspectorControls>
        <PanelBody title={'Doneerfrequentie'}>
          <SelectControl
            label={'Voorgestelde frequente'}
            onChange={onValueChange.bind('suggested_frequency')}
            value={suggested_frequency}
            options={ [
              { label: 'Eenmalig', value: 'E' },
              { label: 'Maandelijks', value: 'M' },
              { label: 'Maandelijks voor 12 maanden (forces)', value: 'F' },
              { label: 'Jaarlijks', value: 'J' },
            ] }
          />
          <CheckboxControl
            label={'Donateur kan periodiek wijzigen'}
            onChange={onValueChange.bind('allow_frequency_override')}
            value={allow_frequency_override}
            checked={allow_frequency_override}
            help={'Als dit aangevinkt is kan de donateur zelf bepalen of deze eenmalig of terugkerend doneert.'}
          />
        </PanelBody>
        <PanelBody title={'Bedragen'}
                   initialOpen={ false }
        >
          <TextControl
            label={'Minimum bedrag'}
            onChange={onNumberChange.bind('min_amount')}
            value={min_amount}
          />
          <TextControl
            label={'Eenmalig: Bedrag 1'}
            onChange={onNumberChange.bind('oneoff_amount1')}
            value={oneoff_amount1}
          />
          <TextControl
            label={'Eenmalig: Bedrag 2'}
            onChange={onNumberChange.bind('oneoff_amount2')}
            value={oneoff_amount2}
          />
          <TextControl
            label={'Eenmalig: Bedrag 3'}
            onChange={onNumberChange.bind('oneoff_amount3')}
            value={oneoff_amount3}
          />
          <TextControl
            label={'Eenmalig: Voorgesteld bedrag'}
            onChange={onNumberChange.bind('oneoff_suggested_amount')}
            value={oneoff_suggested_amount}
          />
          <TextControl
            label={'Periodiek: Bedrag 1'}
            onChange={onNumberChange.bind('recurring_amount1')}
            value={recurring_amount1}
          />
          <TextControl
            label={'Periodiek: Bedrag 2'}
            onChange={onNumberChange.bind('recurring_amount2')}
            value={recurring_amount2}
          />
          <TextControl
            label={'Periodiek: Bedrag 3'}
            onChange={onNumberChange.bind('recurring_amount3')}
            value={recurring_amount3}
          />
          <TextControl
            label={'Periodiek: Voorgesteld bedrag'}
            onChange={onNumberChange.bind('recurring_suggested_amount')}
            value={recurring_suggested_amount}
          />
        </PanelBody>
        <PanelBody title={'Database instellingen'}
                   initialOpen={ false }
        >
          <TextControl
            label={'Literatuurcode'}
            onChange={onValueChange.bind('literatuurcode')}
            value={literatuurcode}
          />
          <TextControl
            label={'Marketingcode voor terugkerende betalingen'}
            onChange={onValueChange.bind('marketingcode_recurring')}
            value={marketingcode_recurring}
          />
          <TextControl
            label={'Marketingcode voor eenmalige betalingen'}
            onChange={onValueChange.bind('marketingcode_oneoff')}
            value={marketingcode_oneoff}
          />
        </PanelBody>
        <PanelBody title={'iDeal'}
                   initialOpen={ false }
        >
          <TextControl
            label={'returnpage'}
            onChange={onNumberChange.bind('returnpage')}
            value={returnpage}
          />
          <TextControl
            label={'errorpage'}
            onChange={onValueChange.bind('errorpage')}
            value={errorpage}
          />
        </PanelBody>
      </InspectorControls>

    ])
  }
}
