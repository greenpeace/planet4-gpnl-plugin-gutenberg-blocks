// All the JS of our blocks have to be imported and instantiated in this file so they can all be used in the Gutenberg editor.
// Styles of the blocks are imported separately in the 'editor-styles.scss' file.

import '../scss/editor-styles.scss';


import { QuoteBlock } from '../../blocks/Quote/js/QuoteBlock';
new QuoteBlock();

import { HeroImageBlock } from '../../blocks/HeroImage/js/HeroImageBlock';
new HeroImageBlock();

import { NewsletterBlock } from '../../blocks/Newsletter/js/NewsletterBlock';
new NewsletterBlock();

import { PetitionBlock } from '../../blocks/Petition/js/PetitionBlock';
new PetitionBlock();

import { DonationBlock } from '../../blocks/Donation/js/DonationBlock';
new DonationBlock();

import { TwoColumnEmbedBlock } from '../../blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock';
new TwoColumnEmbedBlock();

import { NoindexBlock } from '../../blocks/Noindex/js/NoindexBlock';
new NoindexBlock();

import { InforequestBlock } from '../../blocks/Inforequest/js/InforequestBlock';
new InforequestBlock();

import { EducationcoversBlock } from '../../blocks/Educationcovers/js/EducationcoversBlock';
new EducationcoversBlock();

import { LiveblogBlock } from '../../blocks/Liveblog/js/LiveblogBlock';
new LiveblogBlock();

import { CollapsibleBlock } from '../../blocks/Collapsible/js/CollapsibleBlock';
new CollapsibleBlock();

import { PdfEmbedBlock } from '../../blocks/PdfEmbed/js/PdfEmbedBlock';
new PdfEmbedBlock();

import { FacebookCommentsBlock } from '../../blocks/FacebookComments/js/FacebookCommentsBlock';
new FacebookCommentsBlock();

// import { PeriodicDonationBlock } from '../../blocks/PeriodicDonation/js/PeriodicDonationBlock';
// new PeriodicDonationBlock();

// import { BrochureRequestBlock } from '../../blocks/BrochureRequest/js/BrochureRequestBlock';
// new BrochureRequestBlock();
//
import { TestimonialBlock } from '../../blocks/Testimonial/js/TestimonialBlock';
new TestimonialBlock();

import { SocialMessageBlock } from '../../blocks/SocialMessage/SocialMessageBlock';
new SocialMessageBlock();

import { ColumnsBlock } from '../../blocks/Columns/ColumnsBlock';
new ColumnsBlock();

import { ColumnBlock } from '../../blocks/Column/ColumnBlock';
new ColumnBlock();

/**
 * WordPress dependencies.
 */
const { registerPlugin } = wp.plugins;
import NL_Sidebar_E_activism from './Sidebar/Sidebar.js';


registerPlugin('gpnl-sidebar', {
  icon: 'editor-customchar',
  render: NL_Sidebar_E_activism
});

import { ModalBlock } from '../../blocks/Modal/ModalBlock';
new ModalBlock();
