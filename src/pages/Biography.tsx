
import { Play, Calendar, MapPin, Award } from "lucide-react";
import { GridBackground } from "@/components/Backgrounds";
import { img } from "@/lib/img";

const Biography = () => {
  const timeline = [
    { year: "1898", title: "الولادة والنشأة", desc: "ولدت في قرية طماي الزهايرة بمحافظة الدقهلية. حفظت القرآن الكريم في صغرها مما أثرى لغتها ومخارج حروفها.", icon: MapPin },
    { year: "1922", title: "الانتقال إلى القاهرة", desc: "انتقلت مع عائلتها إلى القاهرة حيث بدأت مرحلة احترافية جديدة وتعرفت على كبار الشعراء والملحنين.", icon: Calendar },
    { year: "1934", title: "انطلاقة الإذاعة", desc: "أول من غنت في الإذاعة المصرية عند افتتاحها، مما شكل نقلة نوعية في وصول صوتها للجماهير.", icon: RadioIcon },
    { year: "1964", title: "لقاء السحاب", desc: "تعاونت لأول مرة مع الموسيقار محمد عبد الوهاب في أغنية إنت عمري.", icon: Award },
    { year: "1975", title: "الرحيل", desc: "رحلت عن عالمنا في 3 فبراير، وشيعها أكثر من 4 ملايين شخص في جنازة تاريخية.", icon: Award },
  ];

  return (
    <div className="min-h-screen relative z-0 bg-[#fafbfc] pb-32">
      <GridBackground />
      
      <div className="px-6 md:px-12 max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">السيرة الذاتية</h1>
        <p className="text-[rgba(26,26,46,0.6)] text-lg border-r-4 border-[#5b5fc7] pr-4 mb-16 max-w-2xl leading-relaxed">
          تبدأ القصة من فتاة قروية تنشد التواشيح الدينية مرتدية عقالاً، لتنتهي كأعظم صوت نسائي عرفه التراث العربي.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Content Area */}
          <div className="space-y-8">
            <div className="ds-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#eefdf5] text-[#0f5c49] flex items-center justify-center">01</div>
                بذور الموهبة
              </h2>
              <p className="text-[rgba(26,26,46,0.7)] leading-loose text-sm">
                كان والدها الشيخ إبراهيم منشداً ومغنياً في القرى المجاورة. لاحظ موهبة ابنته مبكراً وبدأ يأخذها معه لإحياء الحفلات مبتدئة بإنشاد القصائد والتواشيح الدينية. قوة صوتها الفطرية وإحساسها العالي لفت انتباه كبار الموسيقيين في ذلك الوقت، منهم الشيخ أبو العلا محمد الذي كان أول من أدرك عظمة هذا الصوت ونصحه بالانتقال للقاهرة.
              </p>
            </div>

            <div className="ds-card p-8 bg-[#5b5fc7] text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">02</div>
                عصر الذهبي
              </h2>
              <p className="text-white/80 leading-loose text-sm">
                في الأربعينيات والخمسينيات، تربعت أم كلثوم على عرش الغناء بلا منازع. كونت ثنائيات أسطورية مع رياض السنباطي ومحمد القصبجي وزكريا أحمد. أصبحت حفلتها في الخميس الأول من كل شهر طقساً عربياً مقدساً، حيث تتوقف الحركة في الشوارع ويلتف الملايين حول أجهزة الراديو لسماعها.
              </p>
            </div>
            
            <div className="ds-card p-8 relative overflow-hidden">
               <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#c9b6f5]"></div>
               <h3 className="font-bold text-lg mb-2 text-[#1a1a2e]">التأثير والمجهود الحربي</h3>
               <p className="text-sm text-[rgba(26,26,46,0.6)] leading-relaxed">
                 لم تكن مجرد مطربة، بل كانت جزءاً من نسيج الدولة. عقب نكسة 1967، جابت دول العالم لإحياء حفلات لصالح المجهود الحربي، جامعًة الملايين من أجل بلدها، مؤكدة دور الفن في التعبئة الوطنية.
               </p>
            </div>
          </div>

          {/* Timeline Sidebar (Signature Layout) */}
          <div>
            <div className="ds-card p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-[rgba(26,26,46,0.06)]">التسلسل الزمني</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#5b5fc7] before:to-transparent">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#f3f4fa] border-4 border-white flex items-center justify-center z-10 shadow-sm">
                      <item.icon size={16} className="text-[#5b5fc7]" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-xs font-bold text-[#5b5fc7] bg-white px-2 py-0.5 rounded-full border border-[rgba(26,26,46,0.06)] shadow-sm">{item.year}</span>
                      <h4 className="font-bold text-[#1a1a2e] mt-2 mb-1">{item.title}</h4>
                      <p className="text-xs text-[rgba(26,26,46,0.6)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function RadioIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>;
}

export default Biography;
