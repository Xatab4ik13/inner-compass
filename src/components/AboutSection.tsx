import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import psychologistImage from "@/assets/psychologist-2.jpg";
import freudImage from "@/assets/freud-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Freud portrait as decorative background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
        <img src={freudImage} alt="" className="w-80 h-auto" />
      </div>

      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-3">
            Обо мне
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Олег Петрович
          </h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card max-w-md mx-auto lg:mx-0">
              <img
                src={psychologistImage}
                alt="Олег Петрович - клинический психолог"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            {/* Decorative quote */}
            <div className="absolute -bottom-4 -right-4 md:right-0 bg-cream p-4 md:p-6 rounded-xl shadow-soft max-w-xs">
              <p className="font-display text-sm md:text-base italic text-warm-brown">
                "Мой ориентир — ваша обретаемая уверенность и гармония"
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <p className="font-body text-lg text-foreground leading-relaxed">
                Меня зовут <strong className="text-deep-brown">Олег Петрович</strong>, я дипломированный магистр психологии, клинический психолог. Моя работа — это помощь в преодолении сложных состояний и возвращении к внутренней целостности.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Я верю в терапию как в совместную работу, где важна каждая деталь вашего запроса. Мы создаем пространство для безопасной и глубокой проработки, цель которой — не просто облегчение, а устойчивые изменения.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Часто новый взгляд на ситуацию и первые шаги к решению становятся ощутимы уже после нашей первой встречи.
              </p>
              <div className="pt-4">
                <p className="font-display text-lg text-warm-brown italic">
                  Для меня лучший показатель эффективности — ваши изменения и отклики о том, как трансформируется ваша жизнь.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-sand rounded-lg">
                <span className="font-body text-sm text-warm-brown">Магистр психологии</span>
              </div>
              <div className="px-4 py-2 bg-sand rounded-lg">
                <span className="font-body text-sm text-warm-brown">Клинический психолог</span>
              </div>
              <div className="px-4 py-2 bg-sand rounded-lg">
                <span className="font-body text-sm text-warm-brown">Гипнотерапевт</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
