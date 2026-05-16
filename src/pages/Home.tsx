
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpLeft, Play, Quote, Award, Music as MusicIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { aiImage } from "@/lib/deapi";
import { SafeImage } from "@/components/SafeImage";

const P = { bg: '#0d0d0d', fg: '#f0d78c', primary: '#c9a84c', muted: 'rgba(240,215,140,0.55)', ring: 'rgba(201,168,76,0.2)' };

// Live Background 1: Aurora (Mandatory for Hero)
const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl mix-blend-screen opacity-40"
      style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
    />
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        x: [0, -60, 0],
        y: [0, 60, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl mix-blend-screen opacity-30"
      style={{ background: 'radial-gradient(circle, #1a1a1a 0%, transparent 70%)' }}
    />
  </div>
);

// Number Counter for Stats
const AnimatedCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-8 glass-card text-center"
    >
      <span className="font-heading text-5xl md:text-6xl mb-2" style={{ color: P.primary }}>
        {value}{suffix}
      </span>
      <span className="text-sm tracking-widest uppercase text-muted-gold">{label}</span>
    </motion.div>
  );
};

export default function Home() {
  const [heroImg, setHeroImg] = useState<string>("");
  const [quoteImg, setQuoteImg] = useState<string>("");

  useEffect(() => {
    aiImage("cinematic majestic black and white portrait of Umm Kulthum singing on stage, 1960s, gold spotlight, elegant, high contrast, Noir aesthetic", {w:1200,h:800}).then(setHeroImg);
    aiImage("vintage gold accented microphone on a dark stage, shadow of a singer, noir", {w:600,h:800}).then(setQuoteImg);
  }, []);

  const features = [
    { num: "I", title: "صوت الخلود", desc: "امتدت مسيرتها الاستثنائية لأكثر من 50 عاماً، قدمت خلالها مئات الأعمال التي لا تزال تُسمع حتى اليوم.", icon: <MusicIcon size={24} color={P.primary}/> },
    { num: "II", title: "حفلات الخميس", desc: "كانت حفلاتها الشهرية بمثابة طقس قومي يجمع ملايين العرب من المحيط إلى الخليج خلف المذياع.", icon: <Clock size={24} color={P.primary}/> },
    { num: "III", title: "أوسمة ونياشين", desc: "نالت أرفع الأوسمة من ملوك ورؤساء الدول العربية تقديراً لدورها الفني والوطني البارز.", icon: <Award size={24} color={P.primary}/> }
  ];

  return (
    <div style={{ background: P.bg, color: P.fg }} className="relative z-10 w-full overflow-hidden">
      <AuroraBackground />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32" style={{ background: P.bg, color: P.fg }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px]" style={{ background: P.primary }}></span>
              <span className="tracking-[0.2em] text-sm font-semibold uppercase" style={{ color: P.primary }}>كوكب الشرق</span>
            </div>
            
            <h1 className="font-heading text-[clamp(48px,8vw,112px)] leading-[1] tracking-[-0.02em]">
              أُم <br/> <i className="font-light italic text-muted-gold">كُلثُوم</i>
            </h1>
            
            <p className="text-[16px] md:text-[18px] leading-[1.8] max-w-lg text-muted-gold mt-4">
              الأسطورة الخالدة التي وحدت العرب بصوتها. حنجرة ذهبية صاغت وجدان أمة كاملة عبر عقود من العطاء الفني المتفرد، لتظل حتى يومنا هذا الهرم الرابع لمصر.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/discography" className="group flex items-center gap-3 px-8 py-4 btn-primary transition-all hover:scale-[1.02]">
                استمع لروائعها
                <ArrowUpLeft size={18} className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/biography" className="flex items-center gap-3 px-8 py-4 btn-secondary hover:bg-[rgba(201,168,76,0.1)] transition-colors">
                اكتشف سِيرتها
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Parallax */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative lg:h-[700px] h-[500px] w-full rounded-sm overflow-hidden border p-2 glass-card"
          >
            <div className="w-full h-full relative overflow-hidden bg-[#111]">
              <SafeImage 
                src={heroImg} 
                fallbackSeed="umm-kulthum-stage-vintage" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                alt="Umm Kulthum on stage"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating widget */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-10 glass-card p-4 flex items-center gap-4 hidden md:flex"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" style={{ background: P.primary }}>
                <Play fill="#0d0d0d" color="#0d0d0d" size={20} className="ml-1" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: P.fg }}>أنت عمري</p>
                <p className="text-xs text-muted-gold">ألحان محمد عبد الوهاب</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 py-24 border-y" style={{ background: P.bg, color: P.fg, borderColor: P.ring }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter value={300} suffix="+" label="أغنية مسجلة" />
            <AnimatedCounter value={50} suffix=" عاماً" label="من العطاء الفني" />
            <AnimatedCounter value={100} suffix="+" label="حفلة تاريخية" />
          </div>
        </div>
      </section>

      {/* VALUE PROPS / FEATURES */}
      <section className="relative z-10 py-32" style={{ background: P.bg, color: P.fg }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="mb-20">
            <span className="font-mono text-xs tracking-widest text-muted-gold">01 / التميز</span>
            <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] mt-4 max-w-2xl">لماذا سُميت بـ <span style={{ color: P.primary }}>الهرم الرابع</span>؟</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 flex flex-col group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-sm" style={{ background: 'rgba(201,168,76,0.1)' }}>
                    {feat.icon}
                  </div>
                  <span className="font-heading text-4xl text-muted-gold opacity-30 group-hover:opacity-100 transition-opacity">{feat.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
                <p className="text-muted-gold leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION (ASYMMETRICAL BENTO) */}
      <section className="relative z-10 py-32 border-t" style={{ background: P.bg, color: P.fg, borderColor: P.ring }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-12 md:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            <Quote size={120} className="absolute -top-10 -right-10 opacity-5" color={P.primary} />
            <h3 className="font-heading text-3xl md:text-5xl leading-[1.4] mb-8 relative z-10">
              "إن الفن ليس مجرد أغنية نغنيها، بل هو رسالة نؤديها... وهو في النهاية التعبير الأصدق عن روح الشعب الأصيلة."
            </h3>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[2px]" style={{ background: P.primary }}></span>
              <span className="font-bold tracking-wider">أم كلثوم</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 h-[400px] lg:h-auto rounded-sm overflow-hidden border relative"
            style={{ borderColor: P.ring }}
          >
            <SafeImage src={quoteImg} fallbackSeed="vintage-mic-singer" className="w-full h-full object-cover mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700" alt="Vintage mic" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-80" />
            <div className="absolute bottom-6 right-6">
              <p className="font-heading text-xl" style={{ color: P.primary }}>أيقونة عصرها</p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
