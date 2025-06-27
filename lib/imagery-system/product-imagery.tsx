import { ProductImage } from "@/pages/api/product";
import Image from "next/image";

interface ProductImageryProps {
  images: ProductImage[];
  colour: string; 
  size?: string;
}

export const ProductImagery = (props: ProductImageryProps) => {
  const selectedColour = props.colour || "NONE";
  const selectedSize = props.size || "NONE";

  return (
    <div>
      <h2>Product Imagery</h2>
      <div className="flex items-center gap-4 mb-4">
        <span 
          style={{ color: selectedColour.toLowerCase() }}
          className="mb-4" >{`Selected Colour: ${selectedColour}`}</span>
        <span className="mb-4" >{`Selected Size: ${selectedSize}`}</span>
      </div>
      <div className="flex flex-col gap-4">
      {props.images.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
      </div>
    </div>
  );
};
