import BaseBlock from '../BaseBlock';
import {TweetEditor} from './TweetEditor';
import {frontendRendered} from '../frontendRendered';

export class TweetBlock extends BaseBlock {

  constructor() {
    super();

    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;
    const attributes = {
      defaultTweet: {
        type: 'string',
        default: 'Duis varius ipsum sapien, et suscipit eros finibus et. Aenean fringilla sapien auctor tortor fermentum, nec hendrerit velit ullamcorper. Quisque sit amet nulla a ante condimentum tristique quis eu tortor. Curabitur suscipit augue vitae vestibulum tempus. Morbi venenatis finibus pretium. Nam vel tellus molestie, hendrerit quam nec, pretium metus. Sed vestibulum consequat eros. Suspendisse consequat dapibus sem sit amet porta.'
      },
      alternativeTweets: {
        type: 'array',
        default: ['this is one', 'this is two'],
      },
      alwaysRandom: {
        type: 'boolean',
        default: false
      }
    };

    registerBlockType('planet4-gpnl-blocks/tweet', {
      title: 'tweet',
      category: 'planet4-gpnl-blocks',
      attributes,
      // deprecated: [
      //   {
      //     attributes,
      //     save() {
      //       return null;
      //     },
      //   }
      // ],
      edit: ( { isSelected, attributes, setAttributes } ) => {
        return <TweetEditor
          attributes={attributes}
          setAttributes={setAttributes}
          isSelected={ isSelected }
        />;
      },
      save: frontendRendered( 'planet4-gpnl-blocks/tweet' )
    } );
  }
}
