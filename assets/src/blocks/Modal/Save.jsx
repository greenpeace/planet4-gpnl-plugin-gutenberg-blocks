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
				<button type={'button'} className={openButton && 'btn btn-primary'} data-toggle="modal" data-target={'#' + 'modal' + uniqueId}>
					{openTitle}
				</button>

				<div className="modal fade" id={'modal' + uniqueId} tabIndex="-1" role="dialog" aria-labelledby={'modal' + uniqueId + 'Label'} aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							{modalTitle &&
							<div className="modal-header">
								<h5 className="modal-title" id={'modal' + uniqueId + 'Label'}>{modalTitle}</h5>
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
								<a href={ctaUrl} target={ctaUrlInNewTab && '_blank'} className="btn btn-primary" rel={ctaUrlInNewTab && 'noopener noreferrer'}>{ctaTitle}</a>
								}
							</div>
							}
						</div>
					</div>
				</div>
			</>
	);
};
