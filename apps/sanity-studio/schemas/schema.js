// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';

import seo from './objects/seo';

import category from './documents/category';
import brand from './documents/brand';
import deal from './documents/deal';

import site from './documents/site';
import menuItem from './objects/site/menuItem';

import product from './pages/shop/product';
import productVariant from './objects/shop/productVariant';

import localeString from './locale/String';
import localeBlockContent from './locale/BlockContent';

import landingPage from './pages/landing';
import banner from './objects/landing/banner';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    seo,

    site,
    menuItem,

    brand,
    category,
    deal,

    landingPage,
    banner,

    blockContent,

    product,
    productVariant,

    localeBlockContent,
    localeString,
  ]),
});
