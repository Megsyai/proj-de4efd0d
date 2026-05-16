
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { aiImage } from "@/lib/deapi";
import { SafeImage } from "@/components/SafeImage";
import { Maximize2 } from "lucide-react";

const P = { bg: '#0d0d0d', fg: '#f0d78c', primary: '#c9a84c', muted: 'rgba(240,215,140,0.55)', ring: 'rgba(201,168,76,0.2)' };

// Spotlight background
const SpotlightBg = () => {
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
        className="absolute inset-0 opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${P.primary}22, transparent 70%)`
        }}
      />
    </div>
  );
};

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate some contextual images
    Promise.all([
      aiImage("black and white 1950s photograph of Umm kalthum wearing her iconic dark glasses holding a scarf", {w: 800, h: 1000}),
      aiImage("vintage macro shot of an old Egyptian radio playing music in a dark room, gold accents", {w: 800, h: 600}),
      aiImage("elegant arabic calligraphy of the word 'Kawkab Al-Sharq' in gold on a black background", {w: 600, h: 600}),
      aiImage("packed theatre audience in cairo 1960s watching a concert, black and white, dramatic lighting", {w: 1200, h: 800}),
      aiImage("a silhouette of a female singer in a long dress on stage holding a handkerchief, bright gold spotlight behind her", {w: 800, h: 1200}),
    ]).then(setImages);
  }, []);

  const bentoClasses = [
    "col-span-12 md:col-span-4 row-span-2",
    "col-span-12 md:col-span-8 row-span-1",
    "col-span-12 md:col-span-4 row-span-1",
    "col-span-12 md:col-span-4 row-span-1",
    "col-span-12 md:col-span-8 row-span-2",
  ];

  const captions = [
    "النظارة السوداء والمنديل، رمزية لا تُنسى",
    "أثير الإذاعة يحمل صوتها لكل بيت عربي",
    "كوكب الشرق - هكذا لقبتها الجماهير",
    "الجماهير المحتشدة، حالة من الوجد",
    "الوقفة المسرحية المهيبة"
  ];

  return (
    <div className="relative z-10 w-full overflow-hidden min-h-screen pb-32" style={{ background: P.bg, color: P.fg }}>
      <SpotlightBg />

      <section className="relative pt-32 pb-16 px-6 max-w-[1240px] mx-auto text-center z-10" style={{ background: P.bg }}>
        <span className="font-mono text-xs tracking-widest text-[#c9a84c]">04 / الأرشيف المصور</span>
        <h1 className="font-heading text-[clamp(40px,5vw,72px)] mt-4 mb-6 text-[#f0d78c]">لحظات من ذهب</h1>
        <p className="text-muted-gold max-w-2xl mx-auto text-lg leading-[1.8]">
          صور نادرة ومحطات بصرية تلخص مسيرة الهرم الرابع، من مسارح القاهرة إلى عواصم العالم، حيث كانت الكاميرا شاهدة على العظمة.
        </p>
      </section>

      <section className="relative z-10 px-6 max-w-[1240px] mx-auto" style={{ background: P.bg }}>
        <div className="grid grid-cols-12 auto-rows-[300px] gap-4 md:gap-6">
          {bentoClasses.map((cls, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`${cls} glass-card overflow-hidden relative group cursor-pointer`}
            >
              {images[idx] ? (
                <>
                  <SafeImage 
                    src={images[idx]} 
                    fallbackSeed={`umm-kulthum-gallery-${idx}`} 
                    className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0add] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 transform">
                    <p className="font-heading text-lg md:text-xl text-[#f0d78c] drop-shadow-lg">{captions[idx]}</p>
                    <Maximize2 size={20} color={P.primary} />
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#111] animate-pulse"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
