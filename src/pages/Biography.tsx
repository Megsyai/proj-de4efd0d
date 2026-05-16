
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { aiImage } from "@/lib/deapi";
import { SafeImage } from "@/components/SafeImage";

const P = { bg: '#0d0d0d', fg: '#f0d78c', primary: '#c9a84c', muted: 'rgba(240,215,140,0.55)', ring: 'rgba(201,168,76,0.2)' };

const TimelineItem = ({ year, title, desc, align, index }: { year: string, title: string, desc: string, align: 'left'|'right', index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row w-full mb-24 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="md:w-1/2 flex flex-col justify-center p-8 glass-card relative z-10 transition-transform hover:scale-[1.02]">
        <span className="font-heading text-6xl absolute -top-10 opacity-10" style={{ color: P.primary, [align === 'left' ? 'right' : 'left']: '20px' }}>
          {year}
        </span>
        <h3 className="font-heading text-3xl mb-4 text-[#c9a84c]">{title}</h3>
        <p className="text-muted-gold leading-[1.8] text-lg">{desc}</p>
      </div>
      
      {/* Connector line on desktop */}
      <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-0">
        <div className="w-[1px] h-full" style={{ background: P.ring }}></div>
        <div className="w-4 h-4 rounded-full absolute top-1/2 -translate-y-1/2 border-2" style={{ borderColor: P.primary, background: P.bg }}></div>
      </div>
      
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
};

// Live Background 2: Particles
const ParticlesBg = () => {
  const arr = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {arr.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#f0d78c]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.3
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [null, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default function Biography() {
  const [cover, setCover] = useState("");
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    aiImage("cinematic black and white photograph of an Egyptian peasant village in the 1920s, moody, dust, historical", {w:1600, h:600}).then(setCover);
  }, []);

  const timeline = [
    { year: "1898", title: "النشأة في طماي الزهايرة", desc: "ولدت فاطمة إبراهيم السيد البلتاجي في قرية طماي الزهايرة بمحافظة الدقهلية. كان والدها مؤذناً ومنشداً، وحفظت القرآن الكريم في صغرها، مما صقل نطقها السليم للغة العربية." },
    { year: "1922", title: "الانتقال إلى القاهرة", desc: "بتشجيع من مشاهير الموسيقى آنذاك مثل الشيخ أبو العلا محمد، انتقلت الأسرة إلى القاهرة. بدأت هناك بالغناء في مسرح البوسفور وحققت نجاحاً لافتاً في الأوساط الفنية." },
    { year: "1928", title: "المونولوج وأول الأسطوانات", desc: "غنت أول مونولوج 'إن كنت أسامح' من ألحان محمد القصبجي، والذي حقق مبيعات خيالية للأسطوانة، ليضعها في صدارة المشهد الغنائي المصري متفوقة على منيرة المهدية." },
    { year: "1934", title: "تأسيس الإذاعة المصرية", desc: "شاركت في افتتاح الإذاعة المصرية بصوتها، وأصبح لها راتب شهري ومكانة رسمية غير مسبوقة لأي فنان في ذلك الوقت، لتبدأ مرحلة 'كوكب الشرق'." },
    { year: "1964", title: "لقاء السحاب", desc: "شهد هذا العام أول تعاون بين أم كلثوم والموسيقار محمد عبد الوهاب في أغنية 'أنت عمري' بطلب شخصي من الرئيس جمال عبد الناصر، وهو التعاون الذي غير وجه الموسيقى العربية." },
    { year: "1975", title: "الرحيل الخالد", desc: "في الثالث من فبراير، توفيت أم كلثوم بعد معاناة مع المرض. شيعها أكثر من أربعة ملايين مصري في واحدة من أكبر الجنازات في تاريخ العالم، حزناً على غياب شمس الفن الأصيل." }
  ];

  return (
    <div style={{ background: P.bg, color: P.fg }} className="relative z-10 w-full overflow-hidden min-h-screen">
      <ParticlesBg />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1240px] mx-auto text-center z-10" style={{ background: P.bg, color: P.fg }}>
        <span className="font-mono text-xs tracking-widest text-[#c9a84c]">02 / السيرة الذاتية</span>
        <motion.h1 style={{ y: yParallax }} className="font-heading text-[clamp(40px,6vw,80px)] mt-4">رحلة المجد والخلود</motion.h1>
      </section>

      {/* Hero Cover Component */}
      <section className="relative w-full h-[50vh] overflow-hidden z-10" style={{ background: P.bg }}>
         <SafeImage src={cover} fallbackSeed="village-egypt" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>
      </section>

      {/* Timeline List */}
      <section className="relative z-10 py-32" style={{ background: P.bg, color: P.fg }}>
        <div className="max-w-[1000px] mx-auto px-6 relative">
          
          <div className="md:hidden absolute right-6 top-0 bottom-0 w-[1px]" style={{ background: P.ring }}></div>

          {timeline.map((item, i) => (
            <TimelineItem 
              key={i}
              index={i}
              year={item.year}
              title={item.title}
              desc={item.desc}
              align={i % 2 === 0 ? 'right' : 'left'}
            />
          ))}

        </div>
      </section>
    </div>
  );
}
