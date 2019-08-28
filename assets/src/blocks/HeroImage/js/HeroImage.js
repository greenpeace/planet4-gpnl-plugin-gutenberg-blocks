import { Fragment } from "@wordpress/element";
import { React, Component } from 'react';
import { ServerSideRender } from '@wordpress/components';
import { RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import { Button, PanelBody, ToggleControl } from '@wordpress/components';

export class HeroImage extends Component {

  renderEdit() {

		const fields =
			<div className="page-template hero__wrapper ">
				<div className="hero__text">
					<h2>
						<RichText
							onChange={this.props.onTitleChange}
							value={this.props.title}
							tagName={'span'}
							className={'hero__title'}
							placeholder={'enter a title (optional)'}
						/>
					</h2>
					<RichText
						onChange={this.props.onDescriptionChange}
						value={this.props.description}
						tagName={'p'}
						className={'hero__description'}
						placeholder={'enter an abstract / description (optional)'}
					/>
					<div style={{width: '280px'}}>
					<RichText
						onChange={this.props.onLinkTextChange}
						value={this.props.link_text}
						tagName={'button'}
						className={'btn btn-small btn-medium btn-primary hero__button'}
						placeholder={'button text (optional)'}
					 />
					</div>
					<div style={{width: '400px'}}>
					<RichText
						onChange={this.props.onLinkUrlChange}
						value={this.props.link_url}
						tagName={'p'}
						className={''}
						placeholder={'button url (optional unless button text is used)'}
						style={{backgroundColor: 'white'}}
					/>
					</div>
				</div>
			</div>
		;


		const getImageOrButton = (openEvent) => {
			if (this.props.image_id) {
				return (

					<div style={{
						height: "100%",
						overflow: "hidden",
						backgroundImage: `url(${this.props.image_url})`,
						backgroundSize: "cover"
					}}>
						{
							<BlockControls>
								<div className={'components-toolbar'}>
									<button onClick={openEvent}>change hero image</button>
								</div>
							</BlockControls>
						}
						{fields}

					</div>
				);
			} else {
				return (
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<Button
							onClick={openEvent}
							style={{position: "absolute", top: "50%", left: "50%", transform: 'translateX(-50%) translateY(-50%)'}}
							className="btn btn-large btn-primary">
							select an image
						</Button>
					</div>
				);
			}
		};
			let heroClass = "hero";
			if (this.props.is_small === true) {
				heroClass = "hero hero__small"
			}
				return ([
			<div className={heroClass}
				 style={
				 	{backgroundColor: "#f4f4f4", maxWidth: "100%", margin: "0"}}>
				<MediaUploadCheck>
					<MediaUpload
						type="image"
						onSelect={this.props.onSelectImage}
						value={this.props.image_id}
						render={({open}) => getImageOrButton(open)}
					/>
				</MediaUploadCheck>
			</div>,
			<Fragment>
				<InspectorControls>
					<PanelBody title={'Height'}>
						<ToggleControl
							label={'small header'}
							help={'When selected the header height will be smaller than normal. Also, the abstract / description text will no longer appear!'}
							value={this.props.is_small}
							checked={this.props.is_small}
							onChange={this.props.onIsSmall}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		])
	}

	renderView() {
		return (
			<ServerSideRender
				block={'planet4-gpnl-blocks/' + this.props.blockNameKebabCase}
				attributes={{
					title: this.props.title,
					description: this.props.description,
					image_url: this.props.image_url,
					image_id: this.props.image_id,
					link_text: this.props.link_text,
					link_url: this.props.link_url,
					is_small: this.props.is_small,
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

