import { NextSeo } from 'next-seo';
import Header from '@components/layout/header/header';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import CookieBar from '@components/common/cookie-bar';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import Button from '@components/ui/button';
import { imageUrlBuilder } from '@utils/sanity';

const Layout: React.FC = (pageProps) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  // const ogImage =
  //   pageProps?.data?.page.seo.seoImage ?? pageProps?.data?.site.ogImage;

  // const openGraphImages = ogImage
  //   ? [
  //       { w: 800, h: 600 },
  //       { w: 1200, h: 630 },
  //       { w: 600, h: 600 },
  //       { w: 256, h: 256 },
  //     ].map(({ w, h }) => ({
  //       url: `${imageUrlBuilder.image(ogImage).width(w).height(h).url()}`,
  //       width: w,
  //       height: h,
  //       alt: `${pageProps?.data?.page.seo.title}`,
  //     }))
  //   : [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* <NextSeo
        title={pageProps?.data?.page.seo.title}
        description={pageProps?.data?.page.seo.description}
        openGraph={{
          images: openGraphImages,
        }}
      /> */}
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {pageProps.children}
      </main>
      <Footer />
      <MobileNavigation />
      <Search />
      <CookieBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button onClick={() => onAcceptCookies()} variant="slim">
            Accept cookies
          </Button>
        }
      />
    </div>
  );
};

export default Layout;
