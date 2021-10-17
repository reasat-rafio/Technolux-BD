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

    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
};
