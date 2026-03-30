import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/233550827113?text=Hello%20FreshPlate%20GH,%20I%20would%20like%20to%20place%20an%20order!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
        Order
      </span>
    </a>
  );
}
