import Image from 'next/image';
import Link from '@components/ui/link';
import clsx from 'clsx';
import { siteSettings } from '@settings/site-settings';

const Logo: React.FC<React.AnchorHTMLAttributes<any>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={siteSettings.logo.href}
      className={clsx('inline-flex focus:outline-none', className)}
      {...props}
    >
      <Image
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
