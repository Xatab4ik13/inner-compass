import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  {
    title: "Новые стратегии",
    description: "Расширить репертуар реакций и увидеть несколько стратегий в ситуациях, которые прежде казались тупиковыми."
  },
  {
    title: "Осознанные отношения",
    description: "Выстроить более осознанные и удовлетворительные отношения, основываясь на понимании своих границ и потребностей."
  },
  {
    title: "Ясность ценностей",
    description: "Прояснить свои ценности и научиться ставить цели, которые с ними согласуются."
  },
  {
    title: "Контакт с собой",
    description: "Усилить контакт с собой, чтобы ваши решения исходили из ваших собственных убеждений, а не из ожиданий окружающих."
  },
  {
    title: "Самоценность",
    description: "Снизить влияние критического внутреннего голоса и укрепить самоценность, освобождаясь от ограничивающих установок."
  },
  {
    title: "Присутствие в моменте",
    description: "Развить способность быть в контакте с настоящим моментом и находить в нем опору и ресурс."
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-sand/40">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm tracking-[0.15em] text-warm-brown uppercase mb-4">
            Что вы получите
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-deep-brown">
            Результаты нашей работы
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground/80 mt-6 max-w-2xl mx-auto">
            Наша совместная работа будет направлена на развитие новых навыков и внутренней позиции
          </p>
          <div className="divider-elegant mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card p-8 md:p-10 border border-border hover:border-taupe/50 transition-all duration-300 relative overflow-hidden">
                {/* Number decoration */}
                <div className="absolute top-4 right-4 font-display text-7xl text-taupe/15 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div className="w-10 h-px bg-olive mb-8 group-hover:w-14 transition-all duration-300" />
                  <h3 className="font-display text-2xl text-deep-brown mb-4">
                    {result.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;