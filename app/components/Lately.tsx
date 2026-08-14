import { getBlueskyPosts } from "../lib/bluesky";

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    })
        .format(new Date(date))
        .toUpperCase();
}

export default async function Lately() {
    const posts = await getBlueskyPosts(5);

    return (
        <section id="lately" className="px-6 pb-16 md:px-10">
            <div>

                <div className="grid gap-12 md:grid-cols-[1fr_2fr] pb-24">
                    <div>
                        <span className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                            02 — Little updates
                        </span>
                    </div>

                    <div>
                        <h2 className="text-5xl font-medium tracking-tight md:text-7xl">
                            lately
                        </h2>

                        <p className="mt-5 max-w-md text-base leading-relaxed opacity-50">
                            A little window into what I&apos;ve been making,
                            learning, and thinking about.
                        </p>
                    </div>
                </div>

                {/* Posts */}
                <div className="md:ml-[33.333%] max-w-3xl border-t border-current/10">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative grid gap-5 border-b border-current/10 py-8 transition-all duration-300 md:grid-cols-[180px_1fr_auto] md:gap-8 md:py-10"
                        >
                            {/* Date */}
                            <div className="pt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                                {formatDate(post.createdAt)}
                            </div>

                            {/* Post */}
                            <div className="max-w-3xl">
                                <p className="whitespace-pre-wrap text-lg leading-[1.65] tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                                    {post.text}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-full border border-current/10 text-sm text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-current/30 group-hover:text-current">
                                ↗
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}