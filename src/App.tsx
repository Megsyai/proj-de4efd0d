
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { ArrowUpLeft, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Discography from "./pages/Discography";
import Gallery from "./pages/Gallery";
import Legacy from "./pages/Legacy";
import ChatDashboard from "./pages/ChatDashboard";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "الرئيسية" },
    { path: "/biography", label: "السيرة الذاتية" },
    { path: "/discography", label: "الأعمال الخالدة" },
    { path: "/gallery", label: "معرض الصور" },
    { path: "/legacy", label: "الأثر التاريخي" },
    { path: "/chat", label: "المحادثة الذكية" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="flex items-center justify-between px-6 py-3 w-full max-w-[1000px] rounded-full shadow-sm" style={{ background: '#ffffff', border: '1px solid rgba(13,13,13,0.08)' }}>
        <Link to="/" className="font-serif text-xl font-bold text-[#0d0d0d]">أ. كلثوم</Link>
        
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <Link 
              key={l.path} 
              to={l.path}
              className={`text-[15px] font-medium transition-colors ${location.pathname === l.path ? 'text-[#c9a84c]' : 'text-[rgba(13,13,13,0.56)] hover:text-[#0d0d0d]'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link to="/discography" className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-transform hover:scale-105" style={{ background: '#0d0d0d', color: '#ffffff' }}>
          استمع الآن <ArrowUpLeft size={16} />
        </Link>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#0d0d0d" /> : <Menu color="#0d0d0d" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 p-6 rounded-2xl md:hidden flex flex-col gap-4 shadow-lg" style={{ background: '#ffffff', border: '1px solid rgba(13,13,13,0.08)' }}>
          {links.map(l => (
            <Link key={l.path} to={l.path} onClick={() => setIsOpen(false)} className={`text-lg ${location.pathname === l.path ? 'text-[#c9a84c]' : 'text-[#0d0d0d]'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="relative z-10 pt-32 pb-12 overflow-hidden" style={{ background: '#f5f3ee', color: '#0d0d0d' }}>
    <div className="max-w-[1240px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2">
           <h3 className="font-serif text-3xl font-bold mb-4">كوكب الشرق</h3>
           <p className="text-[16px] leading-[1.65]" style={{ color: 'rgba(13,13,13,0.56)' }}>
             مشروع توثيقي رقمي يهدف إلى حفظ التراث الفني والثقافي لسيدة الغناء العربي بطابع تحريري يحاكي الصحافة الكلاسيكية والمراجع الموثوقة.
           </p>
        </div>
        <div>
           <h4 className="font-bold text-sm tracking-widest uppercase mb-6">الأقسام</h4>
           <ul className="space-y-3" style={{ color: 'rgba(13,13,13,0.56)' }}>
             <li><Link to="/biography" className="hover:text-[#0d0d0d]">التاريخ والنشأة</Link></li>
             <li><Link to="/discography" className="hover:text-[#0d0d0d]">المكتبة الصوتية</Link></li>
             <li><Link to="/gallery" className="hover:text-[#0d0d0d]">أرشيف الصور</Link></li>
           </ul>
        </div>
        <div>
           <h4 className="font-bold text-sm tracking-widest uppercase mb-6">تفاعلي</h4>
           <ul className="space-y-3" style={{ color: 'rgba(13,13,13,0.56)' }}>
             <li><Link to="/chat" className="hover:text-[#0d0d0d]">محاور الذكاء الاصطناعي</Link></li>
             <li><Link to="/legacy" className="hover:text-[#0d0d0d]">المقالات والدراسات</Link></li>
           </ul>
        </div>
      </div>
      
      {/* Oversized Wordmark Signature Move */}
      <div className="w-full text-center border-t py-12" style={{ borderColor: 'rgba(13,13,13,0.08)' }}>
        <h1 className="font-serif tracking-tighter" style={{ fontSize: 'clamp(60px, 15vw, 200px)', lineHeight: '0.8', color: 'rgba(13,13,13,0.05)' }}>
          أم كلثوم
        </h1>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen flex flex-col" style={{ background: '#f5f3ee', color: '#0d0d0d' }}>
        <Navigation />
        <main className="flex-1 relative z-10 select-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/chat" element={<ChatDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
