import products from "./db.js";
import { parsePrice } from "./lib.js";

// Finds the highest price from the list of products
export const HIGHEST_PRICE_OF_PRODUCTS = Math.max(
  ...products.map((product) => parsePrice(product.price))
);
