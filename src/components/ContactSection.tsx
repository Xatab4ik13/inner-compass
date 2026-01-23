import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim()) {
      toast.error("Пожалуйста, введите ваше имя");
      return;
    }
    
    if (!formData.phone.trim()) {
      toast.error("Пожалуйста, введите телефон или Telegram");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim() || undefined,
        },
      });

      if (error) {
        console.error("Error sending message:", error);
        toast.error("Ошибка при отправке. Попробуйте позже или свяжитесь напрямую.");
        return;
      }

      toast.success("Сообщение отправлено! Я свяжусь с вами в ближайшее время.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ошибка при отправке. Попробуйте позже или свяжитесь напрямую.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacts" className="section-padding bg-sand/30">
      <div className="container-narrow px-4 md:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">Связаться</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">Контакты</h2>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="font-display text-2xl text-deep-brown mb-6">Получить консультацию</h3>
            <p className="font-body text-sm text-muted-foreground mb-8">Свяжитесь со мной удобным способом, и мы договоримся о времени первой встречи.</p>
            <div className="space-y-4">
              <a href="tel:+79312173006" className="flex items-center gap-4 p-4 bg-card border border-border hover:border-taupe/40 transition-all group">
                <div className="w-10 h-10 bg-sand flex items-center justify-center group-hover:bg-olive transition-colors"><Phone className="w-4 h-4 text-olive group-hover:text-cream transition-colors" /></div>
                <div><p className="font-body text-xs text-muted-foreground">Телефон</p><p className="font-body text-sm text-foreground">+7 931 217-30-06</p></div>
              </a>
              <a href="https://t.me/Elephant_106_G" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card border border-border hover:border-taupe/40 transition-all group">
                <div className="w-10 h-10 bg-sand flex items-center justify-center group-hover:bg-olive transition-colors"><Send className="w-4 h-4 text-olive group-hover:text-cream transition-colors" /></div>
                <div><p className="font-body text-xs text-muted-foreground">Telegram</p><p className="font-body text-sm text-foreground">@Elephant_106_G</p></div>
              </a>
              <a href="mailto:pop_1@mail.ru" className="flex items-center gap-4 p-4 bg-card border border-border hover:border-taupe/40 transition-all group">
                <div className="w-10 h-10 bg-sand flex items-center justify-center group-hover:bg-olive transition-colors"><Mail className="w-4 h-4 text-olive group-hover:text-cream transition-colors" /></div>
                <div><p className="font-body text-xs text-muted-foreground">Email</p><p className="font-body text-sm text-foreground">pop_1@mail.ru</p></div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="bg-card p-8 border border-border">
              <h3 className="font-display text-xl text-deep-brown mb-6 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-olive" />Написать ✍️</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-xs text-muted-foreground mb-2 uppercase tracking-wide">Ваше имя</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-olive transition-colors" placeholder="Как к вам обращаться?" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-xs text-muted-foreground mb-2 uppercase tracking-wide">Телефон или Telegram</label>
                  <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-olive transition-colors" placeholder="+7 (___) ___-__-__ или @username" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-xs text-muted-foreground mb-2 uppercase tracking-wide">Сообщение</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-olive transition-colors resize-none" placeholder="О чём бы вы хотели поговорить?" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-deep-brown text-primary-foreground font-body text-sm tracking-wide hover:bg-warm-brown transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                  {isSubmitting ? "Отправляю..." : <><Send className="w-4 h-4" />Отправить сообщение</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;