/**
 * ブログ記事データ
 *
 * CMS連携方法（例）:
 *   - Contentful: contentfulClient.getEntries({ content_type: 'blogPost' })
 *   - microCMS:   fetch('https://YOUR_DOMAIN.microcms.io/api/v1/blog', { headers: {...} })
 *   - Notion API: fetch('https://api.notion.com/v1/databases/YOUR_DB/query', {...})
 *
 * 連携後はこのファイルのデータをAPIレスポンスに置き換えるだけでOK。
 * 各記事オブジェクトのスキーマ（slug, title, date, category, excerpt, content）を維持すること。
 */

export const blogPosts = [
  // サンプル記事（CMS連携後は削除またはAPIデータで上書き）
  // {
  //   slug: "first-post",
  //   title: "株式会社Gratitudeを設立しました",
  //   date: "2026-01-15",
  //   category: "お知らせ",
  //   excerpt: "この度、株式会社Gratitudeを設立いたしました。今後の事業展開についてご報告いたします。",
  //   content: "<p>本文をHTMLで記述します。</p>",
  // },
];
