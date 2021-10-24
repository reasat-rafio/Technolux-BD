"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [{
    title: 'Title',
    name: 'title',
    type: 'string'
  }, {
    title: 'Price',
    name: 'price',
    type: 'number'
  }, {
    title: 'Offer Price',
    name: 'offer_price',
    type: 'number'
  }, {
    name: 'images',
    title: 'Images',
    type: 'array',
    of: [{
      type: 'image',
      options: {
        hotspot: true
      }
    }]
  }]
};
exports["default"] = _default;