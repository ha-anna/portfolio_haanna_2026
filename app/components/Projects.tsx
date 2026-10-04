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
  visual: "conversation" | "knowledge" | "ascii" | "asl" | "cxr";
};

const projects: Project[] = [
  {
    number: "01",
    type: "CAPSTONE · COMPUTER VISION · IN PROGRESS",
    title: "VisionX CXR-CAD",
    description:
      "A multi-label chest X-ray classification capstone using the NIH ChestX-ray14 dataset. I’m exploring medical image classification, class imbalance, model evaluation, and explainability, with deployment as part of the project direction. This is an academic research prototype.",
    tech: ["Python", "PyTorch", "ChestX-ray14", "Computer Vision"],
    gradient: "from-cyan-200 via-blue-200 to-violet-300",
    visual: "cxr",
  },
  {
    number: "02",
    type: "REAL-TIME COMPUTER VISION · IN PROGRESS",
    title: "ASL MediaPipe Recognition",
    description:
      "A real-time ASL alphabet recognition project using MediaPipe hand landmarks and neural network classification. Following my image-based CNN project, I’m exploring a different representation: classifying hand landmarks rather than full images.",
    tech: ["JavaScript", "MediaPipe", "Machine Learning"],
    gradient: "from-lime-200 via-yellow-100 to-cyan-200",
    visual: "asl",
  },
  {
    number: "03",
    type: "C++ · REAL-TIME IMAGE PROCESSING",
    title: "ASCII Art Camera",
    description:
      "A native webcam application that transforms live video frames into ASCII art. Built in C++ with openFrameworks, it brings together image processing and rendering in a real-time visual application.",
    tech: ["C++", "openFrameworks", "Image Processing"],
    github: "https://github.com/ha-anna/ASCII_art_app",
    gradient: "from-violet-300 via-fuchsia-200 to-orange-200",
    visual: "ascii",
  },
  {
    number: "04",
    type: "DEEP LEARNING · UNIVERSITY PROJECT",
    title: "ASL Gesture Recognition",
    description:
      "A convolutional neural network for ASL alphabet recognition, built as a university deep learning project. It explores preparing image data and training a gesture classifier, and provides the foundation for my follow-up work with MediaPipe.",
    tech: ["Python", "PyTorch", "CNN", "Computer Vision"],
    github: "https://github.com/ha-anna/asl-alphabet-recognition",
    gradient: "from-pink-200 via-orange-200 to-violet-300",
    visual: "asl",
  },
  {
    number: "05",
    type: "PROFESSIONAL EXPERIENCE · AI EDUCATION",
    title: "AI Conversation Tutor",
    description:
      "Contributed to an AI-powered Korean language-learning product built around conversational practice. My work included backend infrastructure and application logic with Python and FastAPI, database services, and the systems supporting the learning experience.",
    tech: ["Python", "FastAPI", "Flutter", "Firebase", "AWS"],
    gradient: "from-cyan-200 via-violet-200 to-fuchsia-300",
    visual: "conversation",
  },
  {
    number: "06",
    type: "BACKEND · DOCUMENT RETRIEVAL",
    title: "Knowledge Agent",
    description:
      "A RAG backend built from scratch to explore document retrieval and backend architecture. The FastAPI service connects document extraction, chunking, embeddings, vector storage, and retrieval, with Ollama for local model inference.",
    tech: ["Python", "FastAPI", "ChromaDB", "Ollama", "Docker"],
    github: "https://github.com/ha-anna/knowledge-agent",
    gradient: "from-violet-300 via-fuchsia-200 to-orange-200",
    visual: "knowledge",
  },
];


