import { MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { formatFcfa, biodanceProduct, whatsappUrl } from "@/data/biodance-product";

export function SiteFooter() {
  return (
    <footer className="border-t border-raspberry/10 bg-white/70 px-5 py-8 lg:px-14">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="font-heading text-xl font-semibold text-wine">ÉCLAT STORE</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-ink/65">
            Boutique beauté au Mali, pensée pour une commande simple, transparente et confirmée directement sur WhatsApp.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-ink/70">
          <p className="flex items-center gap-2 font-semibold text-wine">
            <Truck className="h-4 w-4 text-raspberry" />
            Livraison
          </p>
          <p>Partout à Bamako : {formatFcfa(biodanceProduct.deliveryFee)}</p>
          <p>Confirmation de l'adresse et du créneau sur WhatsApp.</p>
        </div>

        <div className="grid gap-3 text-sm text-ink/70">
          <p className="flex items-center gap-2 font-semibold text-wine">
            <ShieldCheck className="h-4 w-4 text-raspberry" />
            Confiance
          </p>
          <p>Pas de paiement en ligne pour le moment.</p>
          <p>Vos informations servent uniquement à confirmer la commande et la livraison.</p>
          <a className="inline-flex items-center gap-2 font-semibold text-raspberry" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Contacter Éclat Store
          </a>
        </div>
      </div>
    </footer>
  );
}
