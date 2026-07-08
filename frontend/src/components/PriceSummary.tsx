import { biodanceProduct, formatFcfa, totalPrice } from "@/data/biodance-product";

export function PriceSummary() {
  return (
    <div className="grid gap-3 rounded-2xl border border-raspberry/10 bg-white/80 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="text-ink/65">Produit</span>
        <span className="font-bold text-ink">{formatFcfa(biodanceProduct.price)}</span>
      </div>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="text-ink/65">Livraison Bamako</span>
        <span className="font-bold text-ink">{formatFcfa(biodanceProduct.deliveryFee)}</span>
      </div>
      <div className="border-t border-raspberry/10 pt-3">
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-wine">Total estimé</span>
          <span className="text-2xl font-bold text-raspberry">{formatFcfa(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
}
