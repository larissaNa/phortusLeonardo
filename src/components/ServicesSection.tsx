import { motion } from "framer-motion";
import {
  Shield, Heart, Briefcase, Home, Scale, Car, FileText,
  CreditCard, Users, Landmark, AlertTriangle, Building,
  Gavel, BookOpen, ScrollText, Key, UserCheck, Archive, FileCheck, HandCoins
} from "lucide-react";

const services = [
  { name: "Auxílios", icon: HandCoins },
  { name: "Aposentadoria", icon: Shield },
  { name: "Divórcios", icon: Heart },
  { name: "Direito Trabalhista", icon: Briefcase },
  { name: "Pensões", icon: Users },
  { name: "Direito Imobiliário", icon: Home },
  { name: "Direito Tributário", icon: Landmark },
  { name: "DPVAT", icon: Car },
  { name: "Revisão Alimentício", icon: FileText },
  { name: "União Estável", icon: UserCheck },
  { name: "Fraude Pix", icon: AlertTriangle },
  { name: "Empréstimos Bancários", icon: CreditCard },
  { name: "Direito do Consumidor", icon: Scale },
  { name: "Direito Penal e Proc. Penal", icon: Gavel },
  { name: "Revisional de Contratos", icon: FileCheck },
  { name: "Regularização Imobiliária", icon: Building },
  { name: "Direito da Família e Sucessões", icon: BookOpen },
  { name: "Inventário", icon: Archive },
  { name: "Testamentos", icon: ScrollText },
  { name: "Causas Previdenciárias", icon: Key },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Áreas de atuação
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 cursor-default hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="font-body text-xs md:text-sm text-center text-foreground font-medium">
                  {service.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
