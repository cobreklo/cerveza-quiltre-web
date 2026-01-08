import { motion } from "framer-motion";
import { Beer, Heart, Award, Users } from "lucide-react";

const stats = [
  { value: "2025", label: "Año de fundación", icon: Beer },
  { value: "2", label: "Variedades creadas", icon: Heart },
  { value: "12", label: "Premios ganados", icon: Award },
  { value: "10K+", label: "Clientes felices", icon: Users },
];

const values = [
  {
    title: "Pasión",
    description: "Cada cerveza nace del amor por el oficio cervecero y el respeto a las tradiciones.",
    icon: Heart,
  },
  {
    title: "Calidad",
    description: "Ingredientes premium seleccionados y procesos artesanales que garantizan excelencia.",
    icon: Award,
  },
  {
    title: "Identidad",
    description: "Como un quiltro chileno: únicos, auténticos y con personalidad inconfundible.",
    icon: Beer,
  },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="nosotros" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground uppercase tracking-wide mb-2">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            El origen de Cerveza Quiltre y nuestra pasión por la cerveza artesanal chilena.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/herosexchon.jpeg"
                alt="Cervecería Quiltre"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <p className="text-card-foreground font-display text-lg italic">
                  "Un quiltro es noble, leal y único. Así son nuestras cervezas."
                </p>
                <p className="text-primary font-bold mt-2">— Fundadores de Quiltre</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Desde 2025
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2 mb-6">
              El Espíritu del <span className="text-primary">Quiltro Chileno</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Todo comenzó con una pasión compartida por la cerveza artesanal y un 
                profundo amor por Chile. En 2025, un grupo de amigos cerveceros decidió 
                crear algo único: cervezas que reflejaran el espíritu indomable del 
                quiltro chileno.
              </p>
              <p>
                El quiltro, ese perro mestizo que recorre las calles de Chile, representa 
                lo mejor de nuestra identidad: <strong className="text-foreground">nobleza, 
                lealtad y una personalidad inconfundible</strong>. Cada una de nuestras 
                cervezas lleva ese espíritu.
              </p>
              <p>
                Hoy, desde Santiago, elaboramos cervezas premiadas que han conquistado 
                paladares en todo el país. Usamos ingredientes de primera calidad y 
                técnicas artesanales que respetan la tradición cervecera.
              </p>
            </div>

            {/* Values */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-4 mt-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-default"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-bold text-card-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-border transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-4xl font-display font-bold text-foreground block"
              >
                {stat.value}
              </motion.span>
              <span className="text-muted-foreground text-sm mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
