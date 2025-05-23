export function formatPrice(price) {
  if (isNaN(price)) return price;
  return Number(price).toLocaleString();
}