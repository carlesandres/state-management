import { useProductInfo } from "./hooks/use-product-info";
import { ProductImagery } from "./imagery-system/product-imagery";

interface ProductImageryTileProps {
  productId: string;

}

const ProductImageryTile = (props: ProductImageryTileProps) => {
  const { productId } = props;
  const productInfo = useProductInfo(productId);

  return (
    <div>
      <ProductImagery images={productInfo.images} />
    </div>
  );
};

export default ProductImageryTile;
