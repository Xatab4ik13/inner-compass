import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import freudImage from "@/assets/freud-portrait-new.jpg";

const methods = [
  {
    title: "Психоанализ",
    description: "Работа с глубинными конфликтами и бессознательными процессами, исследование ранних переживаний",
  },
  {
    title: "Гештальт-терапия",
    description: "Осознавание процесса «здесь-и-сейчас», работа с чувствами и незавершенными ситуациями",
  },
  {
    title: "КПТ",
    description: "Когнитивно-поведенческая терапия для коррекции дисфункциональных мыслей и паттернов",
  },
  {
    title: "АСТ",
    description: "Терапия принятия и ответственности для развития психологической гибкости",
  },
];

const MethodsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methods" className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Left side - Freud portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative sticky top-32">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={freudImage} 
                  alt="Зигмунд Фрейд - основатель психоанализа" 
                  className="w-full h-full object-cover grayscale-[25%] sepia-[8%]"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-brown/95 to-transparent p-8 md:p-10">
                <p className="font-display text-xl md:text-2xl text-cream/95 italic leading-relaxed">
                  "Бессознательное — это большой зал, в котором сознание — маленькая комнатка"
                </p>
                <p className="font-body text-sm text-cream/70 mt-4 tracking-wider uppercase">
                  — Зигмунд Фрейд
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block font-body text-sm tracking-[0.15em] text-warm-brown uppercase mb-4">
              Подход
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-deep-brown mb-8">
              Мои методы
            </h2>
            <div className="divider-elegant !mx-0 mb-12" />

            {/* Introduction */}
            <div className="mb-12">
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-5">
                Моя практика основана на <strong className="text-deep-brown">интегративном подходе</strong>. 
                Это означает, что я опираюсь на принципы и методы нескольких научно обоснованных направлений.
              </p>
              <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                Такая гибкость позволяет подбирать инструменты под уникальность вашего запроса — 
                будь то работа с актуальной тревогой или исследование более раннего опыта, 
                влияющего на текущую жизнь.
              </p>
            </div>

            {/* Methods list */}
            <div className="space-y-8 mb-12">
              {methods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-taupe/40 text-olive font-display text-xl group-hover:bg-sand/70 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-deep-brown mb-2">
                      {method.title}
                    </h3>
                    <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hypnotherapy note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-sand/70 p-8 border-l-2 border-olive"
            >
              <h4 className="font-display text-xl md:text-2xl text-deep-brown mb-3">
                Эриксоновский гипноз
              </h4>
              <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                При наличии обоснованных показаний и исключительно с вашего согласия, 
                я использую техники эриксоновского гипноза, позволяющие работать 
                на уровне неосознаваемых ресурсов психики.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;