import { useProductInfo } from "./hooks/use-product-info";
import { ProductSizes } from "./sizes-system/product-sizes";
import { useStore } from "./store";

interface SizesTileProps {
  productId: string;
}

export const SizesTile = (props: SizesTileProps) => {
  const { productId } = props;
  const productInfo = useProductInfo(productId);
  const size = useStore((state) => state.size);
  const updateSize = useStore((state) => state.setSize);

  const handleSizeSelected = (selectedSize: string) => {
   if (updateSize) {
      updateSize(selectedSize);
    }
  }

  if (!productInfo) {
    return <div className="p-4 text-gray-500">Loading product information...</div>;
  }

  return (
    <div className="tile sizes-tile">
      <ProductSizes sizes={productInfo.sizes} 
        selectedSize={size}
        onSelect={handleSizeSelected}
      />
    </div>
  );
};
