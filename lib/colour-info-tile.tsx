import ColourInfo from "./colour-info-system/colour-info";
import { useProductInfo } from "./hooks/use-product-info";
import { useStore } from "./store";

interface ColourInfoTileProps {
  productId: string
}

const ColourInfoTile = (props: ColourInfoTileProps) => {
  const productInfo = useProductInfo(props.productId);
  const updateColour = useStore((state) => state.setColour);
  const selectedColour = useStore((state) => state.colour);

  const handleColourSelected = (colour: string) => {
    // TODO: Fix store initialization to avoid this check
    if (updateColour) {
      updateColour(colour);
    }
  }

  if (!productInfo) {
    return <div className="p-4 text-gray-500">Loading product information...</div>;
  }

  return (
    <div className="tile colour-info-tile">
      <ColourInfo
        colours={productInfo.colours}
        selectedColour={selectedColour}
        onSelect={handleColourSelected}
      />
    </div>
  );
};

export default ColourInfoTile;
