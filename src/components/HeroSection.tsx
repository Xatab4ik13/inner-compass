import { motion } from "framer-motion";
import psychologistImage from "@/assets/psychologist-1.jpg";

const helpItems = [
  "Боль утраты или расставания становится слишком тяжелой",
  "Отношения с едой и телом запутаны, вес — поле внутренней борьбы",
  "Тревога и страх ограничивают вашу жизнь",
  "Тело подает сигналы, но врачи не находят причин",
  "Чувство одиночества становится постоянным спутником",
  "Тема близости вызывает напряжение или стыд",
  "Нужен глубинный доступ к ресурсам психики",
];

const HeroSection = () => {
  return (
    <section id="help" className="min-h-screen pt-24 md:pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Subtle decorative lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-deep-brown" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-deep-brown" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-deep-brown" />
      </div>

      <div className="container-wide px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={psychologistImage}
                  alt="Олег Петрович - психолог"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-taupe/40 -z-10" />
            </div>
            
            {/* Name card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-deep-brown font-semibold">
                Олег Петрович Пучков
              </p>
              <p className="font-body text-base text-warm-brown mt-2 tracking-wide">
                Клинический психолог • Гипнотерапевт
              </p>
            </motion.div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <span className="inline-block font-body text-sm tracking-[0.15em] text-warm-brown uppercase mb-6">
              Психологическая помощь
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-deep-brown leading-[1.1] mb-8">
              Путь к внутренней
              <span className="block italic text-olive mt-2">гармонии и целостности</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-foreground mb-12 max-w-xl leading-relaxed">
              Профессиональная психологическая помощь в преодолении сложных жизненных ситуаций. 
              Создаем пространство для безопасной и глубокой работы.
            </p>
            
            <div className="mb-12">
              <h2 className="font-display text-xl md:text-2xl text-deep-brown mb-6 flex items-center gap-4">
                <span className="w-10 h-px bg-olive" />
                Я помогаю, когда
              </h2>
              <ul className="space-y-4">
                {helpItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-start gap-4 font-body text-foreground"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-olive mt-2.5 shrink-0" />
                    <span className="text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-10 py-5 bg-deep-brown text-primary-foreground font-body text-base tracking-wide hover:bg-warm-brown transition-colors duration-300"
            >
              Записаться на консультацию
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;