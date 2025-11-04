import { useState } from "react";

import { MAX_PRODUCT_PRICE } from "../constants";

export default function useFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [maxPrice, setMaxPrice] = useState(MAX_PRODUCT_PRICE);

  const clearFilters = () => {
    setSearchQuery("");
    setInStockOnly(false);
    setSortBy("category");
    setMaxPrice(MAX_PRODUCT_PRICE);
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
