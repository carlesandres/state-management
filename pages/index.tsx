import ColourInfoTile from "@/lib/colour-info-tile";
import ProductImageryTile from "@/lib/product-imagery-tile";
import { SizesTile } from "@/lib/sizes-tile";


export default function Page() {
  const productId = "123";

  return (
    <main className="max-w-7xl mx-auto min-h-screen p-24">
      <h1 className="text-2xl font-semibold">Product Details</h1>
      <div className="flex gap-4">

        <div className="w-2/3">
        <ProductImageryTile productId={productId} />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <SizesTile productId={productId} />
          <ColourInfoTile productId={productId} />
        </div>
      </div>
    </main>
  );
}
