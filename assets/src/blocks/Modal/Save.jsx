import React from 'react';

import {InnerBlocks} from '@wordpress/block-editor';

export default function Save(props) {

	const {
		openTitle,
		openButton,
		modalTitle,
		showCta,
		ctaTitle,
		ctaUrl,
		ctaUrlInNewTab,
		cancelTitle,
		showCancel,
		uniqueId
	} = props.attributes;


	const showButtonRow = () => {
		return (showCancel || showCta);
	};

	return (
			<>
				<a type="button" href="#" className={openButton && 'btn btn-primary'} data-toggle="modal" data-target={'#' + uniqueId}>
					{openTitle}
				</a>

				<div className="modal fade" id={uniqueId} tabIndex="-1" role="dialog" aria-labelledby={uniqueId + 'Label'} aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							{modalTitle &&
								<div className="modal-header">
									<h5 className="modal-title" id={uniqueId + 'Label'}>{modalTitle}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
							}
							<div className="modal-body">
								<InnerBlocks.Content/>
							</div>
							{showButtonRow() &&
							<div className="modal-footer">
								{showCancel &&
								<button type="button" className="btn btn-secondary" data-dismiss="modal">{cancelTitle}</button>
								}
								{showCta &&
								<a href={ctaUrl} target={ctaUrlInNewTab && '_blank'} className="btn btn-primary">{ctaTitle}</a>
								}
							</div>
							}
						</div>
					</div>
				</div>
			</>
	);
};
