import { useState, useRef, useEffect } from "react";
import { Terminal, X, Maximize2, Minus } from "lucide-react";

interface CommandOutput {
  id: string;
  type: "input" | "output" | "error";
  content: string;
}

const TerminalCLI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "init",
      type: "output",
      content: "JayaOS Terminal v1.0.0\nType 'help' to see available commands."
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory(prev => [...prev, { id: Math.random().toString(), type: "input", content: `visitor@jaya.dev:~$ ${trimmed}` }]);

    const lowerCmd = trimmed.toLowerCase();
    let output = "";
    let isError = false;

    switch (lowerCmd) {
      case "help":
        output = `Available commands:
  whoami    - Learn about me
  skills    - View my tech stack
  projects  - See what I've built
  contact   - How to reach me
  clear     - Clear the terminal screen
  exit      - Close the terminal`;
        break;
      case "whoami":
        output = "Jaya Patel\nFull-Stack Developer & AI/ML Student.\nI build complete web apps — from database to UI.\nOpen to freelance work and internships.";
        break;
      case "skills":
        output = `Frontend: React, Next.js, Tailwind, HTML/CSS, Vanilla JS
Backend: Node.js, Express, REST APIs
Databases: MySQL, MongoDB, SQLite
Tools: Git, Vite, Vercel, Figma`;
        break;
      case "projects":
        output = `1. Student Management System (Full-Stack) -> Next.js, MySQL
2. Developer Portfolio (Frontend) -> Next.js, GSAP
3. Online Quiz Platform (Vanilla JS)
4. Weather App (API Integration)
5. Todo App (Full-Stack) -> React, Node, SQLite
Type 'help' or explore the site for details!`;
        break;
      case "contact":
        output = `Email: hello@jaya.dev | jayamyname19@gmail.com
GitHub: github.com/jayapatel-dev
LinkedIn: linkedin.com/in/jayapatel-dev`;
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        output = `Command not found: ${trimmed}. Type 'help' for available commands.`;
        isError = true;
    }

    setHistory(prev => [...prev, { id: Math.random().toString(), type: isError ? "error" : "output", content: output }]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[var(--color-bg-yellow)] text-text-main font-heading font-bold text-lg px-6 py-4 rounded-full brutalist-border brutalist-shadow cursor-pointer"
      >
        <Terminal className="w-6 h-6" />
        <span>Ask my AI (CLI)</span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col bg-[#0F0F0F] text-[#4af626] font-mono brutalist-border box-shadow-[6px_6px_0px_0px_#EC1A8D] rounded-[16px] overflow-hidden transition-all duration-300 ${isMinimized ? 'w-72 h-14' : 'w-[90vw] max-w-[500px] h-[400px]'}`}>
      {/* Title Bar - Brutalist Style */}
      <div className="bg-[var(--color-bg-pink)] text-white border-b-[3px] border-[#0F0F0F] px-4 py-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 font-heading font-bold tracking-wider">
          <Terminal className="w-5 h-5 text-white" />
          <span>JayaOS.exe</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:scale-110 transition-transform">
            {isMinimized ? <Maximize2 className="w-5 h-5 stroke-[3]" /> : <Minus className="w-5 h-5 stroke-[3]" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-3 text-[15px] leading-relaxed scrollbar-thin scrollbar-thumb-[var(--color-bg-pink)] bg-[#0F0F0F]">
          {history.map((item) => (
            <div key={item.id} className={item.type === "error" ? "text-red-400" : item.type === "input" ? "text-white" : "text-[#F5BA31] whitespace-pre-wrap"}>
              {item.content}
            </div>
          ))}
          <div ref={endRef} />
          
          {/* Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
              setInputVal("");
            }}
            className="flex items-center gap-3 mt-2"
          >
            <span className="text-white font-bold">visitor@jaya.dev:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#F5BA31] focus:ring-0 p-0 font-bold"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default TerminalCLI;
