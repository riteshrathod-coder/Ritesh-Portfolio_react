import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 md:mb-16 text-center"
        >
          <span className="text-[#8b5cf6] font-semibold uppercase tracking-[2px] mb-2 text-xs sm:text-sm lg:text-base">Expertise</span>
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-outfit font-bold glow-text mb-4 text-[#f8fafc]">Skills & Technologies</h2>
          <div className="w-[60px] h-1 bg-[#8b5cf6] rounded-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          
          {/* Frontend */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 text-center transition-all duration-500 hover:border-[#8b5cf6]/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <h3 className="text-2xl text-[#f8fafc] font-outfit font-semibold mb-10">Frontend</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">HTML</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">CSS</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">JavaScript</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2"></path><path d="m11 7-2 2 2 2"></path><path d="m11 11-2 2-2-2"></path><path d="m7 15 2-2 2 2"></path></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">React</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 text-center transition-all duration-500 hover:border-[#8b5cf6]/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <h3 className="text-2xl text-[#f8fafc] font-outfit font-semibold mb-10">Backend</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">C</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">Java</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="2" y1="15" x2="22" y2="15"></line></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">Node.js</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">Python</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 text-center transition-all duration-500 hover:border-[#8b5cf6]/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <h3 className="text-2xl text-[#f8fafc] font-outfit font-semibold mb-10">Tools & Others</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">Git</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-[100px] group">
                <div className="w-[70px] h-[70px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#94a3b8] transition-all duration-400 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <span className="text-[0.85rem] text-[#94a3b8] font-medium transition-all duration-400 group-hover:text-[#f8fafc]">VS Code</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
