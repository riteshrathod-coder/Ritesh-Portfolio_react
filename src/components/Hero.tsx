import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-[100px] md:pt-[120px] pb-16 px-4 sm:px-8 relative overflow-hidden bg-radial-glow">
      <div className="w-full max-w-[1100px] xl:max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-8 relative z-10 text-center md:text-left">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col z-10 md:text-right md:items-end order-2 md:order-1"
        >
          <span className="text-[#8b5cf6] font-semibold uppercase tracking-[2px] mb-2 text-xs sm:text-sm lg:text-base">Hello, I'm</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-[#f8fafc] font-extrabold">Ritesh<br/>Rathod</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center w-full"
        >
          <div className="relative w-[clamp(280px,40vw,450px)] aspect-[0.8/1] flex items-end justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] hero-glow -z-10"></div>
            <motion.img 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/assets/profile.png" 
              alt="Ritesh Rathod" 
              className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col z-10 items-center md:items-start order-3"
        >
          <span className="text-[#8b5cf6] font-semibold uppercase tracking-[2px] mb-2 text-xs sm:text-sm lg:text-base">Creative</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] text-[#f8fafc] font-extrabold">Full Stack<br/>Developer</h1>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <a 
              href="#projects" 
              className="inline-block py-[0.8rem] px-8 bg-[#8b5cf6] text-white rounded-xl font-bold text-base transition-all shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] hover:bg-[#7c3aed] hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.6)]"
            >
              My Work
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
