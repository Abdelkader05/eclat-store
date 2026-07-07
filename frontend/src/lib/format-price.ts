export function formatPrice(amount: number) {
  return new Intl.NumberFormat("fr-ML", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0
  }).format(amount);
}
