import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070"
          alt="Cerveza artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0 bg-foreground/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 uppercase"
            >
              Edición Especial
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-background leading-tight mb-6"
            >
              PACK{" "}
              <span className="text-primary relative">
                MESTIZO
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-1 bg-primary/30"
                />
              </span>
              <br />
              <span className="text-background/90">DE TEMPORADA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-background/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Descubre nuestra selección de cervezas premiadas, cada una con el
              carácter único de un quiltro chileno. Fieles, nobles y con mucha
              personalidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all btn-glow"
              >
                <span>COMPRAR AHORA</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 px-8 py-6 rounded-full"
              >
                Ver Productos
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "4.8", label: "Rating promedio", icon: Star },
                { value: "10K+", label: "Clientes felices" },
                { value: "100%", label: "Artesanal" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary">
                    {stat.icon && <stat.icon className="w-5 h-5 fill-primary" />}
                    <span className="text-2xl sm:text-3xl font-display font-bold">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-background/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Logo/Product showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-75" />
              
              {/* Logo circle */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="text-8xl font-display font-bold text-primary drop-shadow-2xl">
                    Q
                  </span>
                  <p className="text-background/80 font-display text-xl tracking-widest uppercase mt-2">
                    Quiltre
                  </p>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="font-bold text-sm">🏆 Premiada</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="font-bold text-sm">🇨🇱 100% Chilena</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-background/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
