import React from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";
import Transform from "./Transform";

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
      transforms: Transform,
      keywords: [
				__(this.blockName),
        __('verborgen'),
        __('hidden'),
        __('robots'),
        __('indexed'),
			],
      attributes: null,

			edit( ) {
        return <h4 style={{"color": "red"}}>
                  Deze pagina wordt met dit blok 'verborgen'. Gebruik dit enkel voor dingen als kopie-pagina's voor petities en speciale pagina's voor mailmarketing. Wat dit doet? Een instructie aan zoekmachines om deze pagina niet te indexeren. Ook worden alle categorieën en tags verwijderd.
               </h4>
			},

			save: () => null

		});
	};
}
