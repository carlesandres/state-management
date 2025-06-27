import { useProductInfo } from "./hooks/use-product-info";
import { ProductImagery } from "./imagery-system/product-imagery";
import { useStore } from "./store";

interface ProductImageryTileProps {
  productId: string;

}

const ProductImageryTile = (props: ProductImageryTileProps) => {
  const { productId } = props;
  const productInfo = useProductInfo(productId);
  const { colour, size }  = useStore(state => state)

  if (!productInfo) {
    return <div className="p-4 text-gray-500">Loading product information...</div>;
  }

  return (
    <div className="tile product-imagery-tile">
      <ProductImagery images={productInfo.images} colour={colour} size={size} />
    </div>
  );
};

export default ProductImageryTile;
