import React from 'react';

import {InnerBlocks} from '@wordpress/block-editor';

export default function Save(props) {

	const {
		openTitle,
		openButton,
		modalTitle,
		ctaTitle,
		cancelTitle,
		showCta,
		showCancel,
		uniqueId
	} = props.attributes;

	console.log(props.attributes);

	return (
			<>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#' + uniqueId}>
					{openTitle}
				</button>

				<div className="modal fade" id={uniqueId} tabIndex="-1" role="dialog" aria-labelledby={uniqueId + 'Label'} aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id={uniqueId + 'Label'}>title</h5>
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
