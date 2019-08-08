import { React, Component } from 'react';
import { ServerSideRender } from '@wordpress/components';
const { RichText, MediaUpload , MediaUploadCheck } = wp.editor;
import { MediaPlaceholder, InspectorControls } from "@wordpress/editor";
const { Button } = wp.components;

export class Hero extends Component {

	constructor(props) {
		super(props);
	}

	renderEdit() {

		console.log(this.props);


		const fields =
		<div className="page-template hero__wrapper ">
			<div className="hero__text">
				<h2 className="hero__title">
					<RichText
						onChange={this.props.onTitleChange}
						value={this.props.title}
						tagName={'span'}
						className={'hero__title'}
						placeholder="enter a title (optional)"
					/>
				</h2>
				<RichText
					onChange={this.props.onDescriptionChange}
					value={this.props.description}
					tagName="p"
					className="hero__description"
					placeholder="enter a description (optional)"
				/>
			</div>
		</div>
		;


    const getImageOrButton = (openEvent) => {
      if(this.props.imageId) {
        return (
			<div style={{ height: "100%", overflow: "hidden", backgroundImage: `url(${this.props.imageUrl})`, backgroundSize: "cover"}}>
				{fields}
				<Button
					onClick={ openEvent }
					className="btn btn-small btn-primary"
					style={{position: "absolute", bottom: "15px", left: "50%"}}
				>
					{/*the style of the button somehow shifts the parent container which will create (seems like) a margin on top*/}
					change image
				</Button>
			</div>
        );
      }
      else {
        return (
            <Button
              onClick={ openEvent }
			  style={{position: "absolute", top: "50%", left: "50%"}}
			  className="btn btn-large btn-primary">
              select an image
            </Button>
        );
      }
    };
		return (
		  <div className="hero" style={{backgroundColor: "#f4f4f4"}}>
			<MediaUploadCheck>
				<MediaUpload
					type="image"
					onSelect={this.props.onSelectImage}
					value={this.props.imageId}
				render={ ({ open }) => getImageOrButton(open) }
				/>
			</MediaUploadCheck>

			  {/*<MediaPlaceholder*/}
				{/*  icon="format-image"*/}
				{/*  onSelect={this.props.onSelectImage}*/}
				{/*  onSelectURL={this.props.onSelectURL}*/}
				{/*  onError={this.props.onUploadError}*/}
				{/*  accept="image/*"*/}
				{/*  allowedTypes={["image"]}*/}
			  {/*/>*/}
		  </div>
		);
	}

	renderView() {
		return (
			<ServerSideRender
				block={'planet4-gpnl-blocks/hero'}
				attributes={{
					title: this.props.title,
					description: this.props.description,
					imageUrl: this.props.imageUrl,
					imageId: this.props.imageId,
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
		)
	}
}
