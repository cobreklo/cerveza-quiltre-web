import { motion } from "framer-motion";
import { Star } from "lucide-react";

const categories = [
  {
    name: "Rubias",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=600",
  },
  {
    name: "Negras",
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=600",
  },
  {
    name: "Ámbar",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600",
  },
  {
    name: "Packs",
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=600",
  },
];

const products = [
  {
    id: 1,
    name: 'Quiltre "Furia" IPA',
    type: "Imperial Pale Ale",
    description: "Intensa, aromática y con carácter fuerte. Notas cítricas y un amargor persistente.",
    price: 2990,
    originalPrice: 3500,
    rating: 4.5,
    image: "/paleale1.jpeg",
    badge: "-15%",
    badgeColor: "bg-destructive",
  },
  {
    id: 2,
    name: 'Quiltre "Leal" Golden',
    type: "Golden Ale",
    description: "Refrescante y equilibrada. La compañera perfecta para cualquier momento del día.",
    price: 2500,
    rating: 4,
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=400",
  },
  {
    id: 3,
    name: 'Quiltre "Nocturna" Stout',
    type: "Stout",
    description: "Cuerpo robusto con notas profundas de café y chocolate amargo. Para paladares exigentes.",
    price: 3200,
    rating: 5,
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=400",
    badge: "Premium",
    badgeColor: "bg-foreground",
  },
  {
    id: 4,
    name: 'Quiltre "Callejera" Amber',
    type: "Amber Ale",
    description: "Color rojizo vibrante, caramelo suave y final seco. Una aventura de sabor en cada sorbo.",
    price: 2800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400",
  },
];

const filterButtons = ["Todos", "IPAs", "Stout", "Packs"];

const ProductsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? "fill-primary text-primary"
            : i < rating
            ? "fill-primary/50 text-primary"
            : "text-muted"
        }`}
      />
    ));
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground uppercase tracking-wide mb-2">
            Categorías
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Explora nuestra variedad de estilos cerveceros y accesorios para los
            amantes de la buena cerveza.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {categories.map((category, index) => (
              <motion.a
                key={category.name}
                href="#"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors flex items-center justify-center">
                  <h4 className="text-background font-display text-lg sm:text-xl font-bold tracking-wider border-2 border-background px-4 py-2 uppercase group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                    {category.name}
                  </h4>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-border pb-4 gap-4">
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground uppercase tracking-wide">
                Nuestros Productos
              </h3>
              <p className="text-muted-foreground mt-1">
                Cervezas con identidad propia
              </p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0 w-full md:w-auto">
              {filterButtons.map((filter, index) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group overflow-hidden flex flex-col h-full card-lift"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-secondary/50 flex items-center justify-center p-6">
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 ${product.badgeColor} text-background text-xs font-bold px-2 py-1 rounded shadow-sm z-10`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      {product.type}
                    </span>
                    <div className="flex">{renderStars(product.rating)}</div>
                  </div>
                  <h4 className="text-lg font-display font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto gap-3">
                    <div>
                      {product.originalPrice && (
                        <span className="text-muted-foreground text-sm line-through block">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-card-foreground">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
