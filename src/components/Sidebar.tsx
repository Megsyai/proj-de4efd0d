
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Music, Image as ImageIcon, MessageSquare, Heart, Settings, Hash, Mic2 } from "lucide-react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const location = useLocation();

  const navGroups = [
    {
      title: "الرئيسية",
      items: [
        { path: "/", label: "لوحة التحكم", icon: LayoutDashboard },
        { path: "/chat", label: "محادثة الذكاء (إصلاح)", icon: MessageSquare, badge: "جديد" },
      ]
    },
    {
      title: "الموسوعة",
      items: [
        { path: "/biography", label: "السيرة الذاتية", icon: BookOpen },
        { path: "/discography", label: "الأعمال الخالدة", icon: Music },
        { path: "/gallery", label: "المعرض والفنون", icon: ImageIcon },
        { path: "/legacy", label: "الأثر والتاريخ", icon: Heart },
      ]
    }
  ];

  return (
    <aside className="w-64 h-screen shrink-0 border-l border-[rgba(26,26,46,0.06)] bg-[#ffffff] hidden md:flex flex-col relative z-20">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#5b5fc7] text-white flex items-center justify-center font-bold text-xl shadow-[0_4px_12px_rgba(91,95,199,0.3)] group-hover:-translate-y-0.5 transition-transform">
            أ.ك
          </div>
          <div>
            <h1 className="font-bold text-[#1a1a2e] text-lg leading-tight">أم كلثوم</h1>
            <p className="text-[11px] text-[rgba(26,26,46,0.58)] font-medium">كوكب الشرق</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-8 ds-scrollbar">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="px-3 text-xs font-semibold text-[rgba(26,26,46,0.4)] uppercase tracking-wider mb-3">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                      isActive 
                        ? "bg-[#5b5fc7] text-white shadow-md shadow-[#5b5fc7]/20" 
                        : "text-[rgba(26,26,46,0.7)] hover:bg-[rgba(26,26,46,0.03)] hover:text-[#1a1a2e]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={18} className={isActive ? "text-white" : "text-[rgba(26,26,46,0.5)]"} />
                      {item.label}
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-[#7dd3c0]/20 text-[#1a1a2e]'}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div>
          <h3 className="px-3 text-xs font-semibold text-[rgba(26,26,46,0.4)] uppercase tracking-wider mb-3">
            أشهر الملحنين
          </h3>
          <div className="space-y-2 px-3">
            {[
              { name: "محمد عبد الوهاب", color: "bg-[#c9b6f5]" },
              { name: "رياض السنباطي", color: "bg-[#7dd3c0]" },
              { name: "بليغ حمدي", color: "bg-[#ffb0d2]" },
            ].map((composer) => (
              <div key={composer.name} className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#1a1a2e] ${composer.color}`}>
                  {composer.name.charAt(0)}
                </div>
                <span className="text-sm text-[rgba(26,26,46,0.7)] group-hover:text-[#1a1a2e] transition-colors">{composer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-[rgba(26,26,46,0.06)]">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-[rgba(26,26,46,0.7)] hover:bg-[rgba(26,26,46,0.03)] rounded-lg transition-colors">
          <Settings size={18} />
          الإعدادات
        </button>
      </div>
    </aside>
  );
};
