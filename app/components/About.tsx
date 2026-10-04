export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:px-10 md:py-40"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            03 — About
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl font-medium leading-tight tracking-[-0.02em] md:text-4xl md:leading-tight">
            From building products to understanding the systems behind them.
          </p>

          <div className="mt-10 space-y-6 text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
            <p>
              I started in English Studies and found my way into software by building things. That became professional work across web, mobile, backend, and AI-powered educational products — including a Korean conversation-learning platform.
            </p>

            <p>
              Working on real products made me want a deeper technical foundation. I&apos;m now studying Computer Science &amp; Engineering at Sogang University in Seoul, with a current focus on deep learning, applied mathematics, and computer vision.
            </p>

            <p>
              My current projects include VisionX, a chest X-ray classification capstone, and real-time ASL recognition with MediaPipe. Alongside them, I build in C++ and Python and explore how models and application code fit together. I want to make software that is useful, accessible, and well-engineered.
            </p>

            <p>
              I also help organize weekly freeCodeCamp Seoul meetups and take part in local tech events. I&apos;m looking for software engineering internship opportunities, particularly on teams working with machine learning or computer vision, where I can contribute my development experience while growing my technical depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}