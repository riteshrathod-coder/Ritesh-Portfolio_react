import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#8b5cf6] rounded-full filter blur-[100px] opacity-20 -z-10 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#94a3b8] font-medium"
        >
          &copy; 2026 Ritesh Rathod. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
