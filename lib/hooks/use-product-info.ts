export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductInfo = {
  id: string;
  name: string;
  description: string;
  price: number;
  colours: string[];
  sizes: string[];
  images: ProductImage[];
};

export const useProductInfo = (prodId: string): ProductInfo => {
  const productInfo:ProductInfo = {
    id: prodId,
    name: "Product Name",
    description: "This is a sample product description.",
    price: 29.99,
    colours: ["Red", "Green", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        src: "https://picsum.photos/200/300",
        alt: "Image 1",
      },
      {
        src: "https://picsum.photos/200/300",
        alt: "Image 2",
      },
    ],
  };

  return productInfo;
}
