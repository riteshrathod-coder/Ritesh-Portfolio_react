import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-[100px] relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6] rounded-full filter blur-[150px] opacity-10 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-[150px] opacity-10 -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="text-[#8b5cf6] font-semibold uppercase tracking-[2px] mb-2 text-sm">Get In Touch</span>
          <h2 className="text-[2.5rem] font-outfit font-bold mb-4 text-[#f8fafc]">Contact Me</h2>
          <div className="w-[60px] h-1 bg-[#8b5cf6] rounded-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-outfit font-bold mb-6 text-[#f8fafc]">Let's connect</h3>
            <p className="text-[#94a3b8] mb-10 max-w-[400px]">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-6">
              
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-5 transition-colors duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/5 cursor-pointer"
              >
                <div className="w-[50px] h-[50px] bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center text-[#8b5cf6] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <span className="block text-[0.85rem] text-[#94a3b8] mb-1">Email</span>
                  <p className="font-semibold text-[#f8fafc]">riteshrathod1677@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-5 transition-colors duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/5 cursor-pointer"
              >
                <div className="w-[50px] h-[50px] bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center text-[#8b5cf6] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <span className="block text-[0.85rem] text-[#94a3b8] mb-1">LinkedIn</span>
                  <p className="font-semibold text-[#f8fafc]">Connect with me</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-5 transition-colors duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/5 cursor-pointer"
              >
                <div className="w-[50px] h-[50px] bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center text-[#8b5cf6] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <div>
                  <span className="block text-[0.85rem] text-[#94a3b8] mb-1">GitHub</span>
                  <p className="font-semibold text-[#f8fafc]">View my repos</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-12 rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="text-[0.9rem] font-semibold text-[#94a3b8] ml-2">Your Name</label>
                  <input type="text" id="name" placeholder="your name" className="bg-white/5 border border-white/10 p-4 rounded-xl text-[#f8fafc] font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] w-full" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-[0.9rem] font-semibold text-[#94a3b8] ml-2">Your Email</label>
                  <input type="email" id="email" placeholder="abc@example.com" className="bg-white/5 border border-white/10 p-4 rounded-xl text-[#f8fafc] font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-[0.9rem] font-semibold text-[#94a3b8] ml-2">Your Message</label>
                <textarea id="message" rows={5} placeholder="Hello Ritesh, I would like to talk about..." className="bg-white/5 border border-white/10 p-4 rounded-xl text-[#f8fafc] font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] w-full resize-none"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full mt-4 flex items-center justify-center py-4 px-10 bg-[#8b5cf6] text-white rounded-xl font-bold text-[1.1rem] transition-all shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] hover:bg-[#7c3aed] hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.6)] border-none cursor-pointer"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
