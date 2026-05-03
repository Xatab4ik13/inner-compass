import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";

const SITE = "https://freud-pop.ru";

const renderBlock = (block: string, idx: number) => {
  if (block.startsWith("## ")) {
    return (
      <h2
        key={idx}
        className="font-display text-2xl md:text-3xl font-medium text-deep-brown mt-12 mb-5"
      >
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }

  const lines = block.split("\n").filter(Boolean);
  const isUl = lines.every((l) => l.startsWith("- "));
  const isOl = lines.every((l) => /^\d+\.\s/.test(l));

  if (isUl) {
    return (
      <ul key={idx} className="list-disc pl-6 space-y-2 my-5 font-body text-foreground/90">
        {lines.map((l, i) => (
          <li key={i}>{l.replace(/^-\s+/, "")}</li>
        ))}
      </ul>
    );
  }
  if (isOl) {
    return (
      <ol key={idx} className="list-decimal pl-6 space-y-2 my-5 font-body text-foreground/90">
        {lines.map((l, i) => (
          <li key={i}>{l.replace(/^\d+\.\s+/, "")}</li>
        ))}
      </ol>
    );
  }

  if (block.startsWith("_") && block.endsWith("_")) {
    return (
      <p
        key={idx}
        className="font-body italic text-taupe text-sm tracking-wide my-6 text-center"
      >
        {block.slice(1, -1)}
      </p>
    );
  }

  return (
    <p
      key={idx}
      className="font-body text-foreground/90 leading-[1.85] my-5 text-base md:text-lg"
    >
      {block}
    </p>
  );
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/articles" replace />;

  const url = `${SITE}/articles/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE}${article.cover}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: { "@type": "Person", name: "Пучков Олег Петрович" },
    publisher: {
      "@type": "Person",
      name: "Пучков Олег Петрович",
      url: SITE,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} — Пучков Олег Петрович`}
        description={article.description}
        canonical={url}
        ogImage={`${SITE}${article.cover}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-taupe hover:text-deep-brown transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Все статьи
            </Link>

            <span className="font-body text-xs tracking-[0.2em] text-taupe uppercase">
              {article.date}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mt-3 mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="overflow-hidden bg-sand shadow-card mb-10">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="prose-article">
              {article.content.map((block, idx) => renderBlock(block, idx))}
            </div>

            <div className="mt-16 pt-8 border-t border-border text-center">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-taupe hover:text-deep-brown transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Все статьи
              </Link>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
