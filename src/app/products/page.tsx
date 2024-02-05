import React from "react";
import ProductGridItems from "@/components/Layouts/product-grid-items";
import Grid from "@/components/grid";
import { getProducts } from "../lib/products";

export const metadata = {
  title: "Products",
  description: "View our range of customisable trophies and awards.",
};

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
