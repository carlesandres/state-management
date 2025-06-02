import { ProductImage } from "@/pages/api/product";

interface ProductImageryProps {
  images: ProductImage[];
  colour: string; 
}

export const ProductImagery = (props: ProductImageryProps) => {
  const selectedColour = props.colour || "NONE";

  return (
    <div>
      <h2>Product Imagery</h2>
      <p 
        style={{ backgroundColor: selectedColour.toLowerCase() }}
        className="p-2 mb-4 rounded text-white"
      >{`Selected Colour: ${selectedColour}`}</p>
      <div className="flex flex-col gap-4">
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};
