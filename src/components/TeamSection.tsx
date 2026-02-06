import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Phortus Leonardo",
    specialty: "Especialista em Direito Previdenciário, Família e Civil",
    oab: "OAB/PI 13438",
    email: "porthusleonardo@gmail.com",
    whatsapp: "https://wa.me/message/EVAOQ4YPTD7CK1",
    instagram: "https://www.instagram.com/phortus_leonardo?igsh=MWhpZnJ5aW5zZWdwYQ==",
    image: "/img/phortus.jpg",
  },
  {
    name: "Dr. Lara Andrade",
    specialty: "Especialista em Família e Sucessões, Imobiliário, Consumidor, Criminal, pós graduada em Processo Civil.",
    oab: "OAB/PI 22303",
    email: "advglaraandrade@gmail.com",
    whatsapp: "https://api.whatsapp.com/message/SF67LKKMPBGFC1?autoload=1&app_absent=0",
    instagram: "https://www.instagram.com/laraandradeadv?igsh=N2t2d21ibGo1cjdo",
    image: "/img/lara.jpeg",
  },
  {
    name: "Dr. Janaína Oliveira",
    specialty: "Especialista em Direito Previdenciário, pós graduanda em Família, Consumidor, Bancário e Cível.",
    oab: "OAB/PI 20477",
    email: "janaina.advogaprev@gmail.com",
    whatsapp: "https://wa.me/message/IY76P2RPRDT7J1",
    instagram: "https://www.instagram.com/janaina.oliveira.adv?igsh=c2lmZjVjbjk2aXI1",
    image: "/img/janaina.png",
  },
  {
    name: "Dr. Danilo Andrade",
    specialty: "Especialista em Processo Civil, Trabalhista e Regularização de Imóveis.",
    oab: "OAB/PI 9535",
    email: "daniloandradefrota31@gmail.com",
    whatsapp: "https://wa.me/qr/DCG47DUKKS6UD1",
    instagram: "https://www.instagram.com/daniloandradefrota?igsh=MTNyM25mdjdxdjB0bw==&utm_source=qr",
    image: "/img/danilo.jpg",
  },
  {
    name: "Dr. Thiago Oliveira",
    specialty: "Especialista em Direito Trabalhista e Previdenciário.",
    oab: "OAB/PI 23961",
    email: "othiagooliveiraadv@gmail.com",
    whatsapp: "https://wa.me/qr/SZZYY326Y4IYK1",
    instagram: "https://www.instagram.com/thiago.felipeh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    image: "/img/thiago.jpeg",
  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Profissionais qualificados
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça nossa <span className="text-gradient-gold">Equipe</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Nossa equipe é formada por profissionais altamente qualificados e
            comprometidos em fornecer soluções jurídicas eficazes. Nossos
            advogados são especializados em diversas áreas, visando atender às
            variadas necessidades de nossos clientes e garantir um serviço
            jurídico de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.oab}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shadow-elegant hover:shadow-gold"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="inline-block text-xs tracking-wider uppercase text-primary font-body font-semibold mb-3">
                  {member.oab}
                </span>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.specialty}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors block mb-5"
                >
                  {member.email}
                </a>

                <div className="flex gap-3">
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground py-2.5 rounded-lg font-body text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-lg font-body text-xs font-semibold tracking-wide hover:bg-secondary/80 transition-colors border border-border"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
