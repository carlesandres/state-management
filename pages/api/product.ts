import { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prodId } = req.query;

  if (!prodId || typeof prodId !== 'string') {
    return res.status(400).json({ error: 'Product ID is required' });
  }

  const productInfo: ProductInfo = {
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

  return res.status(200).json(productInfo);
}
