// All the JS of our blocks have to be imported and instantiated in this file so they can all be used in the Gutenberg editor.
// Styles of the blocks are imported separately in the 'editor-styles.scss' file.

import { QuoteBlock } from "../../blocks/Quote/js/QuoteBlock";
const quoteBlock = new QuoteBlock();

import { HeroImageBlock } from "../../blocks/HeroImage/js/HeroImageBlock";
const heroImageBlock = new HeroImageBlock();

import { NewsletterBlock } from "../../blocks/Newsletter/js/NewsletterBlock";
const newsletterBlock = new NewsletterBlock();

import { PetitionBlock } from "../../blocks/Petition/js/PetitionBlock";
const petitionBlock = new PetitionBlock();

import { DonationBlock } from "../../blocks/Donation/js/DonationBlock";
const donationBlock = new DonationBlock();

import { TwoColumnEmbedBlock } from "../../blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock";
const twoColumnEmbedBlock = new TwoColumnEmbedBlock();

import { NoindexBlock } from "../../blocks/Noindex/js/NoindexBlock";
const noindexBlock = new NoindexBlock();

import { InforequestBlock } from "../../blocks/Inforequest/js/InforequestBlock";
const inforequestBlock = new InforequestBlock();

import { EducationcoversBlock } from "../../blocks/Educationcovers/js/EducationcoversBlock";
const educationcoversBlock = new EducationcoversBlock();
