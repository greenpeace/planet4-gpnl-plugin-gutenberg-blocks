import { Icon } from './QuoteIcon.js';
import { Quote } from "./Quote.js";

export class QuoteBlock {

    constructor() {

		// Setup references to external functions
		const { __ } = wp.i18n;
		const { registerBlockType } = wp.blocks;

		// Getting the name of the class and of the block
		const ClassName = this.constructor.name;
		const ClassNameLowerCase = ClassName.toLowerCase();
		const BlockName = ClassName.split("Block")[0];
		const BlockNameLowerCase  = BlockName.toLowerCase();

		// Register the block
        registerBlockType( 'planet4-blocks/'+BlockNameLowerCase, {
            title: BlockName,
            icon: Icon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__( BlockName ),
				__( 'Another keyword' ),
			],

			// Markup in editor
			edit: () => {
				return < Quote />
			},

			// This should return null because it is done server side (in PHP)
            save() {
            	return null;
            }
        } );

    }

}

