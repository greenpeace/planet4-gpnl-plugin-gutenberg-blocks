import { HeroImageIcon } from './HeroImageIcon.js';
import { HeroImage } from './HeroImage';

export class HeroImageBlock {
  constructor() {
	  const { __ } = wp.i18n;
	  const { registerBlockType } = wp.blocks;  // - Extract the `registerBlockType` function from
                                            //   the `wp.blocks` object.

  // - Add the `arctic-sunrise` block to the `planet4-gutenberg-experiments` namespace
	  registerBlockType( 'planet4-blocks/hero-image', {

	  title: __('Hero Image'),                      // - Sets the block title
	  icon: HeroImageIcon,                      // - The icon is a React component
	  category: 'planet4-gpnl-blocks',
	  keywords: [
		  __('hero image'),
		  __('GPNL'),
		  __('header'),
	  ],

	  // PART 3.2: Markup in editor
	  edit: function( props ) {
		  return (
			  <div>You’ll see this in the editor</div>
		  );
	  },

	//   edit() {
    // return <HeroImage />;                         // - Returns the JSX for the Edit window
    // },
    save() {
    return null;                                  // - The `save()` function of a block's backend
                                                  //   should be a *pure function*, it's used mainly
                                                  //   to generate the content to be saved for static blocks
                                                  //   from the client side, to be rendered on the frontend.
                                                  //   In this case, it returns null as the rendering for
                                                  //   the frontend view, is handled by the server-side
                                                  //   render_callback.
    }
  } );
  };
}

