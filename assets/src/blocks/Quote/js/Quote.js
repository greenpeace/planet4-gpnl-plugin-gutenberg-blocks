import React, { Component } from 'react';
import { ServerSideRender } from '@wordpress/components';
const { RichText, MediaUpload , MediaUploadCheck } = wp.editor;
const { Button } = wp.components;

export class Quote extends Component {

  constructor(props) {
    super(props);
  }

  renderEdit() {
    const getImageOrButton = (openEvent) => {
      if(this.props.image_id) {
        return (
          <img
            src={ this.props.image_url }
            onClick={ openEvent }
            className="quote__img"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button
              onClick={ openEvent }
              className="button">
              + image
            </Button>
          </div>
        );
      }
    };
    return (
		  <div className="container">
        <div className="row quote quote--dark">
          <div className="col-2">
            <MediaUploadCheck>
              <MediaUpload
                type="image"
                onSelect={this.props.onSelectImage}
                value={this.props.image_id}
                render={ ({ open }) => getImageOrButton(open) }
              />
            </MediaUploadCheck>
          </div>
          <div className="col-10">
            <RichText
              formattingControls={ [] }
              onChange={this.props.onQuoteChange}
              value={this.props.quote}
              tagName="p"
              className="quote__text"
              placeholder="enter a quote"
            />
            <RichText
              formattingControls={ [] }
              onChange={this.props.onQuoteeChange}
              value={this.props.quotee}
              tagName="p"
              className="quote__author"
              placeholder="enter an author"
            />
          </div>
        </div>
      </div>
    );
  }

  renderView() {
    return (
      <ServerSideRender
        block={'planet4-gpnl-blocks/' + this.props.blockNameKebabCase}
        attributes={{
          quote: this.props.quote,
          quotee: this.props.quotee,
          image_url: this.props.image_url,
          image_id: this.props.image_id,
        }}
      >
      </ServerSideRender>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.isSelected
            ? this.renderEdit()
            : this.renderView()
        }
      </div>
    );
  }
}
