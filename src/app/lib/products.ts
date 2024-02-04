import products from "@/data/products";
const getProduct = async (handle: string) => {
  return products.find((product) => product.handle === handle);
};

const getProducts = async () => {
  return products;
};

const getBestSellers = async () => {
  return products
    .filter((product) => product.bestSeller)
    .map(({ title, handle, featuredImage, price }) => ({
      title,
      handle,
      featuredImage,
      price,
    }));
};

export { getProduct, getBestSellers, getProducts };
