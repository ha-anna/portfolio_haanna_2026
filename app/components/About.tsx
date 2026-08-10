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
            I started out studying English, but I&apos;ve always been curious about
            how things work and how people use them.
          </p>

          <div className="mt-10 space-y-6 text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
            <p>
              Eventually, I realized that computer science gave me a way to
              turn that curiosity into something tangible. Instead of just
              using technology, I wanted to understand what was happening
              underneath it and learn how to build things myself.
            </p>

            <p>
              So I went back to university and started studying Computer
              Science & Engineering. Since then, I&apos;ve been exploring
              everything from frontend development and accessibility to
              backend systems, AI, and the process of turning an idea into
              something people can actually use.
            </p>

            <p>
              I&apos;m especially drawn to small teams where I can move between
              different parts of a product, learn quickly, and take something
              from an idea to a working version.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-6 text-xs uppercase tracking-[0.1em] text-zinc-400">
            <span>Frontend</span>
            <span>Backend</span>
            <span>AI</span>
            <span>Accessibility</span>
            <span>Product</span>
          </div>
        </div>
      </div>
    </section>
  );
}