// import { AddToCart } from 'components/cart/add-to-cart';
import Price from "../Price";
import Prose from "../prose";
import { ProductContact } from "./product-contact";
import { ProductFeatures } from "./product-features";
// import { Product } from 'lib/shopify/types';
// import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: any }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 ">
        <h1 className="mt-4 mb-2 text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-medium">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-purple-500 p-2 text-sm text-white">
          <Price amount={product.price} currencyCode={`GBP`} />
        </div>
        {product.description ? (
          <Prose
            className="pb pt-6 text-sm leading-tight"
            html={product.description}
          />
        ) : null}
        {product.externalUrl ? (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 mt-4 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300"
          >
            Brochure
          </a>
        ) : null}
      </div>
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}
      <ProductFeatures features={product.features}></ProductFeatures>

      <ProductContact handle={product.handle} />
    </>
  );
}
