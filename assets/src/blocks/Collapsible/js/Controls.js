/**
 * Internal dependencies
 */
import Icon from './IconOpen';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar } from '@wordpress/components';

class Controls extends Component {
	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			open,
		} = attributes;

		const customControls = [
			{
				icon: Icon,
				title: 'Toon geopend',
				onClick: () => setAttributes( { open: ! open } ),
				isActive: open === true,
			},
		];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar controls={ customControls } />
				</BlockControls>
			</Fragment>
		);
	}
}

export default Controls;
