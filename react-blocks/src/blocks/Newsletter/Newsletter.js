import { Fragment } from "@wordpress/element";
import { React, Component } from 'react';
import { ServerSideRender } from '@wordpress/components';
import { PlainText, RichText, MediaUpload, MediaUploadCheck, InspectorControls, BlockControls} from "@wordpress/editor";
import { Button, PanelBody, ToggleControl } from '@wordpress/components';

export class Newsletter extends Component {

	constructor(props) {
		super(props);
	}

	renderEdit() {

		const getImageOrButton = (openEvent) => {
			// if (this.props.image_id) {
				return (

					<div style={{
						height: "100%",
						overflow: "hidden",
						backgroundImage: `url(${this.props.backgroundimage_url})`,
						backgroundSize: "cover"
					}}>
						{
							<BlockControls>
								<div className={'components-toolbar'}>
									<button onClick={openEvent}>change background image</button>
								</div>
							</BlockControls>
						}
						<div className="page-template gpnl-newsletter__wrapper ">
							<div className="gpnl-newsletter__text">
								<h2 className="gpnl-newsletter__title">
									<RichText
										onChange={this.props.onTitleChange}
										value={this.props.title}
										tagName={'span'}
										placeholder={'enter a title (optional)'}
									/>
								</h2>
								<RichText
									onChange={this.props.onSubtitleChange}
									value={this.props.subtitle}
									tagName={'p'}
									className={'gpnl-newsletter__description'}
									placeholder={'enter an abstract / description (optional)'}
								/>
							</div>
						</div>
					</div>
				);
			// } else {
			// 	return (
			// 		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			// 			<Button
			// 				onClick={openEvent}
			// 				style={{position: "absolute", top: "50%", left: "50%", transform: 'translateX(-50%) translateY(-50%)'}}
			// 				className="btn btn-large btn-primary">
			// 				select an image
			// 			</Button>
			// 		</div>
			// 	);
			// }
		};
				return ([
			<div className={'block happy-point-block-wrap block-wide newsletter__block'}
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
					<PanelBody title={'Database settings'}>
						<RichText
							label={'Marketing code'}
							value={this.props.maketingcode}
							placeholder={'marketing code'}
							onChange={this.props.onMarketingcodeChange}
						/>
						<RichText
							label={'literature code'}
							value={this.props.literaturecode}
							placeholder={'literature code'}
							onChange={this.props.onLiteraturecodeChange}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		])
	}

	renderView() {
		return (
			<ServerSideRender
				block={'planet4-gpnl-blocks/' + this.props.blockNameLowerCase}
				attributes={{
					title: this.props.title,
					subtitle: this.props.subtitle,
					backgroundimage_url: this.props.backgroundimage_url,
					backgroundimage_id: this.props.backgroundimage_id,
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
