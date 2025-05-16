import { ProductImage } from "../hooks/use-product-info";

interface ProductImageryProps {
  images: ProductImage[];
}

export const ProductImagery = (props: ProductImageryProps) => {
  return (
    <div>
      <h2>Product Imagery</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: "100px", height: "100px" }}
          />
        ))}
      </div>
    </div>
  );
};
