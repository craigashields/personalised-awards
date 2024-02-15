import React from "react";
import ProductGridItems from "./Layouts/product-grid-items";
import Grid from "./grid";
import { getBestSellers } from "@/app/lib/products";

const BestSellers = async () => {
  const bestSellers = await getBestSellers();

  return (
    <section className="container-none px-10 md:px-28 lg:px-32 xl:px-36 2xl:px-44 m-auto py-16 bg-emerald-500 ">
      <p className="text-center text-white pb-10 font-semibold font-poppins text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
        Best Sellers
      </p>

      {bestSellers.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={bestSellers} />
        </Grid>
      ) : null}
    </section>
  );
};

export default BestSellers;
