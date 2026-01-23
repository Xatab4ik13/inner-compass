import { motion, useInView } from "framer-motion";
import { useRef, useState, memo } from "react";
import { X } from "lucide-react";
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
import diploma8 from "@/assets/diploma-8.jpg";
import diploma9 from "@/assets/diploma-9.jpg";
import diploma10 from "@/assets/diploma-10.jpg";

const diplomas = [
  { id: 1, src: diploma1, alt: "Удостоверение - Психокоррекционная работа с детскими травмами" },
  { id: 2, src: diploma2, alt: "Удостоверение - Сексология в психологическом консультировании" },
  { id: 3, src: diploma3, alt: "Диплом - Клинический психолог МИАП" },
  { id: 4, src: diploma4, alt: "Диплом магистра с отличием - ВЕИП" },
  { id: 5, src: diploma5, alt: "Диплом о профессиональной переподготовке - Клинический психолог" },
  { id: 6, src: diploma6, alt: "Диплом о профессиональной переподготовке - Практический психолог" },
  { id: 7, src: diploma7, alt: "Удостоверение - Сексология в психологическом консультировании" },
  { id: 8, src: diploma8, alt: "Удостоверение - КПТ при аддиктивном и суицидальном поведении" },
  { id: 9, src: diploma9, alt: "Удостоверение - Психологическая помощь при зависимостях" },
  { id: 10, src: diploma10, alt: "Удостоверение - Психосоматические расстройства" },
];

// Memoized diploma card for better performance
const DiplomaCard = memo(({ diploma, onClick }: { diploma: typeof diplomas[0]; onClick: () => void }) => (
  <div 
    className="cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative p-2 bg-gradient-to-br from-sand via-cream to-sand border border-taupe/30 shadow-soft hover:shadow-card transition-shadow duration-300">
      <div className="relative border border-taupe/20 p-1 bg-cream/50">
        <div className="aspect-[3/2] overflow-hidden bg-muted/20">
          <img
            src={diploma.src}
            alt={diploma.alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            style={{ imageOrientation: "none" }}
            className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-taupe/40" />
      <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-taupe/40" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-taupe/40" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-taupe/40" />
    </div>
  </div>
));

DiplomaCard.displayName = "DiplomaCard";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedDiploma, setSelectedDiploma] = useState<typeof diplomas[0] | null>(null);

  return (
    <section id="education" className="section-padding bg-cream">
      <div className="container-wide px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-xs tracking-[0.2em] text-taupe uppercase mb-3">
            Квалификация
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown">
            Образование
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Дипломы и сертификаты, подтверждающие профессиональную квалификацию
          </p>
          <div className="divider-elegant mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
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
                  <DiplomaCard 
                    diploma={diploma} 
                    onClick={() => setSelectedDiploma(diploma)} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-cream border-taupe/20 hover:bg-sand text-deep-brown rounded-none" />
            <CarouselNext className="hidden md:flex -right-12 bg-cream border-taupe/20 hover:bg-sand text-deep-brown rounded-none" />
          </Carousel>
          
          {/* Mobile navigation hint */}
          <p className="text-center mt-4 text-xs text-muted-foreground md:hidden tracking-wide">
            Листайте для просмотра всех документов
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedDiploma && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-deep-brown/95 z-50 flex items-center justify-center p-4"
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
            style={{ imageOrientation: "none" }}
            className="max-w-full max-h-[90vh] object-contain shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default EducationSection;