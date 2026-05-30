"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

const pinnedRepos = [
  {
    name: "ContextCore",
    desc: "RAG-powered document Q&A with hybrid FAISS + BM25 retrieval, Redis caching, FastAPI backend.",
    lang: "Python",
    color: "#3572A5",
    stars: 0,
    forks: 0,
    href: "https://github.com/Aditya-dev2005/ContextCore",
  },
  {
    name: "Rhythm-Aware-Motion-Diffusion-Model",
    desc: "Official implementation of RA-MDM for rhythm-synchronized dance sequence generation.",
    lang: "Jupyter Notebook",
    color: "#DA5B0B",
    stars: 1,
    forks: 1,
    href: "https://github.com/Aditya-dev2005/Rhythm-Aware-Motion-Diffusion-Model",
  },
  {
    name: "GAT-Land-Cover-Classification",
    desc: "Graph Attention Network for land cover classification on EuroSAT multispectral dataset.",
    lang: "Python",
    color: "#3572A5",
    stars: 0,
    forks: 0,
    href: "https://github.com/Aditya-dev2005/GAT-Land-Cover-Classification",
  },
  {
    name: "MindLink",
    desc: "AI-powered secure chat app boosting study productivity with smart summaries and wellness tracking.",
    lang: "Dart",
    color: "#00B4AB",
    stars: 1,
    forks: 0,
    href: "https://github.com/Aditya-dev2005/MindLink",
  },
];

// Simulate a contribution heatmap
function ContributionHeatmap() {
  const weeks = 26;
  const days = 7;

  // Generate fake but realistic-looking contribution data
  const data = Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => {
      const base = Math.random();
      if (base < 0.3) return 0;
      if (base < 0.55) return 1;
      if (base < 0.75) return 2;
      if (base < 0.9) return 3;
      return 4;
    })
  );

  const colors = [
    "rgba(30, 42, 58, 0.8)",       // 0
    "rgba(79, 255, 176, 0.2)",     // 1
    "rgba(79, 255, 176, 0.4)",     // 2
    "rgba(79, 255, 176, 0.65)",    // 3
    "rgba(79, 255, 176, 0.9)",     // 4
  ];

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.002, duration: 0.3 }}
                viewport={{ once: true }}
                className="w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-accent/50 transition-all"
                style={{ background: colors[level] }}
                title={`${level} contribution${level !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHub() {
  return (
    <section id="github" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">06 — Open Source</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            GitHub Activity
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Repositories", value: "21" },
            { label: "Stars Earned", value: "3+" },
            { label: "PRs Merged", value: "15+" },
            { label: "Repositories Forked", value: "5" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 border border-border/50 text-center">
              <div className="font-display font-bold text-xl text-accent mb-1">{s.value}</div>
              <div className="font-body text-textMuted text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          {...fadeUp(0.15)}
          className="glow-border rounded-2xl p-6 bg-card/30 mb-10"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-semibold text-text text-sm">Contribution Activity</h3>
            <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
              <span>Less</span>
              {["rgba(30,42,58,0.8)", "rgba(79,255,176,0.2)", "rgba(79,255,176,0.45)", "rgba(79,255,176,0.7)", "rgba(79,255,176,0.9)"].map(
                (c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
                )
              )}
              <span>More</span>
            </div>
          </div>
          <ContributionHeatmap />
        </motion.div>

        {/* Pinned repos */}
        <motion.div {...fadeUp(0.2)} className="mb-4">
          <h3 className="font-display font-semibold text-text text-sm mb-5">
            Pinned Repositories
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp(0.2 + i * 0.07)}
                className="glow-border rounded-xl p-5 bg-card/20 hover:bg-card/50 transition-all duration-300 block group hover-lift"
              >
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="text-textMuted mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h18v2H3v-2zm0 4h12v2H3v-2z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm text-accentBlue group-hover:text-accent transition-colors font-medium truncate">
                      {repo.name}
                    </p>
                    <p className="font-body text-textMuted text-xs mt-1 leading-relaxed line-clamp-2">
                      {repo.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-textMuted font-mono">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: repo.color }}
                    />
                    {repo.lang}
                  </div>
                  {repo.stars > 0 && (
                    <div className="flex items-center gap-1">
                      ★ {repo.stars}
                    </div>
                  )}
                  {repo.forks > 0 && (
                    <div className="flex items-center gap-1">
                      ⑂ {repo.forks}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.5)} className="text-center">
          <a
            href="https://github.com/Aditya-dev2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-accent/40 text-textMuted hover:text-accent text-sm transition-all font-body"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
