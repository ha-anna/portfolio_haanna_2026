export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10 md:py-8">
      <nav className="flex justify-end">
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#projects"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Projects
          </a>

          <a
            href="#lately"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Lately
          </a>

          <a
            href="#about"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}