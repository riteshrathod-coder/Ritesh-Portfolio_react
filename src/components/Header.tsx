import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#020617]/80 glass border-b border-white/10 py-4 shadow-lg shadow-[#020617]/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <nav className="flex justify-between items-center h-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent font-outfit z-50 relative"
          >
            RITESH<span className="text-white">-CODER</span>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 list-none">
            {navLinks.map((item, i) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[#94a3b8] text-[0.95rem] font-semibold transition-all duration-300 hover:text-white relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8b5cf6] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden text-[#94a3b8] hover:text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#020617]/95 glass flex flex-col items-center justify-center -z-10 md:hidden"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
