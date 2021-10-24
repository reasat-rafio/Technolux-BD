import { MdHome } from 'react-icons/md';

export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing',
  icon: MdHome,
  fields: [
    { name: 'seo', type: 'seo', title: 'SEO' },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'heroBanners' },
        // { type: 'video' },
        // { type: 'about' },
        // { type: 'latestPost' },
        // { type: 'upcoming' },
        // { type: 'plans' },
        // { type: 'roadmap' },
        // { type: 'team' },
        // { type: 'advisors' },
        // { type: 'partnersAndInvestors' },
        // { type: 'faqs' },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'seo.description',
    },
  },
};
