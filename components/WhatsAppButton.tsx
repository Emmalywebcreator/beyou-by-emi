import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold shadow-[0_8px_30px_rgba(17,17,17,0.25)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon />
    </a>
  );
}
