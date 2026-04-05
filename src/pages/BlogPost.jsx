import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  // CMS連携時はslugを使ってAPIからデータを取得する
  // const [post, setPost] = useState(null);
  // useEffect(() => { fetch(`/api/posts/${slug}`).then(...).then(setPost); }, [slug]);

  const post = blogPosts.find((p) => p.slug === slug);

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
        <span className="text-xs text-white/50">{post.date}</span>
        {post.category && (
          <span className="text-xs border border-amber-400/40 text-amber-400 px-2 py-0.5 rounded-full">
            {post.category}
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-8">{post.title}</h1>

      {/* CMS連携時はpost.contentをHTMLとして描画（dangerouslySetInnerHTML or MDX） */}
      <div className="prose prose-invert max-w-none text-white/80 leading-8 space-y-4">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <p className="text-white/60">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}
