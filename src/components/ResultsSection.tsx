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
    <section id="results" className="section-padding bg-sand/30">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
            Что вы получите
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Результаты нашей работы
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
            Наша совместная работа будет направлена на развитие новых навыков и внутренней позиции
          </p>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card p-8 border border-border/50 hover:border-taupe/40 transition-all duration-300 relative overflow-hidden">
                {/* Number decoration */}
                <div className="absolute top-4 right-4 font-display text-6xl text-taupe/10 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div className="w-8 h-px bg-olive mb-6 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-display text-xl text-deep-brown mb-3">
                    {result.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
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