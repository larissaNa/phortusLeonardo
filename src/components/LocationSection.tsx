import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

const feedbacks = [
  {
    name: "Daniel Cisne",
    text: "Bem localizado, aconchegante, profissionais altamente qualificados👏👏👏👏 recomendo…",
    stars: 5,
    avatar: "/img/icon.svg.png",
  },
  {
    name: "Yasmin Nogueira Maia",
    text: "Um lugar bem aconchegante. Além de ótimos profissionais que trabalham muito bem... Simplesmente amei o lugar.👏…",
    stars: 5,
    avatar: "/img/unnamed.png",
  },
];

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <img
              src="/img/escritorio.jpeg"
              alt="Escritório"
              className="w-full rounded-2xl shadow-elegant"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
              Nossa localização
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Venha nos visitar <span className="text-gradient-gold">pessoalmente</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Estamos localizados na Rua Leonidas Melo, 345, Centro, Piripiri,
              para recebê-lo em nosso escritório. Agende sua visita e descubra
              como podemos ajudar com suas necessidades legais.
            </p>

            {/* Feedbacks */}
            <div className="flex flex-col gap-5 mb-10">
              {feedbacks.map((fb) => (
                <div
                  key={fb.name}
                  className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border"
                >
                  <img
                    src={fb.avatar}
                    alt={fb.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span className="font-body text-sm font-semibold text-foreground">
                        {fb.name}
                      </span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: fb.stars }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {fb.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.app.goo.gl/yAqPC3RbxnCEKYxH9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3 rounded-lg font-body text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-gold"
            >
              <MapPin size={18} />
              Ver Localização
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
