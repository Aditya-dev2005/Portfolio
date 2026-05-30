"use client";

import { motion } from "framer-motion";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

const interests = [
  { icon: "⚡", label: "Backend Systems", desc: "Scalable APIs, distributed infra" },
  { icon: "🧠", label: "AI Infrastructure", desc: "RAG pipelines, vector DBs, LLMs" },
  { icon: "🔬", label: "ML Research", desc: "Diffusion models, GNNs, audio-motion" },
  { icon: "📱", label: "Mobile Dev", desc: "Android, Kotlin, Flutter" },
];

const quickFacts = [
  { label: "University", value: "JIIT Noida" },
  { label: "Degree", value: "B.Tech CS" },
  { label: "Graduation", value: "July 2027" },
  { label: "CGPA", value: "7.45 / 10" },
  { label: "Location", value: "Noida, India" },
  { label: "Email", value: "adichat571@gmail.com" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">01 — About</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3 space-y-6">
            <p className="font-body text-textMuted text-base leading-relaxed">
              I&apos;m a{" "}
              <span className="text-text font-medium">Computer Science undergraduate at JIIT</span>{" "}
              with a deep interest in backend systems, AI infrastructure, and applied ML research. I build{" "}
              <span className="text-text font-medium">production-grade systems</span> that don&apos;t just work in demos — they
              scale, handle concurrency, and solve real problems.
            </p>
            <p className="font-body text-textMuted text-base leading-relaxed">
              My research spans{" "}
              <span className="text-accent font-medium">Retrieval-Augmented Generation</span>,{" "}
              <span className="text-accentBlue font-medium">diffusion models for motion synthesis</span>, and{" "}
              <span className="text-accentPurple font-medium">graph neural networks for geospatial analysis</span> — two of which
              have been published or submitted to IEEE/SCOPUS conferences.
            </p>
            <p className="font-body text-textMuted text-base leading-relaxed">
              Outside research, I contribute to open source through GSSoC, enjoy competitive programming on LeetCode
              (1720+ rating, top 5%), and mentor peers in DSA. I&apos;m looking for roles where engineering rigor and
              intellectual curiosity are both valued.
            </p>

            {/* Interest cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="glow-border rounded-xl p-4 bg-card/30 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="font-display font-semibold text-text text-sm mb-1">{item.label}</div>
                  <div className="font-body text-textMuted text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick facts card */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-2">
            <div className="glass rounded-2xl border border-border/60 p-6 space-y-1">
              <h3 className="font-display font-semibold text-text text-sm mb-5 uppercase tracking-widest text-accent">
                Quick Facts
              </h3>
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between py-2.5 border-b border-border/40 last:border-0"
                >
                  <span className="font-mono text-xs text-textMuted">{fact.label}</span>
                  <span className="font-body text-sm text-text font-medium">{fact.value}</span>
                </div>
              ))}

              {/* Social links in card */}
              <div className="pt-4 flex gap-3">
                <a
                  href="https://github.com/Aditya-dev2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border border-border hover:border-accentBlue/40 hover:text-accentBlue text-textMuted text-xs transition-all font-body"
                >
                  GitHub →
                </a>
                <a
                  href="https://linkedin.com/in/aditya-chaturvedi05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border border-border hover:border-accentBlue/40 hover:text-accentBlue text-textMuted text-xs transition-all font-body"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
