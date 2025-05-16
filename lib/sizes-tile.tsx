import { useProductInfo } from "./hooks/use-product-info";
import { ProductSizes } from "./sizes-system/product-sizes";

interface SizesTileProps {
  productId: string;
}

export const SizesTile = (props: SizesTileProps) => {
  const { productId } = props;
  const productInfo = useProductInfo(productId);

  return (
    <div>
      <ProductSizes sizes={productInfo.sizes} />
    </div>
  );
};
