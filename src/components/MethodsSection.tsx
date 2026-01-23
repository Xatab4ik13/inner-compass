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
        <div className="grid lg:grid-cols-12 gap-12 items-start">
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
                  className="w-full h-full object-cover grayscale-[30%] sepia-[10%]"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-brown/90 to-transparent p-6 md:p-8">
                <p className="font-display text-lg md:text-xl text-cream/90 italic leading-relaxed">
                  "Бессознательное — это большой зал, в котором сознание — маленькая комнатка"
                </p>
                <p className="font-body text-xs text-cream/60 mt-3 tracking-wider uppercase">
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
            <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
              Подход
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mb-6">
              Мои методы
            </h2>
            <div className="divider-elegant !mx-0 mb-10" />

            {/* Introduction */}
            <div className="mb-10">
              <p className="font-body text-base text-foreground leading-relaxed mb-4">
                Моя практика основана на <strong className="text-deep-brown">интегративном подходе</strong>. 
                Это означает, что я опираюсь на принципы и методы нескольких научно обоснованных направлений.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Такая гибкость позволяет подбирать инструменты под уникальность вашего запроса — 
                будь то работа с актуальной тревогой или исследование более раннего опыта, 
                влияющего на текущую жизнь.
              </p>
            </div>

            {/* Methods list */}
            <div className="space-y-6 mb-10">
              {methods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-taupe/30 text-olive font-display text-lg group-hover:bg-sand/50 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-deep-brown mb-1">
                      {method.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
              className="bg-sand/50 p-6 border-l-2 border-olive"
            >
              <h4 className="font-display text-lg text-deep-brown mb-2">
                Эриксоновский гипноз
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
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