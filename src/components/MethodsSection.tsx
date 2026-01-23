import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Lightbulb, Sparkles } from "lucide-react";
import freudImage from "@/assets/freud-portrait.jpg";

const methods = [
  {
    icon: Brain,
    title: "Психоанализ",
    description: "Работа с глубинными конфликтами и бессознательными процессами",
  },
  {
    icon: Heart,
    title: "Гештальт-терапия",
    description: "Осознавание процесса «здесь-и-сейчас», работа с чувствами",
  },
  {
    icon: Lightbulb,
    title: "КПТ",
    description: "Коррекция дисфункциональных мыслей и поведенческих паттернов",
  },
  {
    icon: Sparkles,
    title: "АСТ",
    description: "Развитие психологической гибкости и принятия",
  },
];

const MethodsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methods" className="section-padding bg-background relative">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-3">
            Подход
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Мои методы
          </h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Methods Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {methods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-sand rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-warm-brown" />
                </div>
                <h3 className="font-display text-lg font-medium text-deep-brown mb-2">
                  {method.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Description with Freud Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-sand/50 rounded-2xl p-8 relative">
              {/* Freud portrait */}
              <div className="absolute -top-8 -right-4 md:right-4 w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden shadow-card opacity-80">
                <img src={freudImage} alt="Зигмунд Фрейд" className="w-full h-full object-cover" />
              </div>

              <h3 className="font-display text-xl text-deep-brown mb-4">
                Интегративный подход
              </h3>
              <div className="space-y-4">
                <p className="font-body text-foreground leading-relaxed">
                  Моя практика основана на интегративном подходе. Это означает, что я опираюсь на принципы и методы нескольких научно обоснованных направлений: психоанализа, гештальт-терапии, КПТ и АСТ.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Также в моём арсенале, при наличии обоснованных показаний и исключительно с вашего согласия, есть техники <strong className="text-warm-brown">эриксоновского гипноза</strong>, позволяющие работать на уровне неосознаваемых ресурсов.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Такая гибкость позволяет подбирать инструменты под уникальность вашего запроса — будь то работа с актуальной тревогой или исследование более раннего опыта, влияющего на текущую жизнь.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