export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex items-end justify-between sm:mb-20">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              01 — Selected work
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Software, vision,
              <br />
              <span className="text-zinc-400">and what’s underneath.</span>
            </h2>
          </div>

          <span className="hidden text-xs text-zinc-400 sm:block">
            {project.number} / {projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Main project area */}
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Project list + details */}
          <div className="order-2 min-w-0 lg:order-1">
            <div className="mb-8 border-t border-zinc-200 sm:mb-10">
              {projects.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(index)}
                    className="group flex w-full min-w-0 items-center justify-between border-b border-zinc-200 py-4 text-left sm:py-5"
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                      <span
                        className={`shrink-0 text-xs transition-colors ${isActive ? "text-zinc-900" : "text-zinc-400"
                          }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`truncate text-lg tracking-[-0.03em] transition-[color,transform] duration-300 sm:text-xl md:text-2xl ${isActive
                            ? "translate-x-1 font-medium text-zinc-900 sm:translate-x-2"
                            : "text-zinc-400 group-hover:text-zinc-700"
                          }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`ml-3 shrink-0 text-sm transition-[transform,opacity] duration-300 ${isActive
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
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">
                {project.type}
              </p>

              <h3 className="mb-4 text-2xl font-medium tracking-[-0.04em] sm:mb-5 sm:text-3xl md:text-4xl">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 px-2.5 py-1.5 text-[11px] text-zinc-500 sm:px-3 sm:text-xs"
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
                  className="mt-7 inline-block text-sm font-medium transition-colors hover:text-violet-600 sm:mt-9"
                >
                  View repository ↗
                </a>
              )}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 min-w-0 lg:order-2">
            <ProjectVisual project={project} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.gradient} p-3 shadow-2xl sm:rounded-[2.5rem] sm:p-5 md:p-8`}
    >
      {/* Soft glass layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      {/* Light */}
      <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-white/50 blur-2xl [transform:translateZ(0)] sm:h-80 sm:w-80 sm:blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-white/30 blur-2xl [transform:translateZ(0)] sm:h-80 sm:w-80 sm:blur-3xl" />

      <div className="relative flex h-full w-full min-w-0 items-center justify-center">
        {project.visual === "cxr" && <CxrVisual />}
        {project.visual === "conversation" && <ConversationVisual />}
        {project.visual === "knowledge" && <KnowledgeVisual />}
        {project.visual === "ascii" && <AsciiVisual />}
        {project.visual === "asl" && <AslVisual />}
      </div>

      <div className="absolute bottom-4 left-5 text-[10px] font-medium text-zinc-700/60 sm:bottom-6 sm:left-7 sm:text-xs">
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
    <div className="relative h-[78%] w-[88%] max-w-[500px] sm:w-[78%]">
      <div className="absolute right-0 top-0 max-w-[78%] rounded-[1.25rem] rounded-tr-md border border-white/70 bg-white/40 p-3 shadow-xl backdrop-blur-md sm:rounded-[1.5rem] sm:p-5 sm:backdrop-blur-xl">
        <div className="mb-1.5 text-[8px] uppercase tracking-[0.15em] text-violet-500 sm:mb-2 sm:text-[9px]">
          AI tutor
        </div>

        <p className="text-xs leading-5 text-zinc-800 sm:text-sm sm:leading-6">
          오늘은 무엇을 하고 싶어요?
        </p>
      </div>

      <div className="absolute bottom-10 left-0 max-w-[78%] rounded-[1.25rem] rounded-bl-md border border-white/70 bg-zinc-900/90 p-3 text-white shadow-xl sm:bottom-16 sm:rounded-[1.5rem] sm:p-5">
        <div className="mb-1.5 text-[8px] uppercase tracking-[0.15em] text-cyan-300 sm:mb-2 sm:text-[9px]">
          learner
        </div>

        <p className="text-xs leading-5 sm:text-sm sm:leading-6">
          카페에 가고 싶어요.
        </p>
      </div>

      {/* Connection */}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/20 text-lg backdrop-blur-md sm:h-24 sm:w-24 sm:text-2xl sm:backdrop-blur-xl">
        ✦
      </div>

      <div className="absolute bottom-0 right-0 text-[7px] uppercase tracking-[0.12em] text-zinc-700/50 sm:text-[9px] sm:tracking-[0.18em]">
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
    <div className="w-[88%] max-w-[500px] rotate-[2deg] rounded-[1.5rem] border border-white/60 bg-zinc-950/90 p-4 font-mono text-[9px] text-zinc-300 shadow-2xl sm:w-[78%] sm:rounded-[2rem] sm:p-6 sm:text-xs">
      <div className="mb-4 flex justify-between sm:mb-6">
        <span className="text-violet-300">knowledge-agent</span>
        <span className="text-zinc-600">RAG</span>
      </div>

      <div className="space-y-3 sm:space-y-4">
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

      <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 sm:mt-8 sm:p-4">
        <span className="text-[8px] text-zinc-600 sm:text-[10px]">
          retrieved context
        </span>

        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-violet-400/60 sm:mt-3 sm:h-2" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-cyan-300/40 sm:mt-2 sm:h-2" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-fuchsia-400/40 sm:mt-2 sm:h-2" />
      </div>
    </div>
  );
}

