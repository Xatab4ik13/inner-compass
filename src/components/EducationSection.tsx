import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import diploma1 from "@/assets/diploma-1.jpg";
import diploma2 from "@/assets/diploma-2.jpg";
import diploma3 from "@/assets/diploma-3.jpg";
import diploma4 from "@/assets/diploma-4.jpg";
import diploma5 from "@/assets/diploma-5.jpg";
import diploma6 from "@/assets/diploma-6.jpg";
import diploma7 from "@/assets/diploma-7.jpg";

const diplomas = [
  { id: 1, src: diploma1, alt: "Удостоверение о повышении квалификации - работа с детскими травмами" },
  { id: 2, src: diploma2, alt: "Удостоверение - Сексология в психологическом консультировании" },
  { id: 3, src: diploma3, alt: "Диплом - Клинический психолог" },
  { id: 4, src: diploma4, alt: "Диплом магистра с отличием" },
  { id: 5, src: diploma5, alt: "Диплом о профессиональной переподготовке - Клинический психолог" },
  { id: 6, src: diploma6, alt: "Диплом о профессиональной переподготовке - Практический психолог" },
  { id: 7, src: diploma7, alt: "Удостоверение о повышении квалификации" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedDiploma, setSelectedDiploma] = useState<typeof diplomas[0] | null>(null);

  return (
    <section id="education" className="section-padding bg-sand/30">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest text-taupe uppercase mb-3">
            Квалификация
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Образование
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Дипломы и сертификаты, подтверждающие профессиональную квалификацию
          </p>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {diplomas.map((diploma) => (
                <CarouselItem key={diploma.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div 
                    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer group"
                    onClick={() => setSelectedDiploma(diploma)}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={diploma.src}
                        alt={diploma.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-cream border-taupe/20 hover:bg-sand text-warm-brown" />
            <CarouselNext className="hidden md:flex -right-12 bg-cream border-taupe/20 hover:bg-sand text-warm-brown" />
          </Carousel>
          
          {/* Mobile navigation hint */}
          <p className="text-center mt-4 text-sm text-muted-foreground md:hidden">
            Листайте для просмотра всех дипломов
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedDiploma && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-deep-brown/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDiploma(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-cream hover:text-sand transition-colors"
            onClick={() => setSelectedDiploma(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedDiploma.src}
            alt={selectedDiploma.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default EducationSection;
