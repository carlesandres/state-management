import { ProductInfo } from "@/pages/api/product";

interface ProductSizesProps {
  sizes: ProductInfo["sizes"];
}

export const ProductSizes = (props: ProductSizesProps) => {
  return (
    <div>
      <h2>Available Sizes</h2>
      <ul className="flex gap-2">
        {props.sizes.map((size, index) => (
          <li key={size}>
            <button>
              {size}
            </button>
            </li>
        ))}
      </ul>
    </div>
  );
};
