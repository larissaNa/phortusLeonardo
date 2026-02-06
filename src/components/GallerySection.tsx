import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  "/img/img4.jpeg", "/img/img9.jpeg", "/img/img8.jpeg", "/img/img7.jpeg",
  "/img/img6.jpeg", "/img/img5.jpeg", "/img/img13.jpeg", "/img/img12.jpeg",
  "/img/img14.jpeg", "/img/img15.jpeg", "/img/img16.jpeg", "/img/img17.jpeg",
  "/img/img18.jpeg", "/img/img19.jpeg", "/img/img21.jpeg", "/img/img22.jpeg",
  "/img/img23.jpeg", "/img/img25.jpeg", "/img/img26.jpeg",
  "/img/img27.jpeg", "/img/img28.jpeg", "/img/img29.jpeg", "/img/img30.jpeg",
  "/img/img31.jpeg", "/img/img32.jpeg", "/img/img33.jpeg", "/img/img34.jpeg",
  "/img/img35.jpeg", "/img/img36.jpeg", "/img/img37.jpeg",
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex + dir + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nosso espaço
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Galeria de <span className="text-gradient-gold">Fotos</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="mx-auto max-w-5xl px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((src, i) => (
                <CarouselItem key={src + i} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.02 }}
                    className="p-1"
                  >
                    <div 
                      className="aspect-square overflow-hidden rounded-lg group cursor-pointer relative"
                      onClick={() => setSelectedIndex(i)}
                    >
                      <img
                        src={src}
                        alt={`Galeria ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selectedIndex]}
              alt=""
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
