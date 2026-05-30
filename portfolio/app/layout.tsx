import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Chaturvedi — Software Engineer & AI/ML Research",
  description:
    "Portfolio of Aditya Chaturvedi — Backend Engineer, AI/ML Researcher, Full Stack Developer. Building scalable AI systems, intelligent backend infrastructure, and research-driven applications.",
  keywords: ["Aditya Chaturvedi", "Software Engineer", "AI ML", "Full Stack Developer", "RAG", "PyTorch", "FastAPI", "JIIT"],
  authors: [{ name: "Aditya Chaturvedi" }],
  openGraph: {
    title: "Aditya Chaturvedi — Software Engineer & AI/ML Research",
    description: "Building scalable AI systems, intelligent backend infrastructure, and research-driven applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
