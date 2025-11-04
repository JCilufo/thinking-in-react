/**
 * @param {string} searchQuery
 * @param {boolean} inStockOnly
 * @param {number} maxPriceSlider
 * @param {number} highestPriceOfProducts
 * @returns {string}
 */
export const generateEmptyProductMessage = ({
  searchQuery,
  inStockOnly,
  maxPriceSlider,
  highestPriceOfProducts,
}) => {
  const conditions = [
    searchQuery && `matching "${searchQuery}"`,
    inStockOnly && "in stock",
    maxPriceSlider < highestPriceOfProducts && `under $${maxPriceSlider}`,
  ].filter(Boolean);

  if (!conditions.length) return "No products found";
  if (conditions.length === 1) return `No products ${conditions[0]}`;

  return `No products ${conditions.slice(0, -1).join(", ")} and ${
    conditions[conditions.length - 1]
  }`;
};

export const parsePrice = (priceString) => Number(priceString.replace("$", ""));
