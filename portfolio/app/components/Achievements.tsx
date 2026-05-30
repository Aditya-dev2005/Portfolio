"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

const achievements = [
  {
    icon: "🏆",
    title: "LeetCode Elite",
    value: "1720+",
    subtitle: "Rating · Top 5% Global",
    desc: "Solved 1000+ problems across LeetCode, GeeksForGeeks, and Coding Ninjas. Consistent performance in contests.",
    color: "#4FFFB0",
    tags: ["LeetCode", "Competitive Programming", "DSA"],
  },
  {
    icon: "📄",
    title: "Published Research",
    value: "2",
    subtitle: "Papers · IEEE + ResearchGate",
    desc: "RA-MDM published on ResearchGate. GAT Land Cover Classification submitted to IC3-2026 (IEEE, SCOPUS-indexed).",
    color: "#38BDF8",
    tags: ["IEEE", "SCOPUS", "ResearchGate"],
  },
  {
    icon: "🌐",
    title: "GSSoC 2025",
    value: "15+",
    subtitle: "PRs merged · 10+ Repos",
    desc: "Open source contributions reducing unauthorized access by 40%, improving UI engagement by 25%. All PRs code-reviewed and approved.",
    color: "#A78BFA",
    tags: ["Open Source", "Flutter", "Kotlin"],
  },
  {
    icon: "🏢",
    title: "Industry Simulations",
    value: "2",
    subtitle: "JPMorgan Chase + Deloitte",
    desc: "Completed advanced engineering simulations covering Kafka, Spring Boot, REST APIs, and enterprise tech dashboards.",
    color: "#4FFFB0",
    tags: ["Forage", "JPMorgan", "Deloitte"],
  },
  {
    icon: "👥",
    title: "Community Leadership",
    value: "KNUTH",
    subtitle: "Programming Hub · JIIT",
    desc: "Organized campus-wide coding contests as Volunteer at Knuth Programming Hub, mentoring peers in DSA and competitive programming.",
    color: "#38BDF8",
    tags: ["Leadership", "Mentoring", "Events"],
  },
  {
    icon: "⚡",
    title: "Problem Solving",
    value: "1000+",
    subtitle: "Problems across platforms",
    desc: "Consistent daily practice. Strong foundation in dynamic programming, graph algorithms, trees, and system design.",
    color: "#A78BFA",
    tags: ["Algorithms", "Data Structures", "System Design"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,255,176,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">05 — Achievements</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Milestones
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.08)}
              className="glow-border rounded-2xl p-6 bg-card/30 hover:bg-card/50 transition-all duration-300 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <div
                  className="font-display font-bold text-2xl"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>
              </div>

              <h3 className="font-display font-bold text-text text-base mb-0.5">{item.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: item.color }}>
                {item.subtitle}
              </p>
              <p className="font-body text-textMuted text-sm leading-relaxed mb-4">{item.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded border"
                    style={{
                      color: item.color,
                      background: `${item.color}08`,
                      borderColor: `${item.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big stat strip */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { n: "1720+", l: "LeetCode Rating", c: "#4FFFB0" },
            { n: "Top 5%", l: "Global Ranking", c: "#38BDF8" },
            { n: "15+", l: "PRs Merged", c: "#A78BFA" },
            { n: "2", l: "Research Papers", c: "#4FFFB0" },
          ].map((s) => (
            <div key={s.l} className="text-center py-6 glass rounded-xl border border-border/50">
              <div className="font-display font-bold text-3xl mb-1" style={{ color: s.c }}>
                {s.n}
              </div>
              <div className="font-body text-textMuted text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
