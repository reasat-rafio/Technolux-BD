import BannerCard from '@components/common/banner-card';
import { Banner } from '@lib/types/landing';

interface BannerProps {
  type: string;
  banners: Banner[];
  className?: string;
}

const BannerBlock: React.FC<BannerProps> = ({ banners }) => {
  const className = 'mb-12 md:mb-14 xl:mb-16';

  console.log(banners);

  return (
    <div
      className={`${className} grid grid-cols-13 max-w-[1920px] mx-auto gap-2 `}
    >
      {banners.map((banner: Banner) => (
        <BannerCard
          key={`banner--key${banner._key}`}
          banner={banner}
          href={`deals/${banner.slug}`}
          effectActive={true}
          variant="default"
          className={banner.type === 'medium' ? 'col-span-3' : 'col-span-7'}
        />
      ))}
    </div>
  );
};

export default BannerBlock;
