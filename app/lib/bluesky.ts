// lib/bluesky.ts

const BLUESKY_HANDLE = "a36n.bsky.social";

type BlueskyPost = {
    uri: string;
    cid: string;
    author: {
        handle: string;
        displayName?: string;
        avatar?: string;
    };
    record: {
        text: string;
        createdAt: string;
    };
    embed?: {
        $type?: string;
        images?: Array<{
            thumb: string;
            fullsize: string;
            alt: string;
        }>;
    };
};

type AuthorFeedResponse = {
    feed: Array<{
        post: BlueskyPost;
    }>;
};

export async function getBlueskyPosts(limit = 3) {
    const params = new URLSearchParams({
        actor: BLUESKY_HANDLE,
        filter: "posts_no_replies",
        limit: String(limit),
    });

    const response = await fetch(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?${params}`,
        {
            next: {
                revalidate: 1800, // refresh every 30 minutes
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch Bluesky posts");
    }

    const data: AuthorFeedResponse = await response.json();

    return data.feed.map(({ post }) => ({
        id: post.uri,
        text: post.record.text,
        createdAt: post.record.createdAt,
        url: `https://bsky.app/profile/${post.author.handle}/post/${post.uri.split("/").pop()}`,
        author: post.author.displayName || post.author.handle,
        avatar: post.author.avatar,
        images: post.embed?.images || [],
    }));
}