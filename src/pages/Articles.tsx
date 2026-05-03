import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";

const SITE = "https://freud-pop.ru";

const Articles = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Статьи — Пучков Олег Петрович",
    url: `${SITE}/articles`,
    author: { "@type": "Person", name: "Пучков Олег Петрович" },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE}/articles/${a.slug}`,
      datePublished: a.dateISO,
      image: `${SITE}${a.cover}`,
      author: { "@type": "Person", name: "Пучков Олег Петрович" },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Статьи — Пучков Олег Петрович | Клинический психолог"
        description="Авторские статьи клинического психолога Пучкова Олега Петровича о психоанализе, неврозах, эдиповом комплексе, фетишизме и других темах глубинной психологии."
        canonical={`${SITE}/articles`}
        ogImage={`${SITE}${articles[0]?.cover ?? ""}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
              Публикации
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-deep-brown">
              Статьи
            </h1>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Размышления и заметки о психоанализе, бессознательном и человеческой природе
            </p>
            <div className="divider-elegant mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link to={`/articles/${article.slug}`} className="group block">
                  <div className="overflow-hidden bg-sand mb-5 shadow-soft group-hover:shadow-card transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.cover}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <span className="font-body text-xs tracking-[0.2em] text-taupe uppercase">
                    {article.date}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-deep-brown mt-2 mb-3 group-hover:text-warm-brown transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-xs tracking-wide uppercase text-deep-brown group-hover:gap-3 transition-all">
                    Читать <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-taupe hover:text-deep-brown transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> На главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
