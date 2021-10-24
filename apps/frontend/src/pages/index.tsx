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
        <ExclusiveBlock />
      </Container>
    </>
  );
}

export default Index;
