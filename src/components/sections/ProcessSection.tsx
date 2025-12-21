import { motion } from "framer-motion";
import { Wheat, Droplets, Timer, Thermometer, Wine, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Selección de Malta",
    description: "Elegimos las mejores maltas importadas y nacionales para crear la base perfecta de cada cerveza.",
    icon: Wheat,
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    title: "Maceración",
    description: "La malta se mezcla con agua pura a temperaturas precisas para extraer los azúcares fermentables.",
    icon: Thermometer,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    title: "Cocción y Lúpulo",
    description: "Hervimos el mosto y añadimos lúpulos seleccionados que aportan amargor, aroma y personalidad.",
    icon: Droplets,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Fermentación",
    description: "La levadura transforma los azúcares en alcohol durante semanas de fermentación controlada.",
    icon: Timer,
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "05",
    title: "Maduración",
    description: "Dejamos reposar la cerveza para que desarrolle todos sus sabores y aromas complejos.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "06",
    title: "Embotellado",
    description: "Cada botella se llena con cuidado artesanal, lista para ser disfrutada.",
    icon: Wine,
    color: "from-primary to-primary-glow",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-background uppercase tracking-wide mb-2">
            Nuestro Proceso
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-background/70 max-w-2xl mx-auto">
            Del grano a tu vaso: conoce el proceso artesanal detrás de cada cerveza Quiltre.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-background/20 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:text-${index % 2 === 0 ? "right" : "left"} ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 sm:p-8 hover:bg-background/10 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-primary font-display text-sm font-bold tracking-wider">
                          PASO {step.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-background mt-1 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-background/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node - Desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} items-center justify-center shadow-lg z-10`}
                >
                  <span className="text-white font-display font-bold text-sm">
                    {step.number}
                  </span>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-background/70 mb-6 text-lg">
            ¿Quieres conocer nuestra cervecería?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span>Agenda una visita</span>
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
