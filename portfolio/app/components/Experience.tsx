"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  status: "active" | "upcoming" | "completed";
  logo: string;
  logoBg: string;
  color: string;
  bullets?: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: "Deloitte",
    role: "Technology Consulting Simulation",
    period: "May - June 2025",
    type: "Virtual Experience • Forage",
    status: "completed",
    logo: "/logos/deloitte.jpg",
    logoBg: "#111",
    color: "#A78BFA",
    bullets: [
      "Completed technology consulting simulation focusing on tech dashboards and enterprise data analysis.",
      "Developed analytical frameworks for enterprise-level data solutions.",
    ],
    tags: ["Data Analysis", "Dashboards", "Consulting"],
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "Jul – Oct 2025",
    type: "Open Source • Remote",
    status: "completed",
    logo: "/logos/gssoc.jpg",
    logoBg: "#fff",
    color: "#4FFFB0",
    bullets: [
      "Engineered security enhancements for Flutter authentication via OTP expiry and Twilio API integration, patching critical vulnerabilities and reducing unauthorized access by 40%.",
      "Redesigned ShopSmart profile UI using Material Design and Lottie animations, boosting user engagement by 25% and increasing average session duration by 15%.",
      "Merged 15+ pull requests across 10+ repositories, resolving performance bottlenecks and security vulnerabilities; changes reviewed and approved by project maintainers.",
    ],
    tags: ["Flutter", "Kotlin", "Twilio", "Firebase", "Material Design"],
  },
  {
    company: "JPMorgan Chase",
    role: "Software Engineering Simulation",
    period: "January - February 2026",
    type: "Virtual Experience • Forage",
    status: "completed",
    logo: "/logos/jpmorgan.jpg",
    logoBg: "#1a1f2e",
    color: "#38BDF8",
    bullets: [
      "Completed advanced software engineering simulation covering Kafka, Spring Boot, and REST API development.",
      "Built real-time data streaming pipelines and implemented financial dashboard visualizations.",
    ],
    tags: ["Kafka", "Spring Boot", "REST APIs", "Java"],
  },
  {
    company: "Coforge",
    role: "Software Engineering Intern",
    period: "July 2026 - May 2027",
    type: "Internship • Hybrid / On-site",
    status: "upcoming",
    logo: "/logos/coforge.webp",
    logoBg: "#fff",
    color: "#4FFFB0",
    bullets: undefined,
    tags: ["Software Engineering", "Hybrid", "Upcoming"],
  },
];

const statusConfig = {
  active: { label: "Active", color: "text-accent", bg: "bg-accent/10 border-accent/20" },
  completed: { label: "Completed", color: "text-textMuted", bg: "bg-surface border-border" },
  upcoming: { label: "Upcoming", color: "text-accentBlue", bg: "bg-accentBlue/10 border-accentBlue/20" },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <span className="section-number">02 — Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-border to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company} {...fadeUp(i * 0.1)}>
                <div className="sm:pl-16 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-7 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center -translate-x-1/2"
                    style={{ borderColor: exp.color, background: "#080B12" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                  </div>

                  <div className="glow-border rounded-2xl p-6 bg-card/30 hover:bg-card/50 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                          style={{ background: exp.logoBg, border: `1px solid ${exp.color}25` }}
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-1"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-text text-base sm:text-lg leading-tight">{exp.company}</h3>
                          <p className="text-textMuted text-sm font-body">{exp.role}</p>
                          <p className="text-textMuted text-xs font-mono mt-0.5">{exp.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="font-mono text-xs text-textMuted">{exp.period}</span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${statusConfig[exp.status].bg} ${statusConfig[exp.status].color}`}
                        >
                          {statusConfig[exp.status].label}
                        </span>
                      </div>
                    </div>

                    {exp.bullets ? (
                      <ul className="space-y-2.5 mb-5">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-sm text-textMuted font-body leading-relaxed">
                            <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-textMuted text-sm font-body italic mb-5">Details to be updated soon.</p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
