export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.15em]">
            About
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl font-medium leading-tight tracking-[-0.02em] md:text-4xl md:leading-tight">
            I&apos;m interested in understanding how things work — and then
            figuring out how to build them myself.
          </p>

          <div className="mt-10 space-y-6 text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
            <p>
              My path into software wasn&apos;t exactly straightforward. I
              started out in English Studies, but I kept gravitating toward
              technology, design, and building things on my own. Eventually, I
              taught myself enough to land my first job in software, working on
              an AI-powered language-learning product.
            </p>

            <p>
              That experience changed the direction I wanted to take. Working
              on a real product made me want to understand more than just the
              parts I could build myself — I wanted to understand the systems
              underneath them. So I went back to university and started
              studying Computer Science &amp; Engineering at Sogang University.
            </p>

            <p>
              Since then, I&apos;ve continued building across different areas
              of software: backend systems, AI and machine learning, computer
              vision, mobile development, accessibility, and creative coding.
              A lot of my projects start with something I don&apos;t know how
              to do yet, and figuring it out is part of what I enjoy.
            </p>

            <p>
              I&apos;m now looking for a software engineering internship where
              I can bring that same persistence and curiosity to a real team —
              contributing wherever I can, learning quickly, and taking on
              problems that are a little beyond what I already know.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}