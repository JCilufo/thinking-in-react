import { useState } from "react";

import { HIGHEST_PRICE_OF_PRODUCTS } from "../constants";

export default function useFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [maxPrice, setMaxPrice] = useState(HIGHEST_PRICE_OF_PRODUCTS);

  const clearFilters = () => {
    setSearchQuery("");
    setInStockOnly(false);
    setSortBy("category");
    setMaxPrice(HIGHEST_PRICE_OF_PRODUCTS);
  };

  return {
    searchQuery,
    inStockOnly,
    sortBy,
    maxPrice,
    setSearchQuery,
    setInStockOnly,
    setSortBy,
    setMaxPrice,
    clearFilters,
  };
}
