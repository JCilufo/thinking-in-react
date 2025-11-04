import { useState } from "react";

import { HIGHEST_PRICE_OF_PRODUCTS } from "../constants";

export default function useFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [maxPriceSlider, setMaxPriceSlider] = useState(
    HIGHEST_PRICE_OF_PRODUCTS
  );

  const clearFilters = () => {
    setSearchQuery("");
    setInStockOnly(false);
    setSortBy("category");
    setMaxPriceSlider(HIGHEST_PRICE_OF_PRODUCTS);
  };

  return {
    searchQuery,
    inStockOnly,
    sortBy,
    maxPriceSlider,
    setSearchQuery,
    setInStockOnly,
    setSortBy,
    setMaxPriceSlider,
    clearFilters,
  };
}
