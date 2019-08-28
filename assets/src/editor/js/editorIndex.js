// All the JS of our blocks have to be imported and instantiated in this file so they can all be used in the Gutenberg editor.
// Styles of the blocks are imported seperately in the 'editor-styles.scss' file.

import { QuoteBlock } from "../../blocks/Quote/js/QuoteBlock";
const quoteBlock = new QuoteBlock();

import { HeroImageBlock } from "../../blocks/HeroImage/js/HeroImageBlock";
const heroImageBlock = new HeroImageBlock();

import { MediaVideoBlock } from "../../blocks/MediaVideo/js/MediaVideoBlock";
const mediaVideoBlock = new MediaVideoBlock();

import { NewsletterBlock } from "../../blocks/Newsletter/js/NewsletterBlock";
const newsletterBlock = new NewsletterBlock();

import { TestBlock } from "../../blocks/Test/js/TestBlock";
const testBlock = new TestBlock();

import { PetitionBlock } from "../../blocks/Petition/js/PetitionBlock";
const petitionBlock = new PetitionBlock();



