import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlog } from "../lib/microcms";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlog(slug)
      .then((data) => {
        setPost(data);
        if (data?.title) document.title = `${data.title} | 株式会社Gratitude`;
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-white/60">読み込み中...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-white/60">記事が見つかりませんでした。</p>
        <Link to="/blog" className="mt-4 inline-block text-amber-400 hover:underline">
          ← ブログ一覧へ
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/blog" className="text-sm text-amber-400/70 hover:text-amber-400 transition">
        ← ブログ一覧へ
      </Link>

      <div className="flex items-center gap-3 mt-6 mb-4">
        <span className="text-xs text-white/50">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
        </span>
        {post.category && (
          <span className="text-xs border border-amber-400/40 text-amber-400 px-2 py-0.5 rounded-full">
            {typeof post.category === "string" ? post.category : post.category.name}
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-8">{post.title}</h1>

      <div className="prose prose-invert max-w-none text-white/80 leading-8 space-y-4">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          post.excerpt && <p className="text-white/60">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}
