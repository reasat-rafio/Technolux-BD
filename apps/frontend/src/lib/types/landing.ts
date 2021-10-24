import { SanityImage } from 'sanity-react-extra';

export interface Banner {
  type: string;
  _key: string;
  _type: string;
  image: SanityImage;
  slug: Slug;
  title: string;
}

interface Slug {
  _type: string;
  current: string;
}
