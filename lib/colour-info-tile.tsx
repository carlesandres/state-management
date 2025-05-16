import ColourInfo from "./colour-info-system/colour-info";
import { useProductInfo } from "./hooks/use-product-info";

interface ColourInfoTileProps {
  productId: string
}

const ColourInfoTile = (props: ColourInfoTileProps) => {
  const productInfo = useProductInfo(props.productId);

  return (
    <div>
      <ColourInfo
        colours={productInfo.colours}
      />
    </div>
  );
};

export default ColourInfoTile;
