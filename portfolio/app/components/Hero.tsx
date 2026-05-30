"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = [
  "Backend Systems Engineer",
  "AI/ML Researcher",
  "Full Stack Developer",
  "Open Source Contributor",
];

function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-accent font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg" 
           style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #080B12 100%)" }} />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.04]"
           style={{ background: "radial-gradient(circle, #4FFFB0 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04]"
           style={{ background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-[0.03]"
           style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)", filter: "blur(50px)" }} />
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#4FFFB0" : i % 3 === 1 ? "#38BDF8" : "#A78BFA",
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30 - Math.random() * 30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stats = [
  { value: "1720+", label: "LeetCode Rating" },
  { value: "1000+", label: "Problems Solved" },
  { value: "Top 5%", label: "LeetCode Global" },
  { value: "2", label: "Research Papers" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <GridBackground />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-accent text-xs tracking-widest uppercase">
              Available for Opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-text">Aditya </span>
          <span className="gradient-text">Chaturvedi</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          className="font-body text-lg sm:text-xl text-textMuted mb-5 h-8 flex items-center justify-center"
        >
          <TypewriterText />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-textMuted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building{" "}
          <span className="text-text">scalable AI systems</span>,{" "}
          <span className="text-text">intelligent backend infrastructure</span>, and{" "}
          <span className="text-text">research-driven applications</span> that push the boundary of what software can do.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="/api/resume"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-all duration-200 font-body hover:shadow-lg hover:shadow-accent/20"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Resume
          </a>
          <a
            href="https://github.com/Aditya-dev2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accentBlue/40 text-textMuted hover:text-accentBlue transition-all duration-200 text-sm font-body"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditya-chaturvedi05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accentBlue/40 text-textMuted hover:text-accentBlue transition-all duration-200 text-sm font-body"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:adichat571@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accentPurple/40 text-textMuted hover:text-accentPurple transition-all duration-200 text-sm font-body"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glow-border rounded-xl p-4 bg-card/40 text-center hover:bg-card/60 transition-colors"
            >
              <div className="font-display font-bold text-2xl gradient-text mb-1">{stat.value}</div>
              <div className="font-body text-textMuted text-xs leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-textMuted text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
