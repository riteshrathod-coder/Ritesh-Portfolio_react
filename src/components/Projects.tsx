import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] xl:max-w-[1300px] mx-auto px-4 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-outfit font-bold mb-8 md:mb-12 text-center text-[#f8fafc]">Flagship Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-400 relative overflow-hidden group hover:border-[#8b5cf6] hover:bg-white/10"
          >
            <div className="w-full aspect-[16/9] rounded-2xl mb-6 overflow-hidden">
              <img 
                src="/assets/music_player_thumb.png" 
                alt="Stellar Audio Player" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-3 text-[#f8fafc] group-hover:text-[#a78bfa] transition-colors">Stellar Audio Player</h3>
              <p className="text-[#94a3b8] text-[0.95rem] mb-6">
                A premium music player with glassmorphism, real-time sound visualizer, and PWA support. Built with Vanilla JavaScript.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects/music-player/index.html" 
                className="inline-block py-3 px-6 bg-[#8b5cf6] text-white rounded-xl font-bold text-[0.95rem] shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] hover:bg-[#7c3aed] hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.6)]"
              >
                Launch App
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-400 relative overflow-hidden opacity-60 group hover:opacity-100"
          >
            <div className="w-full aspect-[16/9] rounded-2xl mb-6 overflow-hidden bg-[#1e293b] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#334155]">
              <motion.svg 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
                width="60" height="60" fill="#94a3b8" viewBox="0 0 24 24"
              >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 013.33-3.56A15.65 15.65 0 007.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </motion.svg>
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-3 text-[#f8fafc]">More Coming Soon</h3>
              <p className="text-[#94a3b8] text-[0.95rem] mb-6">
                Exciting new web applications are currently in development. Stay tuned for updates!
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
