import React, {Component} from 'react';
import {ServerSideRender} from '@wordpress/components';

const {RichText, MediaUpload, MediaUploadCheck} = wp.editor;
const {Button} = wp.components;

export class Testimonial extends Component {

  constructor(props) {
    super(props);
  }

  renderEdit() {

    const {title, name, content, image_id, image_url, image_right, handleValueChange} = this.props;

    const getImageOrButton = (openEvent) => {
      if (image_id) {
        return (
          <img
            src={image_url}
            onClick={openEvent}
            className="quote__img"
          />
        );
      } else {
        return (
          <div className="button-container">
            <Button
              onClick={openEvent}
              className="button">
              + image
            </Button>
          </div>
        );
      }
    };
    return (
      <div className="block block-testimonial">
        <RichText
          onChange={handleValueChange.bind('title')}
          value={title}
          name="title"
          tagName="p"
          className="title"
          placeholder="Vul een titel in."
          keepPlaceholderOnFocus
        />
        <div className="col-4">
        <MediaUploadCheck>
          <MediaUpload
            type="image"
            onSelect={this.props.onSelectImage}
            value={this.props.image_id}
            render={({open}) => getImageOrButton(open)}
          />
        </MediaUploadCheck>
        <RichText
          onChange={handleValueChange.bind('name')}
          value={name}
          name="name"
          tagName="p"
          className="name"
          placeholder="Vul de naam en eventueel de leeftijd in."
        />
        </div>

        <RichText
          onChange={handleValueChange.bind('content')}
          value={content}
          name="content"
          tagName="p"
          className=""
          placeholder="Vul de aanbeveling of ervaring in."
        />
      </div>
    );
  }

  renderView() {
    return (
      <ServerSideRender
        block={'planet4-gpnl-blocks/' + this.props.blockNameKebabCase}
        attributes={{
          title: this.props.title,
          name: this.props.name,
          description: this.props.description,
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
