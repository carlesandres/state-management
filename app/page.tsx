"use client"

import ProductImageryTile from "@/lib/product-imagery-tile";


export default function Page() {
  const productId = "123";

  return (
    <main className="max-w-lg mx-auto bg-green-50 flex flex-col items-center justify-center min-h-screen p-24">
      <h1>Product Details</h1>
      <ProductImageryTile productId={productId} />
    </main>
  );
}
