import { motion } from 'framer-motion';

export default function About() {
  const tags = ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'Node.js', 'MongoDB', 'Responsive Design'];
  
  return (
    <section id="about" className="py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] xl:max-w-[1300px] mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-8 md:mb-12 text-center md:text-left font-outfit font-bold">About Me</h2>
          <p className="mb-8 leading-[1.8] text-[#f8fafc] text-sm sm:text-base lg:text-lg text-center md:text-left">
            I am a passionate Full Stack Developer who loves building responsive and user-friendly web applications. I work with technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy solving problems, learning new skills, and turning ideas into real-world projects.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.span 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 inline-block cursor-default transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 p-12 rounded-[30px] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6] rounded-full filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <motion.div 
            whileHover={{ x: 10 }}
            className="mb-8 relative z-10"
          >
            <h3 className="text-[2rem] text-[#8b5cf6] font-outfit font-bold mb-2">2nd Year</h3>
            <p className="text-[#94a3b8]">Bachelor of Technology (COMPUTER ENGINEERING)</p>
          </motion.div>
          
          <motion.div
            whileHover={{ x: 10 }}
            className="relative z-10"
          >
            <h3 className="text-[2rem] text-[#8b5cf6] font-outfit font-bold mb-2">5+ Projects</h3>
            <p className="text-[#94a3b8]">Completed during academic career</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
