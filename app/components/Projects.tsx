"use client";

import { useState } from "react";

type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    number: "01",
    type: "PROFESSIONAL EXPERIENCE · AI",
    title: "AI Conversation Tutor",
    description:
      "Worked on an AI-powered Korean language-learning product designed around conversational practice. I contributed to building the product experience and turning AI interactions into something learners could actually use.",
    tech: ["AI", "Frontend", "Education", "Product"],
    gradient: "from-cyan-200 via-violet-200 to-fuchsia-300",
  },
  {
    number: "02",
    type: "AI · BACKEND",
    title: "Knowledge Agent",
    description:
      "A production-inspired RAG backend built from scratch. Documents are processed, chunked, embedded, stored in a vector database, and retrieved through a FastAPI service.",
    tech: ["Python", "FastAPI", "ChromaDB", "Ollama", "Docker"],
    github: "https://github.com/ha-anna/knowledge-agent",
    gradient: "from-violet-300 via-fuchsia-200 to-orange-200",
  },
  {
    number: "03",
    type: "CREATIVE CODING · C++",
    title: "ASCII Art Camera",
    description:
      "A real-time experiment that transforms webcam input into ASCII art using C++ and openFrameworks.",
    tech: ["C++", "openFrameworks"],
    github: "https://github.com/ha-anna/ASCII_art_app",
    gradient: "from-lime-200 via-yellow-100 to-cyan-200",
  },
  {
    number: "04",
    type: "COMPUTER VISION · ML",
    title: "ASL Recognition",
    description:
      "A convolutional neural network trained to recognize American Sign Language alphabet gestures from images.",
    tech: ["Python", "PyTorch", "CNN"],
    github: "https://github.com/ha-anna/asl-alphabet-recognition",
    gradient: "from-pink-200 via-orange-200 to-violet-300",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              01 — Selected work
            </p>

            <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Things I&apos;ve
              <br />
              <span className="text-zinc-400">made & worked on.</span>
            </h2>
          </div>

          <span className="hidden text-xs text-zinc-400 md:block">
            {project.number} / {projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Main project area */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Project list + details */}
          <div className="order-2 lg:order-1">
            <div className="mb-10 border-t border-zinc-200">
              {projects.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center justify-between border-b border-zinc-200 py-5 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`text-xs transition-colors ${
                          isActive ? "text-zinc-900" : "text-zinc-400"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`text-xl tracking-[-0.03em] transition-all duration-300 md:text-2xl ${
                          isActive
                            ? "translate-x-2 font-medium text-zinc-900"
                            : "text-zinc-400 group-hover:text-zinc-700"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`text-sm transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                    >
                      ↗
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Details */}
            <div className="max-w-md">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                {project.type}
              </p>

              <h3 className="mb-5 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                {project.title}
              </h3>

              <p className="text-base leading-7 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-block text-sm font-medium transition-colors hover:text-violet-600"
                >
                  View repository ↗
                </a>
              )}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <ProjectVisual project={project} index={active} />
          </div>
        </div>

        {/* Currently building */}
        <div className="mt-32 border-t border-zinc-200 pt-8 md:mt-48">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                Currently building
              </p>

              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                Stash
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-6 text-zinc-500">
              An iOS app for content creators to organize, tag, and reuse
              B-roll footage. Currently in development.
            </p>

            <span className="shrink-0 text-xs text-zinc-400">
              SwiftUI · SwiftData · iOS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${project.gradient} p-5 shadow-2xl transition-all duration-700 md:p-8`}
    >
      {/* Soft glass layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      {/* Light */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

      <div className="relative flex h-full items-center justify-center">
        {index === 0 && <ConversationVisual />}

        {index === 1 && <KnowledgeVisual />}

        {index === 2 && <AsciiVisual />}

        {index === 3 && <AslVisual />}
      </div>

      <div className="absolute bottom-6 left-7 text-xs font-medium text-zinc-700/60">
        {project.number}
      </div>
    </div>
  );
}

/* -------------------------------
   Professional experience
-------------------------------- */

function ConversationVisual() {
  return (
    <div className="relative h-[78%] w-[78%] max-w-[500px]">
      {/* AI message */}
      <div className="absolute right-0 top-0 max-w-[75%] rounded-[1.5rem] rounded-tr-md border border-white/70 bg-white/40 p-5 shadow-xl backdrop-blur-xl">
        <div className="mb-2 text-[9px] uppercase tracking-[0.15em] text-violet-500">
          AI tutor
        </div>

        <p className="text-sm leading-6 text-zinc-800">
          오늘은 무엇을 하고 싶어요?
        </p>
      </div>

      {/* User message */}
      <div className="absolute bottom-16 left-0 max-w-[75%] rounded-[1.5rem] rounded-bl-md border border-white/70 bg-zinc-900/90 p-5 text-white shadow-xl">
        <div className="mb-2 text-[9px] uppercase tracking-[0.15em] text-cyan-300">
          learner
        </div>

        <p className="text-sm leading-6">
          카페에 가고 싶어요.
        </p>
      </div>

      {/* Connection */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/20 backdrop-blur-xl">
        <div className="flex h-full items-center justify-center text-2xl">
          ✦
        </div>
      </div>

      <div className="absolute bottom-0 right-0 text-[9px] uppercase tracking-[0.18em] text-zinc-700/50">
        conversation · practice · feedback
      </div>
    </div>
  );
}

/* -------------------------------
   Knowledge Agent
-------------------------------- */

function KnowledgeVisual() {
  return (
    <div className="w-[78%] max-w-[500px] rotate-[2deg] rounded-[2rem] border border-white/60 bg-zinc-950/90 p-6 font-mono text-xs text-zinc-300 shadow-2xl">
      <div className="mb-6 flex justify-between">
        <span className="text-violet-300">knowledge-agent</span>
        <span className="text-zinc-600">RAG</span>
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-zinc-600">01</span>{" "}
          <span className="text-cyan-300">POST</span> /documents
        </div>

        <div>
          <span className="text-zinc-600">02</span>{" "}
          <span className="text-violet-300">chunk</span>(document)
        </div>

        <div>
          <span className="text-zinc-600">03</span>{" "}
          <span className="text-fuchsia-300">embed</span>(chunks)
        </div>

        <div>
          <span className="text-zinc-600">04</span>{" "}
          <span className="text-cyan-300">search</span>(query)
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
        <span className="text-[10px] text-zinc-600">
          retrieved context
        </span>

        <div className="mt-3 h-2 w-3/4 rounded-full bg-violet-400/60" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-cyan-300/40" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-fuchsia-400/40" />
      </div>
    </div>
  );
}

/* -------------------------------
   ASCII Camera
-------------------------------- */

const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⣀⣀⣤⠤⢤⣀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠒⢋⣉⣀⣠⣄⣀⣈⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣯⠴⠚⠉⠉⠀⠀⠀⠀⣤⠏⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⡇⠁⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡿⠿⢛⠁⠁⣸⠀⠀⠀⠀⠀⣤⣾⠵⠚⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢦⡀⠀⣠⠀⡇⢧⠀⠀⢀⣠⡾⡇⠀⠀⠀⠀⠀⣠⣴⠿⠋⠁⠀⠀⠀⠀⠘⣿⠀⣀⡠⠞⠛⠁⠂⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⣻⡦⣞⡿⣷⠸⣄⣡⢾⡿⠁⠀⠀⠀⣀⣴⠟⠋⠁⠀⠀⠀⠀⠐⠠⡤⣾⣙⣶⡶⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣂⡷⠰⣔⣾⣖⣾⡷⢿⣐⣀⣀⣤⢾⣋⠁⠀⠀⠀⣀⢀⣀⣀⣀⣀⠀⢀⢿⠑⠃
⠀⠀⠀⠀⠀⠀⠠⡦⠴⠴⠤⠦⠤⠤⠤⠤⠤⠴⠶⢾⣽⣙⠒⢺⣿⣿⣿⣿⢾⠶⣧⡼⢏⠑⠚⠋⠉⠉⡉⡉⠉⠉⠹⠈⠁⠉⠀⠨⢾⡂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠂⠐⠀⠀⠀⠈⣇⡿⢯⢻⣟⣇⣷⣞⡛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣆⠀⠀⠀⠀⢠⡷⡛⣛⣼⣿⠟⠙⣧⠅⡄⠀⠀⠀⠀⠀⠀⠰⡆⠀⠀⠀⠀⢠⣾⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⢶⠏⠉⠀⠀⠀⠀⠀⠿⢠⣴⡟⡗⡾⡒⠖⠉⠏⠁⠀⠀⠀⠀⣀⢀⣠⣧⣀⣀⠀⠀⠀⠚
⠀⠀⠀⠀⠀⠀⠀⠀⣠⢴⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⣠⣷⢿⠋⠁⣿⡏⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⢭⠉
⠀⠀⠀⠀⠀⢀⡴⢏⡵⠛⠀⠀⠀⠀⠀⠀⠀⣀⣴⠞⠛⠀⠀⠀⠀⢿⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⢿⠘⠀⠆
⠀⠀⠀⣀⣼⠛⣲⡏⠁⠀⠀⠀⠀⠀⠀⢀⣠⡾⠋⠉⠀⠀⠀⠀⠀⠀⢾⡅
⠀⠀⡴⠟⠀⢰⡯⠄⠀⠀⠀⠀⣠⢴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠆
⠀⡾⠁⠁⠀⠘⠧⠤⢤⣤⠶⠏⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡃
⠘⣇⠂⢀⣀⣀⠤⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠇
⠀⠈⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢼⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛
`;

function AsciiVisual() {
  return (
    <div className="group relative mx-auto flex h-[380px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#171329] via-[#21183b] to-[#102c3d]">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(103,232,249,0.14),transparent_55%)]" />

      <pre
        className="
          relative z-10
          select-none
          whitespace-pre
          font-mono
          text-[10px]
          leading-[10px]
          text-[#d8f7ff]/90
          transition-all duration-1000 ease-out
          group-hover:scale-[1.08]
          group-hover:text-white
          group-hover:drop-shadow-[0_0_24px_rgba(103,232,249,0.35)]
          sm:text-[10px]
          sm:leading-[10px]
        "
      >
        {asciiArt}
      </pre>

      <div className="absolute bottom-5 left-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-cyan-200 backdrop-blur-md">
        live camera → ASCII
      </div>
    </div>
  );
}

/* -------------------------------
   ASL Recognition
-------------------------------- */

function AslVisual() {
  return (
    <div className="relative flex h-[80%] w-[75%] max-w-[430px] items-center justify-center rounded-[2rem] border border-white/60 bg-white/20 shadow-2xl backdrop-blur-xl">
      <div className="text-center">
        <div className="text-[100px] leading-none">🤟</div>

        <div className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-700/60">
          gesture detected
        </div>

        <div className="mt-2 text-3xl font-medium tracking-[-0.05em] text-zinc-900">
          ASL → A
        </div>
      </div>

      <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-[#d9ff4a]" />

      <div className="absolute bottom-7 right-7 h-4 w-4 rounded-full bg-violet-500" />
    </div>
  );
}