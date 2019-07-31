import React, { Component } from 'react';

import { ServerSideRender } from '@wordpress/components';

import { LayoutSelector } from '../../components/LayoutSelector/LayoutSelector';
import { Preview } from '../../components/Preview';

export class HeroImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tagTokens: [],
			postTypeTokens: []
		};
	}

	onSelectedTagsChange(tokens) {
		const tagIds = tokens.map( token => {
			return this.props.tagsList.filter( tag => tag.name === token )[0].id;
		});
		this.props.onSelectedTagsChange(tagIds);
		this.setState({ tagTokens: tokens })
	}

	onSelectedPostTypesChange(tokens) {
		const postTypeIds = tokens.map( token => {
			return this.props.postTypesList.filter( postType => postType.name === token )[0].id;
		});
		this.props.onSelectedPostTypesChange(postTypeIds);
		this.setState({ postTypeTokens: tokens })
	}

	renderEdit() {
		const { __ } = wp.i18n;

		const tagSuggestions = this.props.tagsList.map( tag => tag.name );
		const postTypeSuggestions = this.props.postTypesList.map( postType => postType.name );
		const postsSuggestions = this.props.posts.map( post => post.title.rendered );

		return (
				''
		);
	}

	render() {
		return (
			<div>
				{
					this.props.isSelected
						? this.renderEdit()
						: null
				}
					<ServerSideRender
						block={ 'planet4-gpnl-gutenberg-blocks/hero-image' }
						attributes={{
							cover_type: this.props.cover_type,
							covers_view: this.props.covers_view,
							tags: this.props.tags,
							post_types: this.props.post_types,
							title: this.props.title,
							description: this.props.description,
						}}>
					</ServerSideRender>
			</div>
		);
	}
};

