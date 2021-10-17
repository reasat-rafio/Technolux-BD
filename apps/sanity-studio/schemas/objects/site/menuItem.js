import { MdLink } from 'react-icons/md';

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdLink,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'ctaButton', title: 'CTA Button', type: 'boolean' },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
  },
};
