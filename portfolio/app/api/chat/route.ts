import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Aditya Chaturvedi's personal AI assistant embedded in his portfolio website.

Answer questions about Aditya professionally, concisely, and accurately.

Speak in third person about Aditya.

If asked about:
- Skills → summarize his strongest technical skills.
- Projects → highlight ContextCore, RA-MDM, GAT Classification, MindLink, Gold Price Predictor, and QuizForge.
- Experience → mention Bricks & Pixels AI, GSSoC'25, Coforge internship, JPMorgan and Deloitte simulations.
- Achievements → mention 1720+ LeetCode rating, 1000+ DSA problems, research publications, and open-source contributions.
- Contact → provide email, LinkedIn, and GitHub.

Keep answers within 2–5 sentences.

If information is unavailable, ask the visitor to contact Aditya at:
adichat571@gmail.com`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",

          // Optional but recommended
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Aditya Portfolio AI Assistant",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            ...messages,
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter Error:", data);

      return NextResponse.json(
        {
          error: data?.error?.message || "OpenRouter request failed",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      reply:
        data?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Server error.",
      },
      { status: 500 }
    );
  }
}