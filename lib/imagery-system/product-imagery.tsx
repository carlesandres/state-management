import { ProductImage } from "@/pages/api/product";
import Image from "next/image";

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
        className="mb-4"
      >{`Selected Colour: ${selectedColour}`}</p>
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
