import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const ArticlesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const preview = articles.slice(0, 2);

  return (
    <section id="articles" className="section-padding bg-sand/30">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
            Публикации
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Статьи
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Размышления о психоанализе и человеческой природе
          </p>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {preview.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
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
                <h3 className="font-display text-xl md:text-2xl font-medium text-deep-brown mb-2 group-hover:text-warm-brown transition-colors">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-8 py-3 bg-deep-brown text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-warm-brown transition-colors"
          >
            Все статьи <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesPreview;
