import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { personalInfo, skills, experiences, education } from '../../utils/portfolioData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function generateResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes('skill') || lower.includes('technolog') || lower.includes('stack')) {
    const skillNames = skills.map((s) => s.name).join(', ');
    return `Mudasar is skilled in: **${skillNames}**. His strongest areas are HTML5, CSS3, Bootstrap, and VS Code, with growing expertise in React and TypeScript! 💻`;
  }

  if (/\b(hello|hi|hey|hola)\b/.test(lower)) {
    return `Hey there! 👋 I'm Mudasar's AI assistant. I can tell you about his skills, experience, projects, education, or how to contact him. What would you like to know?`;
  }

  if (lower.includes('name') || lower.includes('who')) {
    return `He's **${personalInfo.name}** — a passionate ${personalInfo.title} based in ${personalInfo.location}. He loves building beautiful, responsive web interfaces! 🚀`;
  }

  if (lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
    const expList = experiences
      .map((e) => `• **${e.title}** at ${e.company} (${e.period})`)
      .join('\n');
    return `Here's Mudasar's experience:\n${expList}\n\nHe's currently working at Ace Connect as a Frontend Developer! 💼`;
  }

  if (lower.includes('project')) {
    return `Mudasar has built several projects including portfolio websites, e-commerce landing pages, weather dashboards, task managers, and more! Check out the Projects section to see them all. You can also visit his GitHub: ${personalInfo.github} 🎨`;
  }

  if (lower.includes('education') || lower.includes('study') || lower.includes('university') || lower.includes('degree')) {
    return `Mudasar studied at **${education.institution}** (${education.period}). His coursework included ${education.coursework.join(', ')}. 🎓`;
  }

  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire')) {
    return `You can reach Mudasar at:\n📧 **Email:** ${personalInfo.email}\n📱 **Phone:** ${personalInfo.phone}\n📍 **Location:** ${personalInfo.location}\n🐙 **GitHub:** ${personalInfo.github}\n\nFeel free to scroll down to the Contact section to send a message! 📬`;
  }

  if (lower.includes('location') || lower.includes('where') || lower.includes('live') || lower.includes('from')) {
    return `Mudasar is based in **${personalInfo.location}** 🇵🇰. He's open to remote work and collaboration worldwide! 🌍`;
  }

  if (lower.includes('react') || lower.includes('framework')) {
    return `Mudasar works with React, Bootstrap, and Tailwind CSS. He's actively learning advanced React patterns and TypeScript to build scalable applications! ⚛️`;
  }

  if (lower.includes('hobby') || lower.includes('interest') || lower.includes('fun')) {
    return `Besides coding, Mudasar enjoys exploring new web technologies, contributing to open-source projects, and creating beautiful UI designs. He's always learning and improving! 🎯`;
  }

  if (lower.includes('thank')) {
    return `You're welcome! 😊 Feel free to ask anything else about Mudasar. I'm here to help!`;
  }

  return `Great question! I'm Mudasar's AI assistant. I can help you with:\n\n• **Skills & Technologies** — What he knows\n• **Experience** — Where he's worked\n• **Projects** — What he's built\n• **Education** — His academic background\n• **Contact** — How to reach him\n\nJust ask about any of these topics! 🤖`;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! 👋 I'm Mudasar's AI assistant. Ask me anything about his skills, experience, projects, or how to contact him!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center text-white z-[999] shadow-xl"
        style={{
          background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaRobot size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid var(--gradient-start)' }}
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden z-[999] shadow-2xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              height: '500px',
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
              }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot size={20} color="white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">AI Assistant</h4>
                <p className="text-xs text-white/70">Ask me about Mudasar</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/70">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ height: 'calc(500px - 130px)' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-sm text-white'
                        : 'rounded-bl-sm'
                    }`}
                    style={{
                      background:
                        msg.role === 'user'
                          ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                          : 'var(--bg-secondary)',
                      color:
                        msg.role === 'user' ? 'white' : 'var(--text-primary)',
                    }}
                  >
                    {msg.content.split('\n').map((line, j) => (
                      <p key={j} className={j > 0 ? 'mt-1' : ''}>
                        {line.split('**').map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k}>{part}</strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--gradient-start)' }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="px-4 py-3 flex items-center gap-2"
              style={{
                borderTop: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Mudasar..."
                className="flex-1 px-4 py-2.5 rounded-xl outline-none text-sm"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
              <motion.button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-40"
                style={{
                  background:
                    'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPaperPlane size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
