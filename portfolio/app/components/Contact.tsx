"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as any,
  viewport: { once: true, margin: "-80px" },
});

const contactLinks = [
  {
    label: "Email",
    value: "adichat571@gmail.com",
    href: "mailto:adichat571@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "#4FFFB0",
  },
  {
    label: "LinkedIn",
    value: "aditya-chaturvedi05",
    href: "https://linkedin.com/in/aditya-chaturvedi05",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#38BDF8",
  },
  {
    label: "GitHub",
    value: "Aditya-dev2005",
    href: "https://github.com/Aditya-dev2005",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "#A78BFA",
  },
  {
    label: "Phone",
    value: "+91-8287053805",
    href: "tel:+918287053805",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.09 6.09l.97-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: "#4FFFB0",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(79,255,176,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="section-number block text-center mb-3">07 — Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5">
            Let&apos;s Build Something
          </h2>
          <p className="font-body text-textMuted text-base max-w-xl mx-auto leading-relaxed">
            I&apos;m actively looking for{" "}
            <span className="text-text font-medium">SDE internships and full-time roles</span> in backend,
            AI/ML, and full-stack. Open to research collaborations too.
            <br />
            <span className="text-accent">Reach out — I respond fast.</span>
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              {...fadeUp(0.1 + i * 0.07)}
              className="flex items-center gap-4 p-5 glow-border rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300 group hover-lift"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}30`,
                  color: link.color,
                }}
              >
                {link.icon}
              </div>
              <div>
                <p className="font-mono text-xs text-textMuted mb-0.5">{link.label}</p>
                <p className="font-body text-text text-sm font-medium group-hover:text-accent transition-colors">
                  {link.value}
                </p>
              </div>
              <svg
                className="ml-auto text-textMuted group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume download */}
        <motion.div {...fadeUp(0.35)} className="text-center mb-20">
          <a
            href="/api/resume"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(0.4)} className="border-t border-border/40 pt-8 text-center">
          <p className="font-body text-textMuted text-sm">
            Designed & built by{" "}
            <span className="text-accent font-medium">Aditya Chaturvedi</span>
            {" "}·{" "}
            <span className="font-mono text-xs">Next.js · TypeScript · Tailwind · Framer Motion</span>
          </p>
          <p className="font-mono text-xs text-textMuted/50 mt-2">
            © {new Date().getFullYear()} · JIIT Noida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
