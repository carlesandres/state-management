import { ProductInfo } from "@/pages/api/product";
import { useQuery } from "@tanstack/react-query";
import { fetchProductInfo } from "../utils/fetch-product-info";

export const useProductInfo = (prodId: string): ProductInfo | null => {
  const prodInfo = useQuery({
    queryKey: ['productInfo', prodId],
      queryFn: ({ queryKey }) => fetchProductInfo(queryKey[1])
  });

  return prodInfo.data || null;
}
