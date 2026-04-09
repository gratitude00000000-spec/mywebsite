import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    document.title = "フォトギャラリー | 株式会社Gratitude";
  }, []);
  const photos = [
    { src: "/IMG_3648.png", alt: "ギャラリー写真" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Gallery</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-amber-400">フォト</span>ギャラリー
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-amber-400/20">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
