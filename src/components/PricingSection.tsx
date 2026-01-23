import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, User, Clock } from "lucide-react";

const pricingPlans = [
  { icon: Monitor, title: "Онлайн консультация", price: "3 500", duration: "50 минут", description: "Консультация по видеосвязи из любой точки мира", features: ["Удобное время", "Без привязки к месту", "Конфиденциальность"] },
  { icon: User, title: "Личная терапия", price: "4 000", duration: "55 минут", description: "Очная встреча в комфортном пространстве кабинета", features: ["Личный контакт", "Глубокая проработка", "Безопасная среда"], highlighted: true },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-cream">
      <div className="container-narrow px-4 md:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">Инвестиция в себя</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">Стоимость услуг</h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }} className={`relative p-8 ${plan.highlighted ? "bg-deep-brown text-primary-foreground" : "bg-card border border-border"}`}>
              {plan.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-olive text-cream text-xs font-body tracking-wide">Рекомендуется</div>}
              <div className={`w-12 h-12 flex items-center justify-center mb-6 ${plan.highlighted ? "bg-cream/10" : "bg-sand"}`}>
                <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-cream" : "text-olive"}`} />
              </div>
              <h3 className={`font-display text-xl font-medium mb-2 ${plan.highlighted ? "text-cream" : "text-deep-brown"}`}>{plan.title}</h3>
              <p className={`font-body text-sm mb-6 ${plan.highlighted ? "text-cream/70" : "text-muted-foreground"}`}>{plan.description}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`font-display text-4xl font-medium ${plan.highlighted ? "text-cream" : "text-deep-brown"}`}>{plan.price}</span>
                <span className={`font-body text-base ${plan.highlighted ? "text-cream/70" : "text-muted-foreground"}`}>₽</span>
              </div>
              <div className={`flex items-center gap-2 mb-6 ${plan.highlighted ? "text-cream/70" : "text-muted-foreground"}`}>
                <Clock className="w-4 h-4" /><span className="font-body text-sm">{plan.duration}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 font-body text-sm ${plan.highlighted ? "text-cream/80" : "text-foreground/70"}`}>
                    <div className={`w-1 h-1 rounded-full ${plan.highlighted ? "bg-cream" : "bg-olive"}`} />{feature}
                  </li>
                ))}
              </ul>
              <a href="#contacts" className={`block w-full py-3 font-body text-sm text-center transition-colors ${plan.highlighted ? "bg-cream text-deep-brown hover:bg-sand" : "bg-deep-brown text-primary-foreground hover:bg-warm-brown"}`}>Записаться</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;