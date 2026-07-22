"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function WhatsappWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919899238237"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-300 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-full h-full scale-[2]" />
      </a>
    </div>
  );
}
