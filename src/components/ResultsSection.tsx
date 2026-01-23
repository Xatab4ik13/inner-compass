import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const results = [
  "Расширить репертуар реакций и увидеть несколько стратегий в ситуациях, которые прежде казались тупиковыми.",
  "Выстроить более осознанные и удовлетворительные отношения, основываясь на понимании своих границ и потребностей.",
  "Прояснить свои ценности и научиться ставить цели, которые с ними согласуются.",
  "Усилить контакт с собой, чтобы ваши решения и действия все больше исходили из ваших собственных убеждений, а не из ожиданий окружающих.",
  "Снизить влияние критического внутреннего голоса и укрепить самоценность, постепенно освобождаясь от ограничивающих установок.",
  "Развить способность быть в контакте с настоящим моментом и находить в нем опору и ресурс.",
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-cream">
      <div className="container-narrow px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-3">
            Что вы получите
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Результаты
          </h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
        >
          <p className="font-body text-lg text-foreground mb-8 text-center">
            Наша совместная работа будет направлена на развитие новых навыков и внутренней позиции. <strong className="text-warm-brown">Вы сможете:</strong>
          </p>

          <ul className="space-y-4">
            {results.map((result, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-warm-brown rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-body text-foreground/90 leading-relaxed">
                  {result}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
