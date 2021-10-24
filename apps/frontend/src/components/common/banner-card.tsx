import Link from '@components/ui/link';
import type { FC } from 'react';
import clsx from 'clsx';
import { LinkProps } from 'next/link';
import { SanityImg } from 'sanity-react-extra';
import { imageUrlBuilder } from '@utils/sanity';
import { Banner } from '@lib/types/landing';

interface BannerProps {
  banner: Banner;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps['href'];
}

const BannerCard: FC<BannerProps> = ({
  banner,
  className,
  variant = 'rounded',
  effectActive = false,
  classNameInner,
  href,
}) => {
  const { title, image } = banner;

  return (
    <div
      className={clsx(
        ' bg-black w-full 2xl:h-[400px] lg:h-[350px] md:h-[250px] h-[100px]',
        className
      )}
    >
      <Link
        href={href}
        className={clsx(
          'h-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <div className="w-full h-full">
          <SanityImg
            builder={imageUrlBuilder}
            image={image}
            width={600}
            alt={title}
            className={clsx(
              'bg-gray-300 object-cover w-full h-full',
              variant === 'rounded' && 'rounded-md'
            )}
          />
        </div>

        {effectActive && (
          <div className="absolute top-0 left-[-100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
