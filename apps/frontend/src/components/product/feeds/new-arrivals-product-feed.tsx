import { useNewArrivalProductsQuery } from '@framework/product/get-all-new-arrival-products';
import ProductsBlock from 'src/containers/products-block';

export default function NewArrivalsProductFeed() {
  const { data, isLoading, error } = useNewArrivalProductsQuery({
    limit: 10,
  });

  return (
    <ProductsBlock
      sectionHeading="text-new-arrivals"
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="new-arrivals"
    />
  );
}
