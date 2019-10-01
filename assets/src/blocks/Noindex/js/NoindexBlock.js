import React from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";

export class NoindexBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;
		const blockNameKebabCase = this.blockNameKebabCase;

		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: 'hidden',
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
        __('verborgen'),
        __('hidden'),
        __('robots'),
        __('indexed'),
			],
      attributes: {
        hidden: {
          type: 'string',
        }
      },

			edit( {} ) {
        return <h4 style={{"color": "red"}}>
                  Deze pagina wordt met dit blok 'verborgen'. Gebruik dit enkel voor dingen als kopie-pagina's voor petities en speciale pagina's maar mailmarketing. Wat dit doet? Een instructie aan zoekmachines om deze pagina niet te indexeren. Verwijderen van tags. Verwijderen van categorien.
               </h4>;
			},

			save: () => null

		});
	};
}
