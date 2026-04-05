import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  // CMS連携時はここをAPI fetchに置き換える
  // const [posts, setPosts] = useState([]);
  // useEffect(() => { fetch('/api/posts').then(...).then(setPosts); }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Blog</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-amber-400">ブログ</span>・お知らせ
      </h1>

      {blogPosts.length === 0 ? (
        <div className="border border-amber-400/20 rounded-2xl p-12 text-center text-white/50">
          記事を準備中です。しばらくお待ちください。
        </div>
      ) : (
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block border border-amber-400/20 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-amber-400/70">{post.date}</span>
                {post.category && (
                  <span className="text-xs border border-amber-400/40 text-amber-400 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold group-hover:text-amber-400 transition">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-white/60 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
