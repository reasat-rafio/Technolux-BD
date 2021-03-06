import Container from '@components/ui/container';
import { homeThreeMasonryBanner as masonryBanner } from '@framework/static/banner';
import BannerBlock from 'src/containers/banner-block';
import BannerSliderBlock from 'src/containers/banner-slider-block';
import CategoryBlock from 'src/containers/category-block';
import ProductsFlashSaleBlock from 'src/containers/product-flash-sale-block';
import ProductsFeatured from 'src/containers/products-featured';
import { homeThreeBanner as banner } from '@framework/static/banner';
import BannerCard from '@components/common/banner-card';
import { ROUTES } from '@utils/routes';
import BannerWithProducts from 'src/containers/banner-with-products';
import ExclusiveBlock from 'src/containers/exclusive-block';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Subscription from '@components/common/subscription';
import Layout from '@components/layout/layout';
import { GetStaticProps } from 'next';
import { withDimensions, renderObjectArray } from 'sanity-react-extra';
import groq from 'groq';
import { pageQuery } from '@lib/query';
import { sanityStaticProps, useSanityQuery } from '@utils/sanity';
import { SanityProps } from 'next-sanity-extra';

const query = pageQuery(groq`
   *[_id == "landingPage"][0] {
     ...,
      sections[]{
      ...,
      banners[]{
        ...,
        images{
          ...,
          desktopBanner{
          ...,
          "image": ${withDimensions('image')},
          },
          mobileBanner{
          ...,
          "image": ${withDimensions('image')},
          },
        }
      },
    },
  }`);

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await sanityStaticProps({ query: query, context }),
  revalidate: 5,
});

export function Index(props: SanityProps) {
  const { page, site } = useSanityQuery(query, props).data;

  return (
    <>
      {renderObjectArray(page.sections, {
        heroBanners: BannerBlock,
      })}

      <Container>
        <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
      </Container>
      <BannerSliderBlock />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />
        <ProductsFeatured sectionHeading="text-featured-products" />
        {/* <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        /> */}

        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
        />
        {/* <ExclusiveBlock /> */}
        <NewArrivalsProductFeed />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
    </>
  );
}

export default Index;

Index.Layout = Layout;
