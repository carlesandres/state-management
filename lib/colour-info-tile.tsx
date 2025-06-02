import ColourInfo from "./colour-info-system/colour-info";
import { useProductInfo } from "./hooks/use-product-info";

interface ColourInfoTileProps {
  productId: string
}

const ColourInfoTile = (props: ColourInfoTileProps) => {
  const productInfo = useProductInfo(props.productId);

  if (!productInfo) {
    return <div className="p-4 text-gray-500">Loading product information...</div>;
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <ColourInfo
        colours={productInfo.colours}
      />
    </div>
  );
};

export default ColourInfoTile;
