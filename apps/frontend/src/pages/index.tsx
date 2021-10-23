import Container from "@components/ui/container";
import { homeThreeMasonryBanner as masonryBanner } from "@framework/static/banner";
import BannerBlock from "src/containers/banner-block";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";

export function Index() {

  return (
    <>
      <BannerBlock data={masonryBanner} />

			<Container>
				<ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
			</Container>

    </>
  );
}

export default Index;
