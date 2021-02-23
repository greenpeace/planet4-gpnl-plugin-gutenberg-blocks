import React from 'react';
import BaseBlock from '../BaseBlock';
import {Edit} from './Edit';
import {frontendRendered} from '../frontendRendered';
import {Icon} from '@wordpress/components';

export class SocialMessageBlock extends BaseBlock {

  constructor() {
    super();

    const {registerBlockType} = wp.blocks;
    const attributes = {
      defaultTweet: {
        type: 'string',
        default: ''
      },
      thanksText: {
        type: 'string',
        default: 'Bedankt voor het delen van dit bericht!'
      },
      medium: {
        type: 'string',
        default: 'twitter' // twitter | facebook | whatsapp
      },
      url: {
        type: 'string',
        default: ''
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

    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'social message',
      category: 'planet4-gpnl-blocks',
      attributes,
      icon: <Icon icon="share"/>,
      // eslint-disable-next-line react/display-name
      edit: ({isSelected, attributes, setAttributes}) => {

        const updateAttribute = (attributeName) => value => {
          setAttributes({[attributeName]: value});
        };

        const addAlternativeTweet = () => {
          // Create a new array of alternative tweets
          let newArray = [...attributes.alternativeTweets];
          newArray.push('');
          setAttributes({alternativeTweets: newArray});
        };

        const removeAlternativeTweet = (index) => {
          let newArray = [...attributes.alternativeTweets];
          newArray.splice(index, 1);
          setAttributes({alternativeTweets: newArray});
        };

        const changeAlternativeTweet = (index, value) => {
          let newArray = [...attributes.alternativeTweets];
          newArray[index] = value;
          setAttributes({alternativeTweets: newArray});
        };

        return <Edit
          attributes={attributes}
          setAttributes={setAttributes}
          isSelected={isSelected}
          updateAttribute={updateAttribute}
          addAlternativeTweet={addAlternativeTweet}
          removeAlternativeTweet={removeAlternativeTweet}
          changeAlternativeTweet={changeAlternativeTweet}
        />;
      },
      save: frontendRendered('planet4-gpnl-blocks/' + this.blockNameKebabCase)
    });
  }
}
