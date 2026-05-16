
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import ChatDashboard from "./pages/ChatDashboard";
import Biography from "./pages/Biography";
import Discography from "./pages/Discography";
import Legacy from "./pages/Legacy";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-[#fafbfc] text-[#1a1a2e] ds-bg" dir="rtl">
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto relative z-10 ds-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatDashboard />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/gallery" element={<div className="p-10 font-bold text-2xl">معرض الصور (قريباً في هذا النموذج)</div>} />
            <Route path="/legacy" element={<Legacy />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
