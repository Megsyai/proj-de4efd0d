
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 40, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full blur-3xl mix-blend-multiply opacity-50"
      style={{ background: 'radial-gradient(circle, #e8e4dd 0%, transparent 60%)' }}
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -50, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] rounded-full blur-3xl mix-blend-multiply opacity-40"
      style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 60%)' }}
    />
  </div>
);

export const SpotlightBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, #e8e4dd, transparent 70%)`
        }}
      />
    </div>
  );
};

export const AnimatedGrid = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(13,13,13,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,13,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
        animation: 'pulse 10s infinite alternate ease-in-out'
      }}
    />
  </div>
);
