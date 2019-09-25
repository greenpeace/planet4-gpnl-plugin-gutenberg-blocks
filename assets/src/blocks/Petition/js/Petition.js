import React, {Component, Fragment} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {TextControl, TextareaControl, SelectControl, CheckboxControl, RangeControl, Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';


export default class Petition extends Component {

  render() {

    const {
      title,
      subtitle,
      image,
      consent,
      sign,
      campaignpolicy,
      thanktitle,
      thanktext,
      donatebuttontext,
      donatebuttonlink,
      hidesharingbuttons,
      twittertext,
      whatsapptext,
      marketingcode,
      literaturecode,
      campaigncode,
      countermin,
      countermax,
      countertext,
      ga_action,
      ad_campaign,
      apref,
      jalt_track,
      form_id,
      image_url,
      onSelectImage,
      onValueChange,
      onNumberChange,
    } = this.props;

    const getImageOrButton = (openEvent) => {
      if ( this.props.id && ( 0 < this.props.id ) ) {

        return (

          <div align='center'>
            <img
              src={ image_url }
              onClick={ openEvent }
              className='happypoint__imgs'
              width={'400px'}
              style={{padding: '10px 10px'}}
            />
          </div>

        );
      }
      else {
        return (
          <div className='button-container'>
            <Button
              onClick={ openEvent }
              className='button'>
              + {'Select Background Image'}
            </Button>
          </div>
        );
      }
    };


    return ([
      <Fragment>
          <TextControl
            label={'Titel'}
            onChange={onValueChange.bind('title')}
            value={title}
            placeholder={'Vul een titel in'}
          />
        <TextareaControl
          label={'Ondertitel'}
          onChange={onValueChange.bind('subtitle')}
          value={subtitle}
          placeholder={'Ondertitel'}
        />
        <TextareaControl
          label={'Opt in tekst'}
          onChange={onValueChange.bind('consent')}
          value={consent}
          placeholder={'Opt in tekst'}
        />
        <TextControl
          label={'Teken knop'}
          onChange={onValueChange.bind('sign')}
          value={sign}
          placeholder={'Teken knop'}
        />
        <TextControl
          label={'Link naar actievoorwaarden'}
          onChange={onValueChange.bind('campaignpolicy')}
          value={campaignpolicy}
          placeholder={'Link naar actievoorwaarden'}
        />
        <TextControl
          label={'Bedankt titel'}
          onChange={onValueChange.bind('thanktitle')}
          value={thanktitle}
          placeholder={'Bedankt titel'}
        />
        <TextareaControl
          label={'Bedankt tekst'}
          onChange={onValueChange.bind('thanktext')}
          value={thanktext}
          placeholder={'Bedankt tekst'}
          help={'Deze tekst wordt getoond nadat iemand de petitie tekent.'}
        />
        <TextControl
          label={'Doneerknop bij bedankttekst'}
          onChange={onValueChange.bind('donatebuttontext')}
          value={donatebuttontext}
          placeholder={'Doneerknop bij bedankttekst'}
          help={'Nadat iemand de petitie tekent wordt een doneerknop getoond waarin we vragen om financiële steun. De tekst op de knop kun je hier instellen.'}
        />
        <TextControl
          label={'Link van doneerknop'}
          onChange={onValueChange.bind('donatebuttonlink')}
          value={donatebuttonlink}
          placeholder={'Link van doneerknop'}
          help={'Hiernaartoe verwijst de doneerknop. "/doneren" is de standaardpagina voor Greenpeace Nederland.'}
        />
        <CheckboxControl
          label={'Verberg sharing button?'}
          onChange={onValueChange.bind('hidesharingbuttons')}
          value={hidesharingbuttons}
          help={'Als dit aangevinkt is worden de sharing buttons niet getoond.'}
        />
        <TextControl
          label={'Twitter tekst'}
          onChange={onValueChange.bind('twittertext')}
          value={twittertext}
          placeholder={''}
          help={'Deze tekst wordt getoond wanneer iemand na het tekenen de pagina deelt op twitter.'}
        />
        <TextControl
          label={'Whatsapp text'}
          onChange={onValueChange.bind('whatsapptext')}
          value={whatsapptext}
          placeholder={''}
          help={'Deze tekst wordt getoond wanneer iemand na het tekenen de pagina deelt op whatsapp.'}
        />
        <TextControl
          label={'Marketingcode'}
          onChange={onValueChange.bind('marketingcode')}
          value={marketingcode}
          placeholder={''}
          help={'Marketingcode.'}
        />
        <TextControl
          label={'Literaturecode'}
          onChange={onValueChange.bind('literaturecode')}
          value={literaturecode}
          placeholder={''}
          help={'Literaturecode.'}
        />
        <TextControl
          label={'Campaigncode'}
          onChange={onValueChange.bind('campaigncode')}
          value={campaigncode}
          placeholder={''}
          help={'Campaigncode.'}
        />

        <TextControl
          label={'Counter min'}
          onChange={onNumberChange.bind('countermin')}
          value={countermin}
          help={'Het minimale aantaal ondertekeningen voordat de counter getoond wordt.'}
        />
        <TextControl
          label={'Counter max'}
          onChange={onNumberChange.bind('countermax')}
          value={countermax}
          type={'Number'}
          help={'Tot hoeveel ondertekeningen wordt er geteld?'}
        />
        <TextControl
          label={'Counter tekst'}
          onChange={onValueChange.bind('countertext')}
          value={countertext}
          placeholder={''}
          help={'De tekst naast het aantal.'}
        />

        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={onSelectImage}
            value={image}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>



        <InspectorControls>
          <PanelBody title={'Geavanceerde instellingen'}>
            <strong className="panel-body--warning">LET OP! De instellingen hieronder alleen gebruiken als je weet wat ze doen en waar ze voor zijn!</strong>

            <TextControl
              label={'Google Analytics action'}
              onChange={onValueChange.bind('ga_action')}
              value={ga_action}
            />

  <SelectControl
          label={'Advertentiecampagne?'}
          onChange={onValueChange.bind('ad_campaign')}
          value={ad_campaign}
          options={ [
            { label: 'Greenpeace', value: 'GP' },
            { label: 'Social Blue', value: 'SB' },
            { label: 'Jalt', value: 'JA' },
          ] }
        />

            <TextControl
              label={'Social blue _apRef'}
              onChange={onValueChange.bind('apref')}
              value={apref}
              help={'Vul hier de _apRef uit de Social Blue pixel bedankpagina in.'}
            />
            <TextControl
              label={'Jalt tracking identifier'}
              onChange={onValueChange.bind('jalt_track')}
              value={jalt_track}
              help={'Vul hier de tracking identifier van Jalt in.'}
            />
            <RangeControl
              label={'Formulier ID'}
              onChange={onValueChange.bind('form_id')}
              value={form_id}
              help={'Gebruik dit als er meerdere petitieformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.'}
            />


          </PanelBody>
        </InspectorControls>

      </Fragment>
    ])
  }
}
