import { ProductInfo } from "@/pages/api/product";

interface ProductSizesProps {
  sizes: ProductInfo["sizes"];
  selectedSize?: string;
  onSelect: (size: string) => void;
}

export const ProductSizes = (props: ProductSizesProps) => {
  const { sizes, selectedSize, onSelect } = props;

  const handleSizeSelected = (size: string) => {
    if (onSelect) {
      onSelect(size);
    }
  }

  return (
    <div>
      <h2>Available Sizes</h2>
      <ul className="flex gap-2">
        {sizes.map((size) => {
          let className = "";
          if (size === selectedSize) {
            className = "bg-blue-100 border-blue-500";
          }
          return (
            <li key={size}>
              <button 
                onClick={() => handleSizeSelected(size)} 
                className={`btn ${className}`}
              >
                {size}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
