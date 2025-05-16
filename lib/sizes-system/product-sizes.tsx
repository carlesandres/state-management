import { ProductInfo } from "../hooks/use-product-info";

interface ProductSizesProps {
  sizes: ProductInfo["sizes"];
}

export const ProductSizes = (props: ProductSizesProps) => {
  return (
    <div>
      <h2>Available Sizes</h2>
      <ul>
        {props.sizes.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
    </div>
  );
};
