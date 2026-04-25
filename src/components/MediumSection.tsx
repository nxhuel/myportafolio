import { useMediumArticles } from "@/hooks/useMedium";
import { useEffect, useState } from "react";

const MediumSection = ({ username }: { username: string }) => {
  const { articles, loading, error } = useMediumArticles();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (articles.length > 0 && !selected) {
      setSelected(articles[0].id);
    }
  }, [articles, selected]);

  const activeArticle = articles.find((a) => a.id === selected);

  if (loading) return <p className="text-center py-12">Cargando...</p>;
  if (error) return <p className="text-center py-12">Error: {error}</p>;

  return (
    <section className="py-32" id="guides">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            ~/Guides
          </p>
          <h2 className="text-4xl font-bold">Guías</h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: lista */}
          <div className="space-y-3">
            {articles.map((article) => {
              const isActive = selected === article.id;

              return (
                <div
                  key={article.id}
                  onClick={() => setSelected(article.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-all border
                  ${
                    isActive
                      ? "bg-primary/10 border-primary"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <h3 className="font-medium line-clamp-2">{article.title}</h3>

                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(article.pubDate).toLocaleDateString("es-ES")}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: contenido */}
          <div className="lg:col-span-2">
            {activeArticle ? (
              <div className="p-6 border border-border rounded-xl animate-fade-up">
                {activeArticle.thumbnail && (
                  <img
                    src={activeArticle.thumbnail}
                    className="w-full h-56 object-fill rounded-lg mb-4"
                  />
                )}

                <h3 className="text-2xl font-bold mb-2">
                  {activeArticle.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {new Date(activeArticle.pubDate).toLocaleDateString("es-ES")}
                </p>

                <p className="text-muted-foreground mb-4">
                  {activeArticle.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activeArticle.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <a
                  href={activeArticle.canonicalUrl}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Leer en Medium →
                </a>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                Seleccioná un artículo
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumSection;
