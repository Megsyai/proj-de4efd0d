
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Music, Mic2, Star, TrendingUp, Users, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "@/components/Backgrounds";
import { img, avatar } from "@/lib/img";

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const stats = [
    { label: "سنوات العطاء", value: "50+", icon: Star, color: "#c9b6f5", sparkline: [10, 20, 15, 30, 45, 50, 48, 55] },
    { label: "أغنية مسجلة", value: "300+", icon: Mic2, color: "#7dd3c0", sparkline: [5, 12, 25, 40, 80, 150, 220, 310] },
    { label: "حفلات مباشرة", value: "1,200", icon: Users, color: "#ffb0d2", sparkline: [20, 40, 60, 80, 100, 120, 110, 130] },
    { label: "مدة أطول كونسرت", value: "5 س", icon: Radio, color: "#ffd28c", sparkline: [1, 2, 3, 2, 4, 3, 5, 4] },
  ];

  return (
    <div className="min-h-[200vh] relative z-0 pb-32">
      <AuroraBackground />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(26,26,46,0.06)] mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#7dd3c0] animate-pulse"></span>
            <span className="text-xs font-semibold text-[rgba(26,26,46,0.6)]">لوحة التوثيق الرسمية</span>
          </div>
          <h1 className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] text-[#1a1a2e] mb-6 tracking-tight">
            صوت مصر الخالد، <br />
            <span className="text-[#5b5fc7] italic font-serif">كوكب الشرق</span> الساطع.
          </h1>
          <p className="text-lg md:text-xl text-[rgba(26,26,46,0.6)] leading-relaxed max-w-2xl mb-10">
            اكتشف سيرة فاطمة إبراهيم السيد البلتاجي، أيقونة الغناء العربي التي وحدت بصوتها ملايين القلوب من المحيط إلى الخليج عبر نصف قرن من الإبداع.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/discography" className="ds-primary-btn px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2">
              <Play size={18} fill="currentColor" />
              استمع للروائع
            </Link>
            <Link to="/chat" className="ds-secondary-btn py-3.5 px-6 rounded-xl font-semibold flex items-center gap-2 bg-white">
              <MessageSquareIcon size={18} />
              اسأل الذكاء الاصطناعي
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Widgets (Signature Design) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ds-card p-6 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}30`, color: stat.color > '#fff' ? '#1a1a2e' : stat.color.replace('30','90') }}
                >
                  <stat.icon size={24} style={{ color: '#1a1a2e' }} />
                </div>
                <TrendingUp size={16} className="text-[rgba(26,26,46,0.3)]" />
              </div>
              <h3 className="text-[rgba(26,26,46,0.5)] text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-[#1a1a2e]">{stat.value}</p>
              
              {/* Sparkline decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-20 pointer-events-none flex items-end">
                {stat.sparkline.map((val, idx) => (
                  <div 
                    key={idx} 
                    className="flex-1 bg-[#1a1a2e] rounded-t-sm mx-[1px]" 
                    style={{ height: `${(val / Math.max(...stat.sparkline)) * 100}%`, backgroundColor: stat.color }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Grid: Featured Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 relative z-10">
        <h2 className="text-2xl font-bold mb-8">محطات مضيئة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1 */}
          <div className="ds-card md:col-span-2 p-8 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent z-10 opacity-80" />
            <img src={img("vintage concert", 800, 600)} alt="Concert" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="relative z-20 text-white">
              <span className="px-3 py-1 text-xs font-semibold bg-[#7dd3c0] text-[#1a1a2e] rounded-full inline-block mb-3">حفلات باريس</span>
              <h3 className="text-2xl font-bold mb-2">أولمبيا باريس 1967</h3>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">تعتبر حفلتها في مسرح الأولمبيا في باريس من أهم المحطات العالمية، حيث غنت وتبرعت بإيراداتها للمجهود الحربي.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="ds-card p-8 bg-[#f3f4fa] flex flex-col justify-between group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Music className="text-[#5b5fc7]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">لقاء السحاب</h3>
              <p className="text-sm text-[rgba(26,26,46,0.6)] mb-4 leading-relaxed">أخيراً، اجتمعت أم كلثوم مع الموسيقار محمد عبد الوهاب في تحفة "إنت عمري" بعد سنوات من التنافس.</p>
              <Link to="/discography" className="text-xs font-bold text-[#5b5fc7] flex items-center gap-1 group-hover:gap-2 transition-all">
                استكشف الأغنية &larr;
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ds-card p-8 flex flex-col items-center justify-center text-center bg-[#c9b6f5]/10 border-[#c9b6f5]/30">
            <div className="flex -space-x-4 mb-4 rtl:space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={avatar(`poet-${i}`)} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Poet" />
              ))}
            </div>
            <h3 className="font-bold text-lg mb-1">شعراء العصر الماسي</h3>
            <p className="text-xs text-[rgba(26,26,46,0.6)] max-w-[200px]">أحمد رامي، أحمد شوقي، بيرم التونسي، ومرسي جميل عزيز.</p>
          </div>

          {/* Card 4 */}
          <div className="ds-card md:col-span-2 p-8 flex items-center gap-8 bg-white">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#7dd3c0]/40 to-[#5b5fc7]/40 flex-shrink-0 flex items-center justify-center relative overflow-hidden">
               <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center pl-1">
                 <Play className="text-[#1a1a2e]" />
               </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-red-500">مختارات اليوم</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">الأطلال</h3>
              <p className="text-sm text-[rgba(26,26,46,0.6)] mb-4">قصيدة إبراهيم ناجي، ألحان رياض السنباطي. من أروع ما غنت في تاريخ الموسيقى العربية.</p>
              <div className="w-full h-1 bg-[rgba(26,26,46,0.06)] rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#5b5fc7] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper icon component since it wasn't imported directly above
function MessageSquareIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
}

export default Home;
