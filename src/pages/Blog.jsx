import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../lib/microcms";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then((data) => setPosts(data.contents ?? []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Blog</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-amber-400">ブログ</span>・お知らせ
      </h1>

      {loading ? (
        <div className="text-center text-white/50 py-12">読み込み中...</div>
      ) : posts.length === 0 ? (
        <div className="border border-amber-400/20 rounded-2xl p-12 text-center text-white/50">
          記事を準備中です。しばらくお待ちください。
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block border border-amber-400/20 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-amber-400/70">
                  {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                </span>
                {post.category && (
                  <span className="text-xs border border-amber-400/40 text-amber-400 px-2 py-0.5 rounded-full">
                    {typeof post.category === "string" ? post.category : post.category.name}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold group-hover:text-amber-400 transition">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-2 text-sm text-white/60 line-clamp-2">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
