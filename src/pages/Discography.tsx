
import { Play, Clock, Music, Headphones } from "lucide-react";
import { GridBackground } from "@/components/Backgrounds";

const Discography = () => {
  const songs = [
    { title: "إنت عمري", year: 1964, composer: "محمد عبد الوهاب", poet: "أحمد شفيق كامل", duration: "58:00", genre: "طرب", status: "success" },
    { title: "الأطلال", year: 1966, composer: "رياض السنباطي", poet: "إبراهيم ناجي", duration: "45:30", genre: "قصيدة", status: "info" },
    { title: "سيرة الحب", year: 1964, composer: "بليغ حمدي", poet: "مرسي جميل عزيز", duration: "42:15", genre: "طرب", status: "success" },
    { title: "ألف ليلة وليلة", year: 1969, composer: "بليغ حمدي", poet: "مرسي جميل عزيز", duration: "46:40", genre: "طرب", status: "success" },
    { title: "سلوا قلبي", year: 1946, composer: "رياض السنباطي", poet: "أحمد شوقي", duration: "38:20", genre: "ديني", status: "warn" },
    { title: "لسه فاكر", year: 1960, composer: "رياض السنباطي", poet: "عبد الفتاح مصطفى", duration: "35:10", genre: "طرب", status: "success" },
    { title: "غداً ألقاك", year: 1971, composer: "محمد عبد الوهاب", poet: "الهادي آدم", duration: "50:00", genre: "قصيدة", status: "info" },
    { title: "القلب يعشق كل جميل", year: 1971, composer: "رياض السنباطي", poet: "بيرم التونسي", duration: "40:05", genre: "ديني", status: "warn" },
  ];

  // Map status to DS pastel badging exactly as prescribed
  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'success': return 'bg-[#eefdf5] text-[#0f5c49] border-[#7dd3c0]'; // Actually matches Accent somewhat
      case 'info': return 'bg-[#f0f4ff] text-[#2d3a8c] border-[#5b5fc7]';
      case 'warn': return 'bg-[#fff8eb] text-[#8c5a1a] border-[#ffd28c]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen relative z-0 bg-[#fafbfc] pb-32">
      <GridBackground />
      
      <div className="px-6 md:px-12 max-w-6xl mx-auto pt-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">الأعمال الخالدة</h1>
            <p className="text-[rgba(26,26,46,0.6)]">تصفح سجل حافل من القصائد الطويلة، الأغاني العاطفية، والتواشيح.</p>
          </div>
          <div className="hidden md:flex gap-2">
             <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white border border-[rgba(26,26,46,0.06)] shadow-sm">الكل</button>
             <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-[rgba(26,26,46,0.03)] text-[rgba(26,26,46,0.6)] hover:bg-[rgba(26,26,46,0.06)]">قصائد</button>
             <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-[rgba(26,26,46,0.03)] text-[rgba(26,26,46,0.6)] hover:bg-[rgba(26,26,46,0.06)]">وطني</button>
          </div>
        </div>

        <div className="ds-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-[#fbfcff] border-b border-[rgba(26,26,46,0.06)] text-[rgba(26,26,46,0.5)] font-medium">
                <tr>
                  <th className="px-6 py-4">الأغنية / القصيدة</th>
                  <th className="px-6 py-4">النوع</th>
                  <th className="px-6 py-4 hidden md:table-cell">الشاعر</th>
                  <th className="px-6 py-4 hidden sm:table-cell">الملحن</th>
                  <th className="px-6 py-4 hidden lg:table-cell">المدة</th>
                  <th className="px-6 py-4">العام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(26,26,46,0.04)]">
                {songs.map((song, idx) => (
                  <tr key={idx} className="hover:bg-[rgba(26,26,46,0.01)] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full bg-[rgba(26,26,46,0.04)] flex items-center justify-center group-hover:bg-[#5b5fc7] group-hover:text-white transition-colors">
                          <Play size={14} className="ml-0.5" />
                        </button>
                        <span className="font-bold text-[#1a1a2e] block">{song.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getBadgeClass(song.status)}`}>
                         {song.genre}
                       </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-[rgba(26,26,46,0.7)]">{song.poet}</td>
                    <td className="px-6 py-4 hidden sm:table-cell text-[rgba(26,26,46,0.7)]">{song.composer}</td>
                    <td className="px-6 py-4 hidden lg:table-cell text-[rgba(26,26,46,0.5)] flex items-center gap-1.5">
                      <Clock size={12} /> {song.duration}
                    </td>
                    <td className="px-6 py-4 text-[#1a1a2e] font-serif">{song.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audio Player Mockup (Sticky Bottom Concept via fixed div if implemented globally, here just mock) */}
        <div className="mt-12 ds-card p-6 bg-gradient-to-r from-white to-[#fbfcff] flex flex-col md:flex-row items-center gap-6 justify-between">
           <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="w-16 h-16 rounded-xl bg-[#5b5fc7] shadow-lg flex items-center justify-center text-white shrink-0">
               <Music size={24} />
             </div>
             <div>
               <h4 className="font-bold text-lg text-[#1a1a2e] line-clamp-1">إنت عمري</h4>
               <p className="text-xs text-[rgba(26,26,46,0.5)]">ألحان: محمد عبد الوهاب</p>
             </div>
           </div>

           <div className="flex-1 w-full max-w-md mx-auto hidden md:flex items-center gap-3">
             <span className="text-xs text-[rgba(26,26,46,0.5)]">02:14</span>
             <div className="flex-1 h-1.5 bg-[rgba(26,26,46,0.06)] rounded-full overflow-hidden cursor-pointer">
               <div className="h-full w-1/4 bg-[#5b5fc7] rounded-full relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#5b5fc7] rounded-full shadow-sm"></div>
               </div>
             </div>
             <span className="text-xs text-[rgba(26,26,46,0.5)]">58:00</span>
           </div>

           <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full border border-[rgba(26,26,46,0.06)] flex items-center justify-center hover:bg-[#1a1a2e] hover:text-white transition-colors">
               <Headphones size={18} />
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Discography;
