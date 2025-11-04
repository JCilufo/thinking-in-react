import products from "./db.js";
import { parsePrice } from "./lib.js";

export const HIGHEST_PRICE_OF_PRODUCTS = Math.max(
  ...products.map((product) => parsePrice(product.price))
);
