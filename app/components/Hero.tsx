"use client";

import { useState } from "react";

type Card = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  symbol: string;
  gradient: string;
};

const cards: Card[] = [
  {
    id: 0,
    eyebrow: "01 — EXPERIENCE",
    title: "I build software people can use.",
    description:
      "My professional background spans web, mobile, backend, and AI-powered educational products. I bring that experience to the projects I build today.",
    symbol: "✦",
    gradient: "from-violet-300 via-fuchsia-200 to-orange-200",
  },
  {
    id: 1,
    eyebrow: "02 — CURRENT FOCUS",
    title: "I explore how machines see.",
    description:
      "Through chest X-ray classification and ASL recognition, I’m learning how to prepare data, train models, and evaluate what they can actually do.",
    symbol: "◌",
    gradient: "from-cyan-200 via-blue-200 to-violet-300",
  },
  {
    id: 2,
    eyebrow: "03 — APPROACH",
    title: "I care about how things work.",
    description:
      "From a real-time image processing app in C++ to a document retrieval backend, I like understanding the pieces that make a system useful and well-engineered.",
    symbol: "◇",
    gradient: "from-lime-200 via-yellow-100 to-cyan-200",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const nextCard = () => {
    setActive((current) => (current + 1) % cards.length);
  };

  return (
    <section id="home" className="relative min-h-[calc(100dvh-7rem)] overflow-hidden px-6 py-6 md:px-10 md:py-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[70px] [transform:translateZ(0)]" />

        <div className="hidden md:block absolute right-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-violet-400/20 blur-[70px] [transform:translateZ(0)]" />

        <div className="hidden md:block absolute bottom-[-200px] left-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-300/15 blur-[70px] [transform:translateZ(0)]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100dvh-10rem)] flex-col md:min-h-[calc(100dvh-9.5rem)]">
        {/* Main */}
        <div className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              <span className="block sm:inline">Software Engineer</span>
              <span className="hidden sm:inline"> · </span>

              <span className="block sm:inline">Computer Vision &amp; ML</span>
              <span className="hidden sm:inline"> · </span>

              <span className="block sm:inline">Sogang University · Seoul</span>
            </p>

            <h1 className="max-w-3xl text-[4rem] font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              I build.
              <br />
              I learn.
              <br />
              <span className="text-zinc-400">I look deeper.</span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-7 text-zinc-500 md:text-lg">
              I’m a software engineer and Computer Science &amp; Engineering student, building on professional product experience to explore computer vision and machine learning.
            </p>
          </div>

          {/* Card deck */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[480px] w-[330px] sm:h-[520px] sm:w-[360px]">
              {cards.map((card, index) => {
                const position = (index - active + cards.length) % cards.length;

                const isFront = position === 0;

                return (
                  <button
                    key={card.id}
                    onClick={isFront ? nextCard : undefined}
                    disabled={!isFront}
                    className={`
                      absolute inset-0 w-full rounded-[2rem]
                      border border-white/70
                      bg-gradient-to-br ${card.gradient}
                      p-7 text-left
                      shadow-2xl
                      will-change-transform
                      transition-[transform,opacity] duration-700 ease-out
                      ${isFront ? "cursor-pointer" : "pointer-events-none"}
                      ${position === 0
                        ? "z-30 rotate-[-3deg] scale-100 opacity-100"
                        : position === 1
                          ? "z-20 translate-x-8 translate-y-5 rotate-[7deg] scale-[0.94] opacity-80"
                          : "z-10 translate-x-16 translate-y-10 rotate-[14deg] scale-[0.88] opacity-50"
                      }
                    `}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 rounded-[2rem] bg-white/20 md:backdrop-blur-[2px]" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-between">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-700/70">
                          {card.eyebrow}
                        </span>

                        <span className="text-xl text-zinc-700/70">
                          {card.symbol}
                        </span>
                      </div>

                      {/* Middle */}
                      <div>
                        <h2 className="max-w-[280px] text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-900 sm:text-5xl">
                          {card.title}
                        </h2>

                        <p className="mt-6 max-w-[270px] text-sm leading-6 text-zinc-700/80">
                          {card.description}
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="flex items-end justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700/60">
                          Ha Anna
                        </span>

                        {isFront && (
                          <span className="text-xs text-zinc-700/70">
                            click to shuffle ↗
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deck indicator */}
            <div className="mt-8 flex items-center gap-3">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => setActive(index)}
                  aria-label={`Show card ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === active
                      ? "w-8 bg-zinc-900"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between border-t border-zinc-200/80 pt-4 text-xs text-zinc-500">
          <span>Scroll to explore ↓</span>

          <div className="hidden gap-5 sm:flex">
            <a
              href="https://github.com/ha-anna"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ha-anna"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}