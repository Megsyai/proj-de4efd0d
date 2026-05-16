
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Music, BookOpen, Image as ImageIcon, Star, Mic2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Discography from "./pages/Discography";
import Gallery from "./pages/Gallery";
import Legacy from "./pages/Legacy";
import NotFound from "./pages/NotFound";

const globalBg = "#0d0d0d";
const globalFg = "#f0d78c";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "الرئيسية", icon: <Music size={16} /> },
    { path: "/biography", label: "السيرة الذاتية", icon: <BookOpen size={16} /> },
    { path: "/discography", label: "الأعمال الخالدة", icon: <Mic2 size={16} /> },
    { path: "/gallery", label: "معرض الصور", icon: <ImageIcon size={16} /> },
    { path: "/legacy", label: "الأثر والتاريخ", icon: <Star size={16} /> },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-card mx-4 mt-4 lg:mx-auto lg:max-w-5xl"
      style={{ background: 'rgba(13,13,13,0.85)' }}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl tracking-wider font-bold" style={{ color: '#c9a84c' }}>
          أُم كُلثُوم
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm flex items-center gap-2 transition-colors hover:text-[#c9a84c] ${
                location.pathname === link.path ? "active-nav-link text-[#c9a84c] pb-1" : "text-[#f0d78c]"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <button 
          className="lg:hidden p-2 text-[#f0d78c]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ borderColor: 'rgba(201,168,76,0.2)' }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base flex items-center gap-3 ${
                    location.pathname === link.path ? "text-[#c9a84c]" : "text-[#f0d78c]"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 pt-24 pb-12 border-t" style={{ background: globalBg, color: globalFg, borderColor: 'rgba(201,168,76,0.2)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <h2 className="font-heading text-4xl mb-6" style={{ color: '#c9a84c' }}>أُم كُلثُوم</h2>
          <p className="text-muted-gold leading-[1.8] max-w-sm">
            صوت مصر والعرب، الهرم الرابع، وكوكب الشرق. إرث فني وثقافي لا يزال يصدح في وجدان الملايين، مخلداً تاريخاً من المجد الغنائي الأصيل.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-6 tracking-widest text-sm uppercase">أقسام الموقع</h3>
          <ul className="flex flex-col gap-4 text-muted-gold">
            <li><Link to="/biography" className="hover:text-[#c9a84c] transition-colors">السيرة الذاتية</Link></li>
            <li><Link to="/discography" className="hover:text-[#c9a84c] transition-colors">الروائع</Link></li>
            <li><Link to="/gallery" className="hover:text-[#c9a84c] transition-colors">الأرشيف المصور</Link></li>
            <li><Link to="/legacy" className="hover:text-[#c9a84c] transition-colors">تأثيرها</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-6 tracking-widest text-sm uppercase">المصادر</h3>
          <ul className="flex flex-col gap-4 text-muted-gold">
            <li><span className="hover:text-[#c9a84c] cursor-pointer transition-colors">معهد الموسيقى العربية</span></li>
            <li><span className="hover:text-[#c9a84c] cursor-pointer transition-colors">أرشيف الإذاعة المصرية</span></li>
            <li><span className="hover:text-[#c9a84c] cursor-pointer transition-colors">متحف أم كلثوم</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs text-muted-gold" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <p>© {new Date().getFullYear()} أرشيف كوكب الشرق. توثيق للإرث الخالد.</p>
        <p className="mt-4 md:mt-0 font-heading text-lg tracking-widest">Noir & Gold Edition</p>
      </div>
    </footer>
  );
};

// Layout wrapper to enforce stacking context and colors
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-0 min-h-screen flex flex-col pt-24" style={{ background: globalBg, color: globalFg }}>
      <Navigation />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/biography" element={<Layout><Biography /></Layout>} />
        <Route path="/discography" element={<Layout><Discography /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/legacy" element={<Layout><Legacy /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
