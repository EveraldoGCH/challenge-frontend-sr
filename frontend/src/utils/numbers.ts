import currency from "currency.js";

export const formatCurrency = (
    value: currency.Any,
    options?: currency.Options,
  ) => {
    return currency(value, {
      symbol: options?.symbol ?? "$",
      separator: options?.separator ?? ".",
      decimal: options?.decimal ?? ",",
      precision: options?.precision ?? 2,
    }).format();
  };