import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import psychologistImage from "@/assets/psychologist-2.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
            Обо мне
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Олег Петрович Пучков
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
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={psychologistImage}
                  alt="Олег Петрович - клинический психолог"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-taupe/30 -z-10" />
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
              <p className="font-body text-base text-foreground leading-relaxed">
                Я дипломированный магистр психологии, клинический психолог. 
                Моя работа — это помощь в преодолении сложных состояний и возвращении к внутренней целостности.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Я верю в терапию как в совместную работу, где важна каждая деталь вашего запроса. 
                Мы создаем пространство для безопасной и глубокой проработки, 
                цель которой — не просто облегчение, а устойчивые изменения.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Часто новый взгляд на ситуацию и первые шаги к решению 
                становятся ощутимы уже после нашей первой встречи.
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-display text-lg text-olive italic leading-relaxed">
                  "Для меня лучший показатель эффективности — ваши изменения и отклики о том, 
                  как трансформируется ваша жизнь."
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-sand/70 border border-taupe/20">
                <span className="font-body text-xs text-deep-brown tracking-wide">Магистр психологии</span>
              </div>
              <div className="px-4 py-2 bg-sand/70 border border-taupe/20">
                <span className="font-body text-xs text-deep-brown tracking-wide">Клинический психолог</span>
              </div>
              <div className="px-4 py-2 bg-sand/70 border border-taupe/20">
                <span className="font-body text-xs text-deep-brown tracking-wide">Гипнотерапевт</span>
              </div>
            </div>

            {/* B17 Link */}
            <motion.a
              href="https://www.b17.ru/id1104041/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-2 font-body text-sm text-olive hover:text-deep-brown transition-colors group"
            >
              <span className="border-b border-olive/30 group-hover:border-deep-brown/50 transition-colors">
                Профиль на B17.ru
              </span>
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;