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
              name: 'images',
              type: 'object',
              title: 'Images',
              fields: [
                {
                  title: 'Mobile Banner',
                  name: 'mobileBanner',
                  type: 'object',
                  fields: [
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },

                    { title: 'Width', name: 'width', type: 'number' },
                    { title: 'height', name: 'height', type: 'number' },
                  ],
                },

                {
                  title: 'Desktop Banner',
                  name: 'desktopBanner',
                  type: 'object',
                  fields: [
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },

                    { title: 'Width', name: 'width', type: 'number' },
                    { title: 'height', name: 'height', type: 'number' },
                  ],
                },
              ],
            },

            {
              title: 'type',
              name: 'Type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Small',
                    value: 'small',
                  },
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
              media: 'images.mobileBanner.image',
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
