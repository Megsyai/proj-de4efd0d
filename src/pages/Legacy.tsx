
import { GridBackground } from "@/components/Backgrounds";
import { Star, Shield, BookOpen, Quote } from "lucide-react";

const Legacy = () => {
  return (
    <div className="min-h-screen relative z-0 bg-[#fafbfc] pb-32">
      <GridBackground />
      <div className="px-6 md:px-12 max-w-5xl mx-auto pt-24">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">الأثر الخالد والتاريخ الماسي</h1>
          <p className="text-[rgba(26,26,46,0.6)] text-lg max-w-2xl mx-auto">
            كيف شكلت أم كلثوم الوجدان العربي وساهمت في الحفاظ على اللغة ورفع المعنويات؟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="ds-card p-10 hover:border-[#7dd3c0] transition-colors border-2 border-transparent">
            <Shield className="text-[#7dd3c0] w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-3">الصوت الوطني الموحد</h3>
            <p className="text-sm text-[rgba(26,26,46,0.7)] leading-relaxed">
              لم تغنِّ للترفيه فقط، بل كانت صوتاً يعبر عن آلام وآمال الشعوب. جولاتها لدعم المجهود الحربي بعد عام 1967 (أجلت الغناء العاطفي لفترة وغنت "أصبح عندي الآن بندقية" و"والله زمان يا سلاحي") جمعت الأمة العربية وجعلتها رمزاً للصمود.
            </p>
          </div>

          <div className="ds-card p-10 hover:border-[#c9b6f5] transition-colors border-2 border-transparent">
            <BookOpen className="text-[#c9b6f5] w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-3">حارسة اللغة العربية</h3>
            <p className="text-sm text-[rgba(26,26,46,0.7)] leading-relaxed">
              بغنائها لقصائد فصحى لشعراء مثل أحمد شوقي وإبراهيم ناجي، جعلت المواطن البسيط في الشارع والقهوة يردد قصائد الفصحى بطلاقة. أعادت للغة العربية الفصحى بريقها وجاذبيتها الجماهيرية في عصر انتشار العامية.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">قالوا عن كوكب الشرق</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "أم كلثوم ليست مجرد مطربة، إنها ظاهرة توحد العرب أكثر مما يجمعهم السياسيون.", author: "شارل ديجول", role: "رئيس فرنسي سابق" },
            { quote: "عندما تغني أم كلثوم، يتوقف الزمن، وتستمع الأرض بخشوع.", author: "نجيب محفوظ", role: "روائي نوبلي" },
            { quote: "صوتها يحمل جينات الشرق بأكمله، لا يمكن استنساخه أو تقليده.", author: "ماريا كالاس", role: "مغنية أوبرا عالمية" }
          ].map((q, i) => (
            <div key={i} className="ds-card p-8 flex flex-col justify-between bg-white">
              <div>
                <Quote className="text-[rgba(26,26,46,0.1)] w-10 h-10 mb-4" />
                <p className="text-sm font-medium leading-loose mb-6 text-[#1a1a2e]">"{q.quote}"</p>
              </div>
              <div className="border-t border-[rgba(26,26,46,0.06)] pt-4">
                <span className="block font-bold text-[#5b5fc7]">{q.author}</span>
                <span className="text-xs text-[rgba(26,26,46,0.5)]">{q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legacy;
