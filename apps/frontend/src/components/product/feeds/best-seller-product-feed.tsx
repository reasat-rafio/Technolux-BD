import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import ProductsBlock from 'src/containers/products-block';

export default function BestSellerProductFeed() {
  const { data, isLoading, error } = useBestSellerProductsQuery({
    limit: 10,
  });

  return (
    <ProductsBlock
      sectionHeading="text-best-sellers"
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="best-sellers"
    />
  );
}
