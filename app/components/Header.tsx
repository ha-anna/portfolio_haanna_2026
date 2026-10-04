const links = [
  { href: "#projects", label: "Projects" },
  { href: "#lately", label: "Lately" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-background/90 px-6 py-4 backdrop-blur-md md:px-10 md:py-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <a href="#home" aria-label="Ha Anna — back to top" className="w-fit shrink-0 whitespace-nowrap rounded-sm text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
          <span className="font-medium">HA ANNA</span>
          <span aria-hidden="true" className="mx-2 text-cyan-400">✦</span>
          <span className="text-zinc-500">SEOUL, KR</span>
        </a>

        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm md:gap-x-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-sm py-2 text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
