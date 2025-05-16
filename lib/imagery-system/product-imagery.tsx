import { ProductImage } from "../hooks/use-product-info";

interface ProductImageryProps {
  images: ProductImage[];
}

export const ProductImagery = (props: ProductImageryProps) => {
  return (
    <div>
      <h2>Product Imagery</h2>
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
