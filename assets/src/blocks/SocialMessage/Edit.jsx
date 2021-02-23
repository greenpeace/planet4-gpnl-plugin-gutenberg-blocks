import {Component, Fragment} from '@wordpress/element';
import {InspectorControls, URLInput} from '@wordpress/block-editor';
import {TextareaControl, PanelBody, ToggleControl, SelectControl} from '@wordpress/components';
import {Frontend} from './Frontend';


export class Edit extends Component {
  constructor(props) {
    super(props);
    this.handleErrors = this.handleErrors.bind(this);
    this.state = {};
  }

  handleErrors(errors) {
    this.setState(errors);
  }

  renderEdit() {

    const {attributes, setAttributes, changeAlternativeTweet, removeAlternativeTweet, updateAttribute} = this.props;

    // const toAttribute = attributeName => value => {
    //   setAttributes({[attributeName]: value});
    // };

    const alternativeTweets = attributes.alternativeTweets.map(function (value, index) {

      return (
        <div key={index}>
          <TextareaControl
            label={'Alternatieve berichten ' + (index + 1)}
            placeholder={'Typ hier een alternatief bericht...'}
            value={value}
            onChange={(value) => changeAlternativeTweet(index, value)}
          />
          <button onClick={() => removeAlternativeTweet(index)}>verwijder alternatieve tweet</button>
          <hr/>
        </div>
      );
    });

    return (
      <Fragment>
        <TextareaControl
          label={'Standaard bericht'}
          placeholder={'Typ hier...'}
          value={attributes.defaultTweet}
          onChange={updateAttribute('defaultTweet')}
        />

        <InspectorControls>
          <PanelBody title={'Opties'}>

            <SelectControl
              label={'Medium bericht'}
              help={'Selecteer het medium waarop dit bericht gedeeld kan worden.'}
              value={attributes.medium}
              onChange={updateAttribute('medium')}
              options={[
                {value: 'twitter', label: 'Twitter'},
                {value: 'facebook', label: 'Facebook'},
                {value: 'whatsapp', label: 'Whatsapp'}
              ]}
            />

            <TextareaControl
              label={'Bedanktekst'}
              placeholder={''}
              value={attributes.thanksText}
              onChange={updateAttribute('thanksText')}
              help={'Tekst die getoond wordt nadat iemand het bericht deelt.'}
            />
            <label className={'components-base-control__label'}><strong>URL</strong></label>
            <URLInput
              value={attributes.url}
              onChange={updateAttribute('url')}
            />
            <p className={'components-base-control__help'}>
              <em>
                Voer een URL in als je deze aan het bericht wil koppelen. <strong>Verplicht bij een Facebook
                bericht!</strong>
              </em>
            </p>
          </PanelBody>

          <PanelBody title={'Alternatieve berichten'}>
            {alternativeTweets}
            <button onClick={this.props.addAlternativeTweet} className={'add'}>voeg alternatief bericht toe</button>
            <hr/>

            <ToggleControl
              label={'Toon willekeurig'}
              help={'Vink dit aan om elke keer een willekeurig bericht te tonen ipv het standaardbericht.'}
              value={attributes.alwaysRandom}
              checked={attributes.alwaysRandom}
              onChange={updateAttribute('alwaysRandom')}
            />

          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  renderView() {
    const {attributes} = this.props;

    return <Frontend {...attributes} handleErrors={this.handleErrors}/>;
  }

  render() {
    return (
      <Fragment>
        {
          this.props.isSelected
            ? this.renderEdit()
            : this.renderView()
        }
      </Fragment>
    );
  }
}
