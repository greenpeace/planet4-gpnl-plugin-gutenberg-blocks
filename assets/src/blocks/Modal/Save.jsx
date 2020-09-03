import React from 'react';

import {RichText, InnerBlocks} from '@wordpress/block-editor';

const save = ({attributes}) => {
	const {
		open,
		title,
	} = attributes;

	let timestamp = new Date().getTime();

	return (

			<>

				<button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#'+timestamp}>
					Launch demo modal
				</button>

				<div className="modal fade" id={timestamp} tabIndex="-1" role="dialog" aria-labelledby={timestamp+'Label'} aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id={timestamp+'Label'}>Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<InnerBlocks.Content/>

							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>

			</>
	);
};

export default save;
