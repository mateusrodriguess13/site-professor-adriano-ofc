import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  // Placeholder number for now, the user will provide the real one later
  const phoneNumber = "5511999999999"; 
  const message = encodeURIComponent("Olá, gostaria de saber mais sobre a mentoria.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebe57] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm py-2 px-4 rounded-xl font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
        Fale comigo!
      </span>
      
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
    </motion.a>
  );
};
