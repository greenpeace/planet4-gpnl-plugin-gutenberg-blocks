import { TestIcon } from './TestIcon.js';
import { Test } from "./Test.js";

export class TestBlock {

    constructor() {
// PART 2: Setup references to external functions
		const { __ } = wp.i18n;
		const { registerBlockType } = wp.blocks;

		// PART 3: Register the block!
        registerBlockType( 'planet4-blocks/test', {
            title: 'Test',
            icon: TestIcon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__( 'Test' ),
				__( 'Another Example' ),
],

			// // PART 3.2: Markup in editor
			// edit: function( props ) {
			// 	return (
			// 		<div>You’ll see this in the editor</div>
			// 	);
			// },

			// PART 3.2: Markup in editor
			edit: () => {

				return < Test />
			},


			// this is done in PHP
            save() {
							return null;
            }
        } );
    };
}

