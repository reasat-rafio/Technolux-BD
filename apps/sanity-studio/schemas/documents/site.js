import { FaSitemap } from 'react-icons/fa';

export default {
  name: 'site',
  type: 'document',
  title: 'Site',
  icon: FaSitemap,
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    { name: 'ogImage', type: 'image', title: 'Default SEO Image' },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
};
