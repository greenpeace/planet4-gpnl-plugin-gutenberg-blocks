import React, {Component} from 'react';
import {RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import {Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';
import variables from "../../../base/_variables_gpnl.scss";
import PdfImage from './PdfImage.js'

export default class PdfEmbed extends Component {

  render() {

    const {
      title,
      description,
      document_id,
      document_url,
      onSelectMedia,
      onValueChange,
    } = this.props;


    const fields =
      <div className="pdf-embed__wrapper">
        <div className="">
          <h3 className="" style={{marginBottom: '0'}}>
            <RichText
              onChange={onValueChange.bind('title')}
              value={title}
              placeholder={'Enter a title'}
            />
          </h3>

          <RichText
            onChange={onValueChange.bind('description')}
            value={description}
            tagName={'p'}
            className={''}
            placeholder={'Abstract / description (optional)'}
          />
        </div>
        {PdfImage}

      </div>
    ;

    const getMediaOrButton = (openEvent) => {
      if (document_id) {
        return (
          <div style={{
            minHeight: "inherit",
            overflow: "hidden",
            // backgroundImage: `url(${image_url})`,
            backgroundSize: "cover",
            // backgroundPosition: `${focus_image}`
          }}>
            <BlockControls>
              <div className={'components-toolbar'}>
                <a className={'components-toolbar-text-button'} onClick={openEvent}>verander doc</a>
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
              style={{position: "absolute", top: "50%", left: "50%", transform: 'translateX(-50%) translateY(-50%)'}}
              className="btn btn-large btn-primary">
              selecteer een pdf
            </Button>
          </div>
        );
      }
    };

    return ([
      <div className={''} style={{maxWidth: "100%", margin: "0"}}>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectMedia}
            value={document_id}
            render={({open}) => getMediaOrButton(open)}
          />
        </MediaUploadCheck>
      </div>
    ])
  }

}


