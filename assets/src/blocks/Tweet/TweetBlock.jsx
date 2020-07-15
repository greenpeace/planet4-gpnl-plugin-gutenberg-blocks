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
        default: [],
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

      edit: ( { isSelected, attributes, setAttributes } ) => {

		const updateAttribute = (attributeName) => value => {
		  setAttributes({[attributeName]: value});
		};

		const addAlternativeTweet = () => {
		  // Create a new array of alternative tweets
		  let newArray = [...attributes.alternativeTweets];
		  newArray.push('');
		  setAttributes({alternativeTweets : newArray});
		};

		const removeAlternativeTweet = (index) => {
		  let newArray = [...attributes.alternativeTweets];
		  newArray.splice(index, 1);
		  setAttributes({alternativeTweets : newArray});
		};

		const changeAlternativeTweet = (index, value) => {
		  let newArray = [...attributes.alternativeTweets];
		  newArray[index] = value;
		  setAttributes({alternativeTweets : newArray});
		};

        return <TweetEditor
          attributes={attributes}
          setAttributes={setAttributes}
          isSelected={ isSelected }
		  updateAttribute={updateAttribute}
		  addAlternativeTweet={addAlternativeTweet}
		  removeAlternativeTweet={removeAlternativeTweet}
		  changeAlternativeTweet={changeAlternativeTweet}
        />;
      },
      save: frontendRendered( 'planet4-gpnl-blocks/tweet' )
    } );
  }
}
