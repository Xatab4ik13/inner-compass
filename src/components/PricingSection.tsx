import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, User, Clock } from "lucide-react";

const pricingPlans = [
  {
    icon: Monitor,
    title: "Онлайн консультация",
    price: "3 500",
    duration: "50 минут",
    description: "Консультация по видеосвязи из любой точки мира",
    features: ["Удобное время", "Без привязки к месту", "Конфиденциальность"],
  },
  {
    icon: User,
    title: "Личная терапия",
    price: "4 000",
    duration: "55 минут",
    description: "Очная встреча в комфортном пространстве кабинета",
    features: ["Личный контакт", "Глубокая проработка", "Безопасная среда"],
    highlighted: true,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-sand/30">
      <div className="container-narrow px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-3">
            Инвестиция в себя
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Стоимость услуг
          </h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-warm-brown text-primary-foreground shadow-elevated"
                  : "bg-card shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-deep-brown text-cream text-xs font-body rounded-full">
                  Рекомендуется
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlighted ? "bg-cream/20" : "bg-sand"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.highlighted ? "text-cream" : "text-warm-brown"}`} />
              </div>

              <h3 className={`font-display text-xl font-medium mb-2 ${
                plan.highlighted ? "text-cream" : "text-deep-brown"
              }`}>
                {plan.title}
              </h3>

              <p className={`font-body text-sm mb-6 ${
                plan.highlighted ? "text-cream/80" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className={`font-display text-4xl font-medium ${
                  plan.highlighted ? "text-cream" : "text-deep-brown"
                }`}>
                  {plan.price}
                </span>
                <span className={`font-body text-base ${
                  plan.highlighted ? "text-cream/80" : "text-muted-foreground"
                }`}>
                  ₽
                </span>
              </div>

              <div className={`flex items-center gap-2 mb-6 ${
                plan.highlighted ? "text-cream/80" : "text-muted-foreground"
              }`}>
                <Clock className="w-4 h-4" />
                <span className="font-body text-sm">{plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 font-body text-sm ${
                    plan.highlighted ? "text-cream/90" : "text-foreground/80"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      plan.highlighted ? "bg-cream" : "bg-warm-brown"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`block w-full py-3 rounded-lg font-body text-center transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-cream text-warm-brown hover:bg-sand"
                    : "bg-warm-brown text-primary-foreground hover:bg-deep-brown"
                }`}
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
