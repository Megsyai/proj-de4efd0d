
import { motion } from "framer-motion";

export const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#fafbfc]" />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full blur-3xl mix-blend-multiply opacity-50"
      style={{ background: 'radial-gradient(circle, #c9b6f5 0%, transparent 60%)' }}
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -40, 0],
        y: [0, 40, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl mix-blend-multiply opacity-40"
      style={{ background: 'radial-gradient(circle, #7dd3c0 0%, transparent 60%)' }}
    />
  </div>
);

export const GridBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#fafbfc]" />
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%231a1a2e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }}
    />
  </div>
);
