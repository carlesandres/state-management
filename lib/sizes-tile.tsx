import { useProductInfo } from "./hooks/use-product-info";
import { ProductSizes } from "./sizes-system/product-sizes";

interface SizesTileProps {
  productId: string;
}

export const SizesTile = (props: SizesTileProps) => {
  const { productId } = props;
  const productInfo = useProductInfo(productId);

  if (!productInfo) {
    return <div className="p-4 text-gray-500">Loading product information...</div>;
  }

  return (
    <div className="tile sizes-tile">
      <ProductSizes sizes={productInfo.sizes} />
    </div>
  );
};
