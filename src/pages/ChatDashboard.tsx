
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GridBackground } from "@/components/Backgrounds";

// Mock AI logic since actual backend isn't linked in this strict frontend environment.
// In a real app, this would use fetch to your LLM endpoint.
const generateAIResponse = async (query: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes("أم كلثوم") || lowerQuery.includes("من هي")) {
        resolve("أنا الذكاء الاصطناعي المبرمج لتمثيل معرفة عن السيدة أم كلثوم. ولدت فاطمة إبراهيم السيد البلتاجي في قرية طماي الزهايرة بمحافظة الدقهلية. وتعتبر أبرز مغنية في القرن العشرين بالوطن العربي.");
      } else if (lowerQuery.includes("اغاني") || lowerQuery.includes("أغاني") || lowerQuery.includes("أغنية")) {
        resolve("لأم كلثوم آلاف التسجيلات ومئات الأغاني. من أشهرها: 'إنت عمري'، 'الأطلال'، 'ألف ليلة وليلة'، 'سيرة الحب'، و'دارت الأيام'. هل ترغب في معرفة تفاصيل عن أغنية محددة؟");
      } else if (lowerQuery.includes("عبد الوهاب")) {
        resolve("محمد عبد الوهاب هو موسيقار الأجيال. استمر التنافس بينهما لسنوات طويلة حتى تدخّل الرئيس جمال عبد الناصر ليجمعهما في 'لقاء السحاب' بأغنية 'إنت عمري' عام 1964، والتي حققت نجاحاً تاريخياً.");
      } else {
        resolve("كانت أم كلثوم رمزا للفن الأصيل. تسألني سؤالاً مثيراً للاهتمام... بصفتي مساعد ذكي، يمكنني إخبارك عن حياتها، ملحنيها، أو تفاصيل حفلاتها. ماذا تود أن تعرف؟");
      }
    }, 1500); // Simulate network latency
  });
};

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

const ChatDashboard = () => {
  // CRITICAL FIX: Managing local state so optimistic UI updates actually render.
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    // 1. Update state optimistically (THIS FIXES THE BUG)
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Fetch AI response
      const responseText = await generateAIResponse(userMessage.content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: responseText
      };

      // 3. Append AI response
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to fetch response", error);
      // Fallback error message
      setMessages(prev => [...prev, {
        id: 'er-' + Date.now(),
        role: 'ai',
        content: 'عذراً، حدث خطأ في الاتصال بقاعدة المعرفة. يرجى المحاولة مرة أخرى.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative z-0 bg-[#fafbfc]">
      <GridBackground />
      
      {/* Header */}
      <header className="px-8 py-5 bg-white/80 backdrop-blur-md border-b border-[rgba(26,26,46,0.06)] sticky top-0 z-20 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="text-[#5b5fc7]" size={20} />
            مساعد أم كلثوم الذكي
          </h2>
          <p className="text-xs text-[rgba(26,26,46,0.5)] mt-1">اسأل عن التاريخ، الأغاني، والكواليس الخفية</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#eefdf5] border border-[#7dd3c0]/30 text-[#0f5c49] text-xs font-semibold">
           <span className="w-2 h-2 rounded-full bg-[#7dd3c0] animate-pulse"></span>
           متصل بالشبكة
        </div>
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 ds-scrollbar">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Empty State (Signature Design Requirement) */}
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-20 flex flex-col items-center justify-center text-center p-10 ds-card bg-white/50 backdrop-blur-sm"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-[#c9b6f5]/40 to-[#5b5fc7]/20 flex items-center justify-center">
                <Bot size={40} className="text-[#5b5fc7]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1a1a2e]">كيف يمكنني مساعدتك اليوم؟</h3>
              <p className="text-[rgba(26,26,46,0.6)] max-w-md mx-auto mb-8 text-sm">
                تم تدريب هذا النموذج للرد على أي استفسار يخص كوكب الشرق. جرب قوالب الأسئلة الجاهزة لتبدأ المحادثة فوراً.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg">
                {[
                  "ما هي قصة أغنية الأطلال؟",
                  "حدثني عن خلافها مع عبد الوهاب",
                  "كم عدد الأغاني التي غنتها؟",
                  "متى كانت أول حفلة لها في باريس؟"
                ].map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setInput(q)}
                    className="text-sm p-3 text-right bg-white border border-[rgba(26,26,46,0.06)] rounded-xl hover:border-[#5b5fc7]/30 hover:bg-[rgba(91,95,199,0.02)] transition-colors text-[rgba(26,26,46,0.8)]"
                  >
                    {q} &larr;
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Messages Map */}
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm
                  ${msg.role === 'user' ? 'bg-[#1a1a2e]' : 'bg-gradient-to-br from-[#5b5fc7] to-[#8084e6]'}`}
                >
                  {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                </div>

                {/* Bubble */}
                <div className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-[#5b5fc7] text-white rounded-tl-sm' 
                    : 'bg-white border border-[rgba(26,26,46,0.06)] text-[#1a1a2e] rounded-tr-sm shadow-sm'}`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                 <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#5b5fc7] to-[#8084e6] flex items-center justify-center text-white shadow-sm">
                  <Bot size={18} />
                </div>
                <div className="bg-white border border-[rgba(26,26,46,0.06)] p-4 rounded-2xl rounded-tr-sm flex items-center gap-2">
                  <Loader2 size={16} className="text-[#5b5fc7] animate-spin" />
                  <span className="text-xs text-[rgba(26,26,46,0.5)]">جاري البحث في الأرشيف...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-white border-t border-[rgba(26,26,46,0.06)]">
        <div className="max-w-3xl mx-auto relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب سؤالك هنا عن أم كلثوم..."
            className="w-full bg-[#fafbfc] border border-[rgba(26,26,46,0.1)] rounded-2xl py-4 pr-5 pl-16 text-[#1a1a2e] focus:outline-none focus:border-[#5b5fc7] focus:ring-1 focus:ring-[#5b5fc7] transition-all"
            dir="auto"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute left-2.5 w-10 h-10 rounded-xl bg-[#5b5fc7] text-white flex items-center justify-center hover:bg-[#494c9e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} className="rtl:rotate-180 -ml-1" />
          </button>
        </div>
        <p className="text-center text-[10px] text-[rgba(26,26,46,0.4)] mt-3">
          الذكاء الاصطناعي قد يخطئ في بعض التواريخ الدقيقة. يرجى مراجعة المصادر التاريخية المعتمدة للتوثيق الأكاديمي.
        </p>
      </div>
    </div>
  );
};

export default ChatDashboard;
