import ColourInfo from "./colour-info-system/colour-info";
import { useProductInfo } from "./hooks/use-product-info";

interface ColourInfoTileProps {
  productId: string
}

const ColourInfoTile = (props: ColourInfoTileProps) => {
  const productInfo = useProductInfo(props.productId);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <ColourInfo
        colours={productInfo.colours}
      />
    </div>
  );
};

export default ColourInfoTile;
