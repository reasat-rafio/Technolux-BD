import { GiVerticalBanner } from 'react-icons/gi';

export default {
  title: 'Banners',
  name: 'heroBanners',
  type: 'object',
  icon: GiVerticalBanner,
  fields: [
    {
      name: 'banners',
      type: 'array',
      title: 'Banners',
      of: [
        {
          title: 'Banner',
          name: 'heroBanner',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 200,
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
              },
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },

            {
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Medium',
                    value: 'medium',
                  },
                  {
                    title: 'large',
                    value: 'large',
                  },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },

    prepare(selection) {
      return {
        title: 'Banner',
      };
    },
  },
};
