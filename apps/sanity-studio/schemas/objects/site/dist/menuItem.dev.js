"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = require("react-icons/md");

var _default = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: _md.MdLink,
  fields: [{
    name: 'title',
    title: 'Title',
    type: 'string'
  }, {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title'
    }
  }, {
    name: 'ctaButton',
    title: 'CTA Button',
    type: 'boolean'
  }, {
    name: 'submenu',
    title: 'Submenu',
    type: 'array',
    of: [{
      type: 'menuItem'
    }]
  }],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    }
  }
};
exports["default"] = _default;