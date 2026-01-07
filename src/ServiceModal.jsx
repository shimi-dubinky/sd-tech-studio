import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const phone = "0503413689";
  const whatsappLink = `https://wa.me/972${phone.substring(1)}?text=${encodeURIComponent(`היי שמעון, קראתי על ${service.title} ואשמח לשמוע איך זה יכול להתאים לעסק שלי.`)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-y-auto max-h-[90vh]"
            dir="rtl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 left-6 text-gray-500 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">{service.title}</h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {service.fullDescription}
            </p>

            <div className="space-y-6 mb-12">
              <h4 className="text-white font-bold text-xl border-b border-white/5 pb-2">מפרט פתרונות טכנולוגיים:</h4>
              <div className="grid grid-cols-1 gap-4">
                {service.examples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all">
                    <CheckCircle2 size={20} className="text-indigo-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="text-white font-bold text-base mb-1">{item.name}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 py-5 text-lg"
              >
                <MessageCircle size={22} />
                אני צריך פתרון כזה - בוא נדבר
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;