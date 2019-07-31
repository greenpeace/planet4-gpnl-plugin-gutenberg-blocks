import React, { Component } from 'react';
import {
  ServerSideRender
} from '@wordpress/components';

export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagTokens: [],
      postTypeTokens: []
    };
  }

  renderEdit() {
    const {__} = wp.i18n;

    return (
        <h3>Hello</h3>
    );
  }

	render() {
		return (
			<div>
				<h3 style={{ backgroundColor: "#61dafb" }}>This line is part of the JSX and is only rendered in the editor. This bit is not saved to the database</h3>
				{
					this.props.isSelected
						? this.renderEdit()
						: null
				}
					<ServerSideRender
						block={ 'planet4-blocks/test' }
						attributes={{ }}>
					</ServerSideRender>
			</div>
		);
	}
}
