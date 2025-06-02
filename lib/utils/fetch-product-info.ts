import { ProductInfo } from "@/pages/api/product";

export async function fetchProductInfo(prodId: string): Promise<ProductInfo> {
  const resp = await fetch(`/api/product?prodId=${prodId}`);
  if (!resp.ok) {
    throw new Error(`Error fetching product info: ${resp.statusText}`);
  }
  return await resp.json();
}

