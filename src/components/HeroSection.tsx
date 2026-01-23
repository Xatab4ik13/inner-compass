import { motion } from "framer-motion";
import psychologistImage from "@/assets/psychologist-1.jpg";

const helpItems = [
  "Боль утраты или расставания становится слишком тяжелой, и кажется, что вы остались наедине со своим горем.",
  "Отношения с едой и телом запутаны, а вес становится полем внутренней борьбы.",
  "Тревога и страх (выходить в люди, оказаться в центре внимания, специфические ситуации) ограничивают вашу жизнь.",
  "Тело подает сигналы (боли, необъяснимые симптомы), но врачи не находят физических причин.",
  "Чувство одиночества и потерянности становится постоянным спутником, особенно в моменты возрастных переходов.",
  "Тема близости и сексуальности вызывает напряжение, стыд или становится источником проблем в паре.",
  "Вам нужен глубинный доступ к ресурсам психики для проработки сложных травм через безопасное состояние гипнотерапии.",
];

const HeroSection = () => {
  return (
    <section id="help" className="min-h-screen pt-24 md:pt-32 pb-16 bg-gradient-to-b from-cream to-background">
      <div className="container-wide px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-4">
              Психологическая помощь
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-deep-brown leading-tight mb-6">
              Путь к внутренней
              <span className="block italic text-warm-brown">гармонии</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
              Профессиональная психологическая помощь в преодолении сложных жизненных ситуаций
            </p>
            
            <div className="mb-8">
              <h2 className="font-display text-xl text-deep-brown mb-4">
                Я помогаю, когда:
              </h2>
              <ul className="space-y-3">
                {helpItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3 font-body text-foreground/80"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm-brown mt-2.5 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-warm-brown text-primary-foreground font-body text-base rounded-lg hover:bg-deep-brown transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              Получить консультацию
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={psychologistImage}
                alt="Олег Петрович - психолог"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sand rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
