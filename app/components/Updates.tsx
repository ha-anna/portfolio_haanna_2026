"use client";

import { useState } from "react";

type Update = {
  id: string;
  date: string;
  category: "BUILDING" | "LEARNING" | "THINKING";
  title: string;
  description: string;
  tags: string[];
  details?: {
    label: string;
    items: {
      text: string;
      status: "done" | "current" | "next";
    }[];
  };
};

const updates: Update[] = [
  {
    id: "knowledge-agent",
    date: "11 AUG 2026",
    category: "BUILDING",
    title: "Making a knowledge agent actually useful.",
    description:
      "The PDF → chunks → embeddings → vector search pipeline is working. Right now I'm wiring up the LLM layer and figuring out what makes a RAG system feel good rather than just technically correct.",
    tags: ["FastAPI", "ChromaDB", "Ollama", "Docker"],
    details: {
      label: "Current progress",
      items: [
        { text: "PDF processing", status: "done" },
        { text: "Document chunking", status: "done" },
        { text: "Embeddings + vector search", status: "done" },
        { text: "LLM integration", status: "current" },
        { text: "Conversation memory", status: "next" },
      ],
    },
  },
  {
    id: "algorithms",
    date: "08 AUG 2026",
    category: "LEARNING",
    title: "Getting less scared of algorithms.",
    description:
      "I've been spending a lot more time with data structures lately. Currently working through sliding windows, stacks, queues, and the strange moment when a problem suddenly becomes obvious after staring at it for an hour.",
    tags: ["C++", "Algorithms", "NeetCode 150"],
    details: {
      label: "Working through",
      items: [
        { text: "Arrays & hashing", status: "done" },
        { text: "Two pointers", status: "done" },
        { text: "Sliding window", status: "done" },
        { text: "Stack & queue", status: "current" },
        { text: "Trees & graphs", status: "next" },
      ],
    },
  },
  {
    id: "portfolio",
    date: "05 AUG 2026",
    category: "BUILDING",
    title: "Reworking this portfolio.",
    description:
      "Trying to make this site feel more like me and less like developer portfolio #847. I'm especially interested in making it feel alive without turning it into a blog I have to constantly maintain.",
    tags: ["Next.js", "React", "Design"],
  },
];

export default function Updates() {
  const [expanded, setExpanded] = useState<string | null>(
    updates[0]?.id ?? null
  );

  return (
    <section
      id="updates"
      className="border-t border-zinc-200 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              02 — Lately
            </p>

            <h2 className="max-w-xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              What&apos;s happening.
            </h2>
          </div>

          <div className="max-w-xs text-sm leading-6 text-zinc-400 md:text-right">
            I don&apos;t really blog or post progress updates elsewhere.
            So here&apos;s a little snapshot of what I&apos;m working on.
          </div>
        </div>

        {/* Changelog */}
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          {updates.map((update, index) => {
            const isExpanded = expanded === update.id;

            return (
              <article
                key={update.id}
                className={`relative ${
                  index !== updates.length - 1
                    ? "border-b border-zinc-200"
                    : ""
                }`}
              >
                {/* Ambient glow for expanded item */}
                {isExpanded && (
                  <>
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl" />
                  </>
                )}

                <button
                  onClick={() =>
                    setExpanded(isExpanded ? null : update.id)
                  }
                  className="group relative z-10 w-full px-6 py-7 text-left transition-colors duration-300 hover:bg-zinc-50/60 md:px-10 md:py-8"
                >
                  <div className="grid gap-5 md:grid-cols-[110px_1fr_auto] md:items-start md:gap-8">
                    {/* Date */}
                    <div className="pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                      {update.date}
                    </div>

                    {/* Main */}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            update.category === "BUILDING"
                              ? "bg-cyan-400"
                              : update.category === "LEARNING"
                                ? "bg-violet-400"
                                : "bg-fuchsia-400"
                          }`}
                        />

                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                          {update.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-medium tracking-[-0.025em] text-zinc-800 md:text-2xl">
                        {update.title}
                      </h3>

                      <p
                        className={`mt-3 max-w-2xl text-sm leading-6 text-zinc-500 md:text-base md:leading-7 ${
                          isExpanded ? "" : "line-clamp-2"
                        }`}
                      >
                        {update.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {update.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-zinc-500 backdrop-blur"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-sm text-zinc-400 transition-all duration-300 group-hover:border-zinc-300 group-hover:text-zinc-700 ${
                        isExpanded
                          ? "rotate-45 bg-zinc-50 text-zinc-700"
                          : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Expanded detail */}
                <div
                  className={`relative z-10 grid transition-all duration-500 ease-out ${
                    isExpanded && update.details
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {update.details && (
                      <div className="px-6 pb-8 md:ml-[110px] md:px-10 md:pb-10 md:pr-24">
                        <div className="rounded-2xl border border-zinc-200 bg-white/50 p-5 backdrop-blur">
                          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                            {update.details.label}
                          </p>

                          <div className="space-y-3">
                            {update.details.items.map((item) => (
                              <div
                                key={item.text}
                                className="flex items-center gap-3 text-sm"
                              >
                                <span
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                                    item.status === "done"
                                      ? "bg-zinc-800 text-white"
                                      : item.status === "current"
                                        ? "bg-gradient-to-br from-cyan-200 to-violet-200 text-zinc-700"
                                        : "border border-zinc-200 bg-white text-zinc-300"
                                  }`}
                                >
                                  {item.status === "done"
                                    ? "✓"
                                    : item.status === "current"
                                      ? "→"
                                      : ""}
                                </span>

                                <span
                                  className={
                                    item.status === "next"
                                      ? "text-zinc-400"
                                      : "text-zinc-600"
                                  }
                                >
                                  {item.text}
                                </span>

                                {item.status === "current" && (
                                  <span className="ml-auto text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                                    now
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between px-2 text-[10px] uppercase tracking-[0.15em] text-zinc-400">
          <span>Updated occasionally</span>
          <span className="hidden sm:block">
            No newsletter. No posting schedule. Just things I&apos;m doing. ↗
          </span>
        </div>
      </div>
    </section>
  );
}