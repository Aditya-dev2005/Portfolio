"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tags: string[];
  tagColor: "green" | "blue" | "purple";
  github: string;
  demo?: string;
  highlights: string[];
  accentColor: string;
  badge?: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "ContextCore",
    subtitle: "RAG Document Intelligence Platform",
    description:
      "Production-grade RAG system with hybrid retrieval, Redis caching, and real-time streaming — reducing query latency from 2.5s to 4ms.",
    longDesc:
      "A stateless, horizontally scalable backend with multi-turn conversational memory, per-user document isolation, and full session persistence.",
    tags: ["Python", "FastAPI", "FAISS", "Redis", "BM25", "JWT", "SSE"],
    tagColor: "green",
    github: "https://github.com/Aditya-dev2005/ContextCore",
    highlights: [
      "Hybrid FAISS + BM25 retrieval fused via Reciprocal Rank Fusion",
      "Redis TTL caching: 2.5s → 4ms query latency",
      "Per-user isolated FAISS vector stores with JWT auth",
      "SSE token streaming for sub-second real-time responses",
    ],
    accentColor: "#4FFFB0",
    badge: "Featured",
    icon: "⚡",
  },
  {
    title: "RA-MDM",
    subtitle: "Rhythm-Aware Motion Diffusion Model",
    description:
      "Research implementation of a rhythm-conditioned diffusion framework achieving 0.94 beat alignment — 6.5% improvement over HMDM baseline.",
    longDesc:
      "Published on ResearchGate. Extended DDPM with style-adaptive FiLM layers and learned noise schedules for multimodal audio-to-motion synthesis.",
    tags: ["PyTorch", "Diffusion Models", "Librosa", "AIST++", "DDPM", "FiLM"],
    tagColor: "blue",
    github: "https://github.com/Aditya-dev2005/Rhythm-Aware-Motion-Diffusion-Model",
    highlights: [
      "0.94 beat alignment across 4 dance styles",
      "18% lower FID vs RNN/VAE/GAN/HMDM baselines",
      "Style-adaptive FiLM layers + learned noise schedule",
      "Published on ResearchGate with ablation studies",
    ],
    accentColor: "#38BDF8",
    badge: "Research Paper",
    icon: "🎵",
  },
  {
    title: "GAT Land Cover",
    subtitle: "Graph Attention Network Classification",
    description:
      "End-to-end GAT pipeline on EuroSAT multispectral dataset achieving 76.9% accuracy and 100% F1 on water body detection.",
    longDesc:
      "Submitted to IC3-2026 (IEEE, SCOPUS-indexed) as the first reported SLIC+NDVI+GAT application on the EuroSAT benchmark.",
    tags: ["PyTorch Geometric", "GNNs", "EuroSAT", "SLIC", "NDVI", "GAT"],
    tagColor: "purple",
    github: "https://github.com/Aditya-dev2005/GAT-Land-Cover-Classification",
    highlights: [
      "SLIC superpixel graphs with 21-dimensional node features",
      "100% F1 on water body detection via NDVI thresholding",
      "2-layer GAT with 8 attention heads",
      "Submitted to IC3-2026 (IEEE SCOPUS-indexed)",
    ],
    accentColor: "#A78BFA",
    badge: "IEEE Submission",
    icon: "🛰️",
  },
  {
    title: "MindLink",
    subtitle: "AI-Powered Study & Wellness App",
    description:
      "Flutter app combining AI chat, smart study summaries, focus mode, and mental wellness tracking with secure real-time messaging.",
    longDesc: "Built with Firebase, Dart, and Gemini API for smart summarization and productivity optimization.",
    tags: ["Flutter", "Dart", "Firebase", "Gemini API", "AI"],
    tagColor: "green",
    github: "https://github.com/Aditya-dev2005/MindLink",
    highlights: [
      "AI-powered study summaries using Gemini API",
      "Real-time secure chat with Firebase",
      "Focus mode + mental wellness tracking",
      "Clean MVVM architecture with modular components",
    ],
    accentColor: "#4FFFB0",
    icon: "🧠",
  },
  {
    title: "Gold Price Predictor",
    subtitle: "Investment Advisor with Soft Computing",
    description:
      "Intelligent gold price prediction system using soft computing techniques to generate actionable investment signals.",
    longDesc: "Combines time-series ML models with signal processing for financial forecasting and investment strategy generation.",
    tags: ["Python", "ML", "Soft Computing", "Streamlit", "Pandas"],
    tagColor: "blue",
    github: "https://github.com/Aditya-dev2005/Gold_price_predictor_Investment_Advisor",
    highlights: [
      "Soft computing techniques for price forecasting",
      "Buy/sell investment signal generation",
      "Interactive Streamlit dashboard",
      "Historical pattern analysis",
    ],
    accentColor: "#38BDF8",
    icon: "📈",
  },
  {
    title: "QuizForge",
    subtitle: "Gamified Flutter Quiz App",
    description:
      "Dynamic quiz app with real-time scoring, adaptive difficulty, dark-themed interface, and modular architecture for iOS and Android.",
    longDesc: "Built with Flutter and Open Trivia API, featuring gamification mechanics and clean state management.",
    tags: ["Flutter", "Dart", "REST API", "Android", "iOS"],
    tagColor: "purple",
    github: "https://github.com/Aditya-dev2005/QuizForge",
    highlights: [
      "Adaptive difficulty scaling",
      "Real-time scoring with leaderboard",
      "Dynamic categories via Open Trivia API",
      "Cross-platform iOS and Android",
    ],
    accentColor: "#A78BFA",
    icon: "🎮",
  },
];

const tagColorMap = {
  green: "tag",
  blue: "tag tag-blue",
  purple: "tag tag-purple",
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">03 — Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Things I&apos;ve Built
          </h2>
          <p className="text-textMuted font-body text-sm mt-2 max-w-xl">
            From research implementations to production systems — each project reflects a commitment to engineering depth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(i * 0.08)}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group relative glow-border rounded-2xl bg-card/30 hover:bg-card/60 transition-all duration-400 overflow-hidden hover-lift flex flex-col"
              style={{
                boxShadow: hovered === i ? `0 20px 60px ${project.accentColor}12` : undefined,
              }}
            >
              {/* Top accent line */}
              <div
                className="h-0.5 w-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${project.accentColor}80, transparent)`,
                  opacity: hovered === i ? 1 : 0.4,
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <h3 className="font-display font-bold text-text text-base leading-tight">{project.title}</h3>
                      <p className="text-textMuted text-xs font-body mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.badge && (
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border flex-shrink-0"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}40`,
                        background: `${project.accentColor}10`,
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-body text-textMuted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-xs text-textMuted font-body">
                      <span style={{ color: project.accentColor }} className="flex-shrink-0 mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagColorMap[project.tagColor]}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:border-accent/40 hover:text-accent text-textMuted text-xs transition-all font-body"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:border-accent/40 hover:text-accent text-textMuted text-xs transition-all font-body"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div {...fadeUp(0.4)} className="text-center mt-12">
          <a
            href="https://github.com/Aditya-dev2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-accent/40 text-textMuted hover:text-accent text-sm transition-all font-body"
          >
            View all repositories on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
