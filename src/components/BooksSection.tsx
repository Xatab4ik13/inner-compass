import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const books = [
  { id: 1, title: "Ничья судьба", url: "https://www.litres.ru/72726073/", coverUrl: bookCover1 },
  { id: 2, title: "The Слон", url: "https://www.litres.ru/71094397/", coverUrl: bookCover2 },
  { id: 3, title: "Парадокс гениальности", url: "https://www.litres.ru/book/oleg-pet/paradoks-genialnosti-72485728/", coverUrl: bookCover3 },
  { id: 4, title: "Сага о пилоте Делириум", url: "https://www.litres.ru/book/oleg-pet/saga-o-pilote-delirium-70823029/", coverUrl: "https://cv7.litres.ru/pub/c/cover/70823029.webp" },
  { id: 5, title: "Время жить и время выбирать", url: "https://www.litres.ru/book/oleg-pet/vremya-zhit-i-vremya-vybirat-72721630/", coverUrl: "https://cv7.litres.ru/pub/c/cover/72721630.webp" },
];

const BooksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className="section-padding bg-background">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">Публикации</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">Читайте мои книги</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-sm">Авторские книги доступны на ЛитРес</p>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {books.map((book, index) => (
            <motion.a key={book.id} href={book.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="group block">
              <div className="bg-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-[2/3] overflow-hidden bg-sand">
                  <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-3 flex items-center justify-center gap-2 bg-sand/50">
                  <span className="font-body text-xs text-deep-brown">ЛитРес</span>
                  <ExternalLink className="w-3 h-3 text-olive" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BooksSection;