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

export function Index() {
  return (
    <>
      <BannerBlock data={masonryBanner} />

      <Container>
        <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
      </Container>
      <BannerSliderBlock />

      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />

        <ProductsFeatured sectionHeading="text-featured-products" />

        <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />

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
