import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StorySection, StoryText } from '../Components/StorySection';
import { ProjectArtifact } from '../Components/ProjectArtifact';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main className="bg-[var(--color-white)] text-[var(--color-black)] overflow-hidden font-sans">
      
      {/* Intro Section */}
      <StorySection className="bg-[var(--color-yellow)] min-h-[100vh]">
        <StoryText delay={0.2}>
          <p className="font-[family-name:--font-script] text-3xl md:text-5xl mb-6 transform -rotate-2">
            The story of me becoming a developer.
          </p>
        </StoryText>
        <StoryText delay={0.4}>
          <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            I didn't know what I was doing when I started.
          </h1>
        </StoryText>
        <StoryText delay={0.6}>
          <p className="text-xl md:text-3xl font-medium opacity-80">
            I just knew I wanted to build something.
          </p>
        </StoryText>
        <StoryText delay={1.2}>
          <div className="mt-24 animate-bounce">
            <p className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2">You Scroll</p>
            <div className="w-[2px] h-16 bg-black/20 mx-auto rounded-full overflow-hidden">
              <motion.div 
                className="w-full h-full bg-black origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }}
              />
            </div>
          </div>
        </StoryText>
      </StorySection>

      {/* Chapter 1 */}
      <StorySection>
        <StoryText>
          <ProjectArtifact
            number="01 — The first thing I made"
            title="Todo App"
            bg="var(--color-blue)"
            color="var(--color-white)"
            tags={[
              { text: "HTML", bg: "rgba(255,255,255,0.1)" },
              { text: "CSS", bg: "rgba(255,255,255,0.1)" },
              { text: "JavaScript", bg: "rgba(255,255,255,0.1)" },
              { text: "React", bg: "rgba(255,255,255,0.1)" },
              { text: "Express", bg: "rgba(255,255,255,0.1)" },
            ]}
          >
            <p className="mb-4">My first step wasn't impressive. It was a Todo app.</p>
            <p className="mb-4">But it was the first time code stopped being something I was studying and became something I could make.</p>
            <p className="opacity-80">I learned how things connect. I broke things. I fixed them. And I wanted to build another one.</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      <StorySection className="min-h-[50vh]">
        <StoryText>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Then I got curious.</h2>
        </StoryText>
        <StoryText delay={0.2}>
          <p className="text-2xl md:text-4xl opacity-80 font-medium">I wanted my code to talk to the real world.</p>
        </StoryText>
      </StorySection>

      {/* Chapter 2 */}
      <StorySection>
        <StoryText>
          <ProjectArtifact
            number="02 — Real data"
            title="Weather App"
            bg="var(--color-cyan)"
            color="var(--color-black)"
            tags={[
              { text: "REST API", bg: "rgba(0,0,0,0.1)" },
              { text: "JavaScript", bg: "rgba(0,0,0,0.1)" }
            ]}
          >
            <p className="mb-4">So I learned APIs.</p>
            <p>Suddenly, my application wasn't just displaying things I had written—it could fetch something that existed outside my code.</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      <StorySection className="min-h-[50vh]">
        <StoryText>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">I started thinking about people.</h2>
        </StoryText>
        <StoryText delay={0.2}>
          <p className="text-2xl md:text-4xl opacity-80 font-medium max-w-3xl mx-auto">
            I started thinking less about "Can I code this?" and more about "What does someone experience when they use this?"
          </p>
        </StoryText>
      </StorySection>

      {/* Chapter 3 */}
      <StorySection>
        <StoryText>
          <ProjectArtifact
            number="03 — Interaction"
            title="Online Quiz Platform"
            bg="var(--color-dark-red)"
            color="var(--color-white)"
            tags={[
              { text: "JavaScript", bg: "rgba(255,255,255,0.1)" },
              { text: "UI", bg: "rgba(255,255,255,0.1)" },
              { text: "Interaction", bg: "rgba(255,255,255,0.1)" }
            ]}
          >
            <p className="mb-4">Real-time questions. Instant feedback. Score tracking.</p>
            <p>I was slowly learning that building software wasn't only about making it work.</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      <StorySection className="min-h-[50vh]">
        <StoryText>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">I started caring about how things feel.</h2>
        </StoryText>
      </StorySection>

      {/* Chapter 4 */}
      <StorySection>
        <StoryText>
          <ProjectArtifact
            number="04 — The aesthetic"
            title="My Portfolio"
            bg="var(--color-purple)"
            color="var(--color-white)"
            tags={[
              { text: "Next.js", bg: "rgba(255,255,255,0.1)" },
              { text: "Tailwind", bg: "rgba(255,255,255,0.1)" },
              { text: "GSAP", bg: "rgba(255,255,255,0.1)" }
            ]}
          >
            <p className="mb-4">I wanted to build a place that felt like me.</p>
            <p className="mb-4">That meant learning animations, responsive design and thinking about how someone moves through a website.</p>
            <p className="font-bold">Somewhere here, I realised: I don't just enjoy coding. I enjoy creating experiences.</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      <StorySection className="min-h-[50vh]">
        <StoryText>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            Then, small projects became real systems.
          </h2>
        </StoryText>
        <StoryText delay={0.2}>
          <p className="text-2xl md:text-4xl opacity-80 font-medium">Eventually, the problems became bigger.</p>
        </StoryText>
      </StorySection>

      {/* Chapter 5 */}
      <StorySection>
        <StoryText>
          <ProjectArtifact
            number="05 — The deep end"
            title="Student Management System"
            bg="var(--color-green)"
            color="var(--color-black)"
            tags={[
              { text: "Next.js", bg: "rgba(0,0,0,0.1)" },
              { text: "Node.js", bg: "rgba(0,0,0,0.1)" },
              { text: "MySQL", bg: "rgba(0,0,0,0.1)" }
            ]}
          >
            <p className="mb-4">Multiple users. Databases. Authentication. CRUD operations. Dashboards.</p>
            <p>I went from asking "How do I make this button work?" to asking "How should this entire system work?"</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      <StorySection className="bg-[var(--color-black)] text-[var(--color-white)] rounded-t-[64px] mt-24">
        <StoryText>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 max-w-3xl mx-auto leading-tight">
            But I didn't stop at building. I started asking different questions.
          </h2>
        </StoryText>
        <StoryText delay={0.2}>
          <p className="text-2xl md:text-4xl opacity-80 font-medium mb-12">
            Can technology solve problems that actually matter?
          </p>
        </StoryText>
        <StoryText delay={0.4}>
          <ProjectArtifact
            number="The shift"
            title="CodeForge & AI"
            bg="var(--color-orange)"
            color="var(--color-black)"
            tags={[
              { text: "Hackathons", bg: "rgba(0,0,0,0.1)" },
              { text: "Community", bg: "rgba(0,0,0,0.1)" },
              { text: "Research", bg: "rgba(0,0,0,0.1)" }
            ]}
          >
            <p className="mb-4">That's where AI entered my journey. Hackathons. Ideas. Research. Building solutions for real people.</p>
            <p>I started moving from "What can I build?" to "What should I build?"</p>
          </ProjectArtifact>
        </StoryText>
      </StorySection>

      {/* Outro */}
      <StorySection className="bg-[var(--color-black)] text-[var(--color-white)] min-h-[80vh]">
        <StoryText>
          <p className="font-[family-name:--font-script] text-4xl md:text-6xl text-[var(--color-yellow)] mb-8 transform -rotate-2">
            I'm still becoming.
          </p>
        </StoryText>
        <StoryText delay={0.2}>
          <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
            I don't have the whole roadmap figured out. Maybe that's the best part.
          </p>
          <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90 mb-16">
            There will be more things I build, more things I break, more technologies I don't understand yet, more ideas that fail, and hopefully, a few that matter.
          </p>
        </StoryText>
        <StoryText delay={0.4}>
          <div className="p-8 md:p-16 border-2 border-white/10 rounded-[32px] inline-block bg-white/5 mb-24">
            <h3 className="text-3xl md:text-5xl font-black mb-4">
              This portfolio isn't a collection of everything I've done.
            </h3>
            <p className="text-2xl md:text-4xl text-[var(--color-green)] font-bold">
              It's a record of who I was becoming while doing it.
            </p>
          </div>
        </StoryText>

        <StoryText delay={0.6}>
          <div className="max-w-2xl mx-auto text-left border-t border-white/20 pt-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8">Let's talk.</h2>
            <p className="text-xl md:text-2xl opacity-80 mb-6 leading-relaxed">
              I'm a CSE student, but I don't want my world to be limited to code.
            </p>
            <p className="text-xl md:text-2xl opacity-80 mb-6 leading-relaxed">
              If you're into software, AI, design, digital marketing, content, startups, research, or just building interesting things, I'd genuinely love to hear from you.
            </p>
            <ul className="text-xl md:text-2xl opacity-80 mb-12 space-y-2 list-none pl-0">
              <li>Maybe you have an idea.</li>
              <li>Maybe you want to collaborate.</li>
              <li>Maybe you can teach me something.</li>
              <li>Maybe I can help you build something.</li>
            </ul>
            <p className="text-xl md:text-2xl opacity-80 mb-12 font-bold text-[var(--color-cyan)]">
              You don't have to come with a job opportunity. Come with a thought, a question, an idea—or just say hi. I'd love to talk.
            </p>
            
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-4 bg-[var(--color-yellow)] text-black font-black text-2xl px-12 py-6 rounded-full hover:scale-105 transition-transform duration-300">
              Say Hello <span className="text-3xl">→</span>
            </a>
          </div>
        </StoryText>
      </StorySection>

    </main>
  );
};

export default Home;
