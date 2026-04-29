import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/\b(skill|tech|stack|know|language)\b/.test(lower)) {
    return 'Mudasar works with HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Bootstrap, Git, GitHub, VS Code, Vite, Figma, Vercel, and Netlify — 14 technologies in total!';
  }
  if (/\b(project|built|portfolio|work)\b/.test(lower)) {
    return 'He has built 6+ projects including this portfolio with AI chatbot, an E-Commerce Dashboard, Weather App, Task Manager, Restaurant Landing Page, and Blog Platform UI.';
  }
  if (/\b(experience|job|intern|company)\b/.test(lower)) {
    return 'Mudasar is currently interning at Ace Connect Multan through PSEB, does freelance frontend development, and actively builds personal projects & open source contributions.';
  }
  if (/\b(education|university|degree|study)\b/.test(lower)) {
    return 'He is pursuing a BS in Information Technology at Islamia University of Bahawalpur (2021-2025), specializing in Web Development and Software Engineering.';
  }
  if (/\b(contact|email|phone|reach|hire)\b/.test(lower)) {
    return 'You can reach Mudasar at:\n• Email: muhammadmudasar0625@gmail.com\n• Phone: +92 309 862 4009\n• GitHub: github.com/Mudasar-123\n• Location: Multan, Pakistan';
  }
  if (/\b(location|where|city|live|from)\b/.test(lower)) {
    return 'Mudasar is based in Multan, Pakistan.';
  }
  if (/\b(hello|hi|hey|hola)\b/.test(lower)) {
    return 'Hey there! 👋 I\'m Mudasar\'s AI assistant. Ask me about his skills, projects, experience, education, or contact info!';
  }
  if (/\b(who|about|tell)\b/.test(lower)) {
    return 'Muhammad Mudasar is a passionate Frontend Developer from Multan, Pakistan. He specializes in React, Tailwind CSS, and modern web technologies. Currently pursuing BS IT at IUB.';
  }
  if (/\b(theme|dark|light|mode)\b/.test(lower)) {
    return 'This portfolio supports 4 themes: Dark (default), Light, Cyberpunk, and Sunset. Click the theme icon in the navbar to switch!';
  }
  return 'I can help you learn about Mudasar\'s skills, projects, experience, education, or contact info. What would you like to know?';
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! 👋 I\'m Mudasar\'s AI assistant. Ask me anything about his skills, projects, or experience!' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-[999] border-none transition-all hover:scale-110"
        style={{
          background: 'var(--accent)',
          color: '#000',
          boxShadow: '0 4px 15px var(--accent-glow)',
        }}
        aria-label="Toggle AI Chat"
      >
        <i className={open ? 'fas fa-times' : 'fas fa-robot'} style={{ fontSize: '1.2rem' }} />
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-20 right-6 w-80 max-h-96 rounded-xl overflow-hidden flex flex-col z-[998]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{
              background: 'var(--accent)',
              color: '#000',
            }}
          >
            <i className="fas fa-robot" />
            <div>
              <div className="text-sm font-bold">AI Assistant</div>
              <div className="text-xs opacity-80">Ask about Mudasar</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px] max-h-[280px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-3 py-2 rounded-lg text-sm whitespace-pre-line"
                  style={{
                    background: msg.role === 'user' ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: msg.role === 'user' ? '#000' : 'var(--text-primary)',
                    border: msg.role === 'bot' ? '1px solid var(--border-color)' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="p-3 flex gap-2"
            style={{ borderTop: '1px solid var(--border-color)' }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 rounded-lg text-sm outline-none border-none"
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
            />
            <button
              onClick={send}
              className="px-3 py-2 rounded-lg border-none cursor-pointer transition-all hover:scale-105"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