/* -------------------------------
   ASCII Camera
-------------------------------- */

const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⣀⣀⣤⠤⢤⣀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠒⢋⣉⣀⣠⣄⣀⣈⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣯⠴⠚⠉⠉⠀⠀⠀⠀⣤⠏⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⡇⠁⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡿⠿⢛⠁⠁⣸⠀⠀⠀⠀⠀⣤⣾⠵⠚⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢦⡀⠀⣠⠀⡇⢧⠀⠀⢀⣠⡾⡇⠀⠀⠀⠀⠀⣠⣴⠿⠋⠁⠀⠀⠀⠀⠘⣿⠀⣀⡠⠞⠛⠁⠂⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⣻⡦⣞⡿⣷⠸⣄⣡⢾⡿⠁⠀⠀⠀⣀⣴⠟⠋⠁⠀⠀⠀⠀⠐⠠⡤⣾⣙⣶⡶⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣂⡷⠰⣔⣾⣖⣾⡷⢿⣐⣀⣀⣤⢾⣋⠁⠀⠀⠀⣀⢀⣀⣀⣀⣀⠀⢀⢿⠑⠃
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
    <div className="group relative flex h-[260px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#171329] via-[#21183b] to-[#102c3d] sm:h-[80%] sm:rounded-[2rem] md:h-[70%]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(103,232,249,0.14),transparent_55%)]" />

      <pre
        className="
          relative z-10
          max-w-full
          select-none
          whitespace-pre
          font-mono
          text-[5px]
          leading-[5px]
          tracking-[-0.1px]
          text-[#d8f7ff]/90
          will-change-transform
          transition-[transform,color,filter]
          duration-1000
          ease-out
          group-hover:scale-[1.08]
          group-hover:text-white
          group-hover:drop-shadow-[0_0_24px_rgba(103,232,249,0.35)]
          sm:text-[7px]
          sm:leading-[7px]
          md:text-[10px]
          md:leading-[10px]
        "
      >
        {asciiArt}
      </pre>

      <div className="absolute bottom-4 left-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.12em] text-cyan-200 backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-3 sm:text-[9px] sm:tracking-[0.15em]">
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
    <div className="relative flex h-[72%] w-[85%] max-w-[430px] items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/20 shadow-2xl backdrop-blur-md sm:h-[80%] sm:w-[75%] sm:rounded-[2rem] sm:backdrop-blur-xl">
      <div className="text-center">
        <div className="text-[64px] leading-none sm:text-[80px] md:text-[100px]">
          🤟
        </div>

        <div className="mt-4 text-[9px] font-medium uppercase tracking-[0.15em] text-zinc-700/60 sm:mt-5 sm:text-xs sm:tracking-[0.2em]">
          gesture detected
        </div>

        <div className="mt-1.5 text-2xl font-medium tracking-[-0.05em] text-zinc-900 sm:mt-2 sm:text-3xl">
          ASL recognition
        </div>
      </div>

      <div className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full bg-[#d9ff4a] sm:left-6 sm:top-6 sm:h-3 sm:w-3" />

      <div className="absolute bottom-5 right-5 h-3 w-3 rounded-full bg-violet-500 sm:bottom-7 sm:right-7 sm:h-4 sm:w-4" />
    </div>
  );
}

function CxrVisual() {
  return (
    <div className="w-[88%] max-w-[480px] rounded-[1.5rem] border border-white/50 bg-zinc-950/90 p-5 text-white shadow-2xl sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">VisionX CXR-CAD</p>
      <h4 className="mt-5 text-2xl font-medium tracking-tight sm:text-4xl">Learning from<br />medical images.</h4>
      <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-xs text-zinc-300 sm:text-sm">
        <p>01 — Chest X-ray data</p>
        <p>02 — Multi-label classification</p>
        <p>03 — Evaluation &amp; explainability</p>
      </div>
      <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-400">Academic capstone · In progress</p>
    </div>
  );
}
