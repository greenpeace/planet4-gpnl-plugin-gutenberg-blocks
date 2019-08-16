import BaseBlock from "../../BaseBlock";
import {DateTimePicker, PanelRow} from "@wordpress/components";

const {__} = wp.i18n; // Import __() from wp.i18n
const {MediaUpload, RichText, PlainText, InspectorControls} = wp.editor;
const {PanelBody, TextControl, SelectControl} = wp.components;


// I am trying to create a LiveBlog block which contains all items of the blog.
export class TestBlock extends BaseBlock {


	constructor() {
		super();

		const {registerBlockType} = wp.blocks;
		const blockNameKebabCase = this.blockNameKebabCase;

		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
			],
			attributes: {
				items: {
					source: "query",
					default: [],
					selector: "p.liveblog",
					query: {
						image: {
							source: "attribute",
							selector: "img",
							attribute: "src"
						},
						index: {
							source: "text",
							selector: "span.liveblog-index"
						},
						content: {
							source: "text",
							selector: "span.liveblog-content"
						},
						datetime: {
							source: "text",
							selector: "span.liveblog-datetime"
						},
						position: {
							source: "text",
							selector: "span.liveblog-position"
						}
					}
				},
				liveblog_items_shown: {
					type: 'number',
					default: 25,
				},
				liveblog_style: {
					type: 'select',
					default: 'one',
				},
			},

			/**
			 * The edit function describes the structure of your block in the context of the editor.
			 * This represents what the editor will render when the block is used.
			 *
			 * The "edit" property must be a valid function.
			 *
			 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
			 */

			// The "edit" property must be a valid function.
			edit: function (props) {

				const {items} = props.attributes;

				const t_style_control = [
					{value: 'one', label: __('Style 1')},
					{value: 'two', label: __('Style 2')},
					{value: 'three', label: __('Style 3')},
				];

				const inspectorControls = (
					<InspectorControls>
						<PanelBody title={__('Liveblog Setting')}>
							<SelectControl
								label={__('Liveblog style')}
								options={t_style_control}
								value={props.attributes.liveblog_style}
								onChange={(liveblog_style) => props.setAttributes({liveblog_style})}
							/>
							<TextControl
								label={__('Maximum number of items to show')}
								type="text"
								value={props.attributes.liveblog_items_shown}
								onChange={(liveblog_items_shown) => props.setAttributes({liveblog_items_shown})}
							/>
						</PanelBody>
					</InspectorControls>
				);

				const itemsList = items
					.sort((a, b) => b.index - a.index)
					.map(liveblog => {
						return (
							<div className="liveblog-item">
								<p>
									  <span>
										Item {Number(liveblog.index) + 1}
									  </span>
									{' '}
									(
									<a
										className="remove-liveblog-item"
										onClick={() => {
											var result = confirm("Are you sure you want to delete this item?");
											if (!result) {
												e.preventDefault();
											} else {
												const newItems = items
													.filter(item => item.index != liveblog.index)
													.map(t => {
														if (t.index > liveblog.index) {
															t.index -= 1;
														}
														return t;
													});

												props.setAttributes({
													items: newItems
												});
											}
										}
										}
									>
										remove item
									</a>
									)
								</p>
								<div className="wp-block-liveblog">
									<PlainText
										className="liveblog-content"
										style={{height: 58}}
										placeholder="content"
										value={liveblog.content}
										// autoFocus
										onChange={content => {
											const newObject = Object.assign({}, liveblog, {
												content: content
											});
											props.setAttributes({
												items: [
													...items.filter(
														item => item.index != liveblog.index
													),
													newObject
												]
											});
										}}
									/>
									{ /*TODO: make this a pop-up */ }
									<DateTimePicker
										currentDate={liveblog.datetime}
										onChange={datetime => {
											const newObject = Object.assign({}, liveblog, {
												datetime: datetime
											});
											props.setAttributes({
												items: [
													...items.filter(
														item => item.index != liveblog.index
													),
													newObject
												]
											});
										}}
										value={liveblog.datetime}
										is12Hour={false}
									/>

									<MediaUpload
										onSelect={media => {
											const image = media.sizes.medium
												? media.sizes.medium.url
												: media.url;
											const newObject = Object.assign({}, liveblog, {
												image: image
											});
											props.setAttributes({
												items: [
													...items.filter(
														item => item.index != liveblog.index
													),
													newObject
												]
											});
										}}
										type="image"
										value={liveblog.image}
										render={({open}) =>
											liveblog.image ? (

												<div
													className="gpnl_liveblog_datetime_img"
													style={{
														backgroundImage: `url(${liveblog.image})`,
														height: '100px',
													}}
													onClick={open}
												/>

											) : (
												<a
													href="#"
													className="gpnl_liveblog_datetime_img"
													onClick={open}
												>
													Select Image (optional)
												</a>
											)
										}
									/>

									<PlainText
										className="liveblog-position-content"
										style={{display: 'none' }}
										placeholder="Position"
										value={liveblog.position}
										onChange={position => {
											const newObject = Object.assign({}, liveblog, {
												position: position
											});
											props.setAttributes({
												items: [
													...items.filter(
														item => item.index != liveblog.index
													),
													newObject
												]
											});
										}}
									/>

								</div>
							</div>
						);
					});
				return ([
					inspectorControls,
					<div className={props.className}>
						<button
							// className="add-more-liveblog"
							onClick={ () =>
								props.setAttributes({
									items: [
										...props.attributes.items,
										{
											index: props.attributes.items.length,
											content: "",
											datetime: "",
											position: ""
										}
									]
								})
							}
						>
							+ add item
						</button>
						{itemsList}
					</div>
				]);
			},

			/**
			 * The save function defines the way in which the different attributes should be combined
			 * into the final markup, which is then serialized by Gutenberg into post_content.
			 *
			 * The "save" property must be specified and must be a valid function.
			 *
			 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
			 */
			save: props => {
				const {items} = props.attributes;

				const itemsList = items.map(function (liveblog) {

					return (
						<div key={liveblog.index}>
							<p className="liveblog">
            					<span className="liveblog-index" style={{display: "none"}}>{liveblog.index}</span>

								{liveblog.image && (
									<img className="liveblog-image" src={liveblog.image}/>
								)}

								{liveblog.content && (
									<span className="liveblog-content">{liveblog.content}</span>
								)}

								{liveblog.datetime && (
									<span className="liveblog-datetime">{liveblog.datetime}</span>
								)}

								{liveblog.position && (
									<span className="liveblog-position">{liveblog.position}</span>
								)}
							</p>
						</div>
					);
				});
				if (items.length > 0) {
					return (

						<section className="section liveblog-block">
							<div className="liveblog"
								 data-t_style={props.attributes.liveblog_style}
								 data-t_show={props.attributes.liveblog_items_shown}
							>
								{itemsList}
							</div>
						</section>

					);
				} else return null;
			}
		});
	}
}
