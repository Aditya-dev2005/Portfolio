"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  skills: { name: string; level?: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "< />",
    color: "#4FFFB0",
    borderColor: "rgba(79,255,176,0.2)",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 92 },
      { name: "Java", level: 75 },
      { name: "Kotlin", level: 78 },
      { name: "Dart (Flutter)", level: 72 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: "⚙️",
    color: "#38BDF8",
    borderColor: "rgba(56,189,248,0.2)",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Redis", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Docker", level: 72 },
      { name: "Spring Boot", level: 65 },
    ],
  },
  {
    title: "AI / ML Research",
    icon: "🧬",
    color: "#A78BFA",
    borderColor: "rgba(167,139,250,0.2)",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "RAG / LangChain", level: 85 },
      { name: "Diffusion Models", level: 82 },
      { name: "Graph Neural Networks", level: 80 },
      { name: "FAISS / Vector DBs", level: 85 },
      { name: "LLMs / Gemini API", level: 78 },
    ],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    color: "#4FFFB0",
    borderColor: "rgba(79,255,176,0.2)",
    skills: [
      { name: "Android SDK", level: 78 },
      { name: "Jetpack Compose", level: 75 },
      { name: "Flutter", level: 72 },
      { name: "Room DB", level: 70 },
      { name: "Retrofit", level: 74 },
      { name: "Material Design", level: 80 },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: "🏗️",
    color: "#38BDF8",
    borderColor: "rgba(56,189,248,0.2)",
    skills: [
      { name: "Data Structures", level: 95 },
      { name: "Algorithms", level: 92 },
      { name: "OOP", level: 90 },
      { name: "OS", level: 82 },
      { name: "DBMS", level: 85 },
      { name: "Distributed Systems", level: 78 },
    ],
  },
  {
    title: "Tools & Dev",
    icon: "🛠️",
    color: "#A78BFA",
    borderColor: "rgba(167,139,250,0.2)",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Docker", level: 72 },
      { name: "Streamlit", level: 82 },
      { name: "Figma", level: 70 },
      { name: "MySQL", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">04 — Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Technical Stack
          </h2>
          <p className="text-textMuted font-body text-sm mt-2">
            Technologies I use to build, research, and ship.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeUp(i * 0.08)}
              className="glow-border rounded-2xl p-6 bg-card/30 hover:bg-card/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-mono font-bold"
                  style={{
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.borderColor}`,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-text text-sm">{cat.title}</h3>
              </div>

              {/* Skills with bars */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-body text-textMuted text-xs">{skill.name}</span>
                      {skill.level && (
                        <span className="font-mono text-[10px]" style={{ color: cat.color }}>
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="h-0.5 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency legend */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex flex-wrap items-center gap-6 justify-center"
        >
          {[
            { range: "90–100%", label: "Expert", color: "#4FFFB0" },
            { range: "75–89%", label: "Proficient", color: "#38BDF8" },
            { range: "60–74%", label: "Familiar", color: "#A78BFA" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-6 h-0.5 rounded" style={{ background: item.color }} />
              <span className="font-mono text-xs text-textMuted">
                {item.range} — {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
