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
    eyebrow: "01 — MAKE",
    title: "I like making things.",
    description:
      "Ideas are more interesting to me once I can turn them into something real.",
    symbol: "✦",
    gradient: "from-violet-300 via-fuchsia-200 to-orange-200",
  },
  {
    id: 1,
    eyebrow: "02 — EXPLORE",
    title: "I follow curiosity.",
    description:
      "Lately that has taken me through AI, accessibility, hardware, and everything in between.",
    symbol: "◌",
    gradient: "from-cyan-200 via-blue-200 to-violet-300",
  },
  {
    id: 2,
    eyebrow: "03 — BUILD",
    title: "Now I build with code.",
    description:
      "Computer science gave me a way to turn all those questions into things I can actually build.",
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
    <section className="relative min-h-screen overflow-hidden px-6 py-6 md:px-10 md:py-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[130px]" />

        <div className="absolute right-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-violet-400/20 blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-300/15 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-3rem)] flex-col md:min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="text-sm">
          <span className="font-medium">HA ANNA </span>
          <span className="text-cyan-200"> ✦ </span>

          <span className="text-zinc-500"> SEOUL, KR</span>
        </div>

        {/* Main */}
        <div className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Software Developer · Product Builder · Curious person
            </p>

            <h1 className="max-w-3xl text-[4rem] font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[7rem]">
              I make
              <br />
              things I
              <br />
              <span className="text-zinc-400">wonder about.</span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-7 text-zinc-500 md:text-lg">
              A collection of things I&apos;ve built, learned, broken, and made
              work.
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
                      transition-all duration-700 ease-out
                      ${isFront ? "cursor-pointer" : "pointer-events-none"}
                      ${
                        position === 0
                          ? "z-30 rotate-[-3deg] scale-100 opacity-100"
                          : position === 1
                            ? "z-20 translate-x-8 translate-y-5 rotate-[7deg] scale-[0.94] opacity-80"
                            : "z-10 translate-x-16 translate-y-10 rotate-[14deg] scale-[0.88] opacity-50"
                      }
                    `}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 rounded-[2rem] bg-white/20 backdrop-blur-[2px]" />

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
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === active
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
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
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