import Grid from "../grid";
import { GridTileImage } from "../grid/tile";
import Link from "next/link";

interface Products {
  title: string;
  handle: string;
  price: string;
  featuredImage: string;
}

export default function ProductGridItems({
  products,
}: {
  products: Products[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.price,
                currencyCode: "GBP",
              }}
              src={product?.featuredImage}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
