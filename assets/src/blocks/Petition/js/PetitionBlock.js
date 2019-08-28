import {Petition} from './Petition.js';
import BaseBlock from "../../BaseBlock";

export class PetitionBlock extends BaseBlock  {
  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const {withSelect} = wp.data;


    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: this.blockName,
      icon: 'format-image',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('hero'),
        __('header'),
        __('image'),
      ],
      // This attributes definition mimics the one in the PHP side.
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        count: {
          type: 'integer',
          default: 3
        },
        tags: {
          type: 'array',
          default: []
        },
        posts: {
          type: 'array',
          default: []
        },
        post_types: {
          type: 'array',
          default: []
        },
        read_more_text: {
          type: 'string'
        },
        read_more_link: {
          type: 'string',
          default: ''
        },
        button_link_new_tab: {
          type: 'boolean',
          default: false
        }
      },
      // withSelect is a "Higher Order Component", it works as
      // a Decorator, it will provide some basic API functionality
      // through `select`.
      edit: withSelect((select) => {
        const tagsTaxonomy = 'post_tag';
        const postTypesTaxonomy = 'p4-page-type';
        const args = {
          hide_empty: false,
          per_page: 50,
        };
        const {getEntityRecords} = select('core');

        // We should probably wrap all these in a single call,
        // or maybe use our own way of retrieving data from the
        // API, I don't know how this scales.
        const tagsList = getEntityRecords('taxonomy', tagsTaxonomy, args);
        const postTypesList = getEntityRecords('taxonomy', postTypesTaxonomy, args);

        return {
          postTypesList,
          tagsList,
        };
      })(({
            postTypesList,
            tagsList,
            isSelected,
            attributes,
            setAttributes
          }) => {

        if (!tagsList || !postTypesList) {
          return "Populating block's fields...";
        }

        // TO-DO: Check for posts types and posts too...
        if ((tagsList && tagsList.length === 0) || (postTypesList && postTypesList.length === 0)) {
          return "Populating block's fields...";
        }

        // These methods are passed down to the
        // Articles component, they update the corresponding attribute.

        function onTitleChange(value) {
          setAttributes({title: value});
        }

        function onDescriptionChange(value) {
          setAttributes({description: value});
        }

        function onReadmoretextChange(value) {
          setAttributes({read_more_text: value});
        }

        function onCountChange(value) {
          setAttributes({count: Number(value)});
        }

        function onReadmorelinkChange(value) {
          setAttributes({read_more_link: value});
        }

        function onButtonLinkTabChange(value) {
          setAttributes({button_link_new_tab: value});
        }

        function onSelectedTagsChange(tagIds) {
          setAttributes({tags: tagIds});
        }

        function onSelectedPostsChange(value) {
          setAttributes({posts: value});
        }

        function onSelectedPostTypesChange(postTypeIds) {
          setAttributes({post_types: postTypeIds});
        }

        function onIgnoreCategoriesChange(value) {
          setAttributes({ignore_categories: value});
        }

        // We pass down all the attributes to Covers as props using
        // the spread operator. Then we selectively add more
        // props.
        return <Petition
          {...attributes}
          isSelected={isSelected}
          tagsList={tagsList}
          postTypesList={postTypesList}
          onSelectedTagsChange={onSelectedTagsChange}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onCountChange={onCountChange}
          onSelectedPostsChange={onSelectedPostsChange}
          onSelectedPostTypesChange={onSelectedPostTypesChange}
          onReadmoretextChange={onReadmoretextChange}
          onReadmorelinkChange={onReadmorelinkChange}
          onButtonLinkTabChange={onButtonLinkTabChange}
          onIgnoreCategoriesChange={onIgnoreCategoriesChange}/>
      }),
      save() {
        return null;
      }
    });
  };
}

