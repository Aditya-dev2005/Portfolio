"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What are his top projects?",
  "What's his LeetCode rating?",
  "Is he open to internships?",
  "What tech stack does he use?",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Aditya's AI assistant. Ask me anything about his skills, projects, experience, or how to reach him! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  async function sendMessage(text?: string) {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        const errorMsg = data.error?.includes("API key not configured")
          ? "⚠️ API key not set up yet. Add your ANTHROPIC_API_KEY to .env.local to enable the chatbot. Contact Aditya at adichat571@gmail.com"
          : "Something went wrong. Please try again or contact Aditya at adichat571@gmail.com";
        setMessages((prev) => [...prev, { role: "assistant", content: errorMsg }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Make sure the dev server is running and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: "#0D1117",
              border: "1px solid rgba(79,255,176,0.2)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,255,176,0.05)",
              height: "480px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(30,42,58,0.8)", background: "#0A0E16" }}
            >
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                  style={{ background: "rgba(79,255,176,0.15)", border: "1px solid rgba(79,255,176,0.3)", color: "#4FFFB0" }}
                >
                  AC
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#0A0E16]" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-text text-sm">Aditya&apos;s Assistant</p>
                <p className="font-mono text-[10px] text-accent">● Online</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-textMuted hover:text-text transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "thin" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm font-body leading-relaxed"
                    style={
                      msg.role === "user"
                        ? { background: "#4FFFB0", color: "#080B12", fontWeight: 500, borderBottomRightRadius: "4px" }
                        : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "#E2E8F0", borderBottomLeftRadius: "4px" }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-textMuted font-mono text-[10px] uppercase tracking-widest">Try asking</p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full text-left text-xs text-textMuted hover:text-accent px-3 py-2 rounded-xl transition-all font-body"
                      style={{ background: "rgba(79,255,176,0.04)", border: "1px solid rgba(79,255,176,0.1)" }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 p-3" style={{ borderTop: "1px solid rgba(30,42,58,0.8)" }}>
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                  placeholder="Ask about skills, projects, contact..."
                  disabled={loading}
                  className="flex-1 bg-transparent text-sm text-text placeholder-textMuted/50 outline-none font-body"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30"
                  style={{ background: input.trim() && !loading ? "#4FFFB0" : "rgba(79,255,176,0.15)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke={input.trim() && !loading ? "#080B12" : "#4FFFB0"} strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              <p className="text-center font-mono text-[9px] text-textMuted/30 mt-2">Powered by Claude AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: isOpen ? "rgba(13,17,23,0.95)" : "linear-gradient(135deg, #4FFFB0, #38BDF8)",
          border: isOpen ? "1px solid rgba(79,255,176,0.4)" : "none",
          boxShadow: "0 8px 32px rgba(79,255,176,0.25)",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FFFB0" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#080B12" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-accent">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
          </span>
        )}
      </motion.button>
    </>
  );
}
