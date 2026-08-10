export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.15em]">
            Contact
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Have something interesting in mind?
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500 md:text-lg">
            I&apos;m always interested in meeting people who are building things,
            solving interesting problems, or looking for someone curious enough
            to figure things out.
          </p>

          <a
            href="mailto:its.haanna@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 border-b border-zinc-900 pb-1 text-lg font-medium"
          >
            its.haanna@gmail.com

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <div className="mt-16 flex gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/ha-anna"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ha-anna/"
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