import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Mail, Phone, Beer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Placeholder links - user will configure later
  const whatsappLink = "#"; // Replace with actual WhatsApp link
  const instagramLink = "#"; // Replace with actual Instagram link

  return (
    <footer id="contacto" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Beer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider uppercase">
                  Cerveza <span className="text-primary">Quiltre</span>
                </h3>
                <p className="text-xs text-background/60 tracking-widest uppercase">
                  Artesanal & Chilena
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Cervezas con alma de quiltro: fieles, nobles y con mucha personalidad. 
              Elaboradas con ingredientes premium y el amor de Chile.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#25D366]/30 transition-shadow"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#FD1D1D]/30 transition-shadow"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {["Inicio", "Productos", "Nosotros", "Proceso", "Galería"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm link-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-6">
              Productos
            </h4>
            <ul className="space-y-3">
              {[
                "Quiltre Furia IPA",
                "Quiltre Leal Golden",
                "Quiltre Nocturna Stout",
                "Quiltre Callejera Amber",
                "Pack Mestizo",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#productos"
                    className="text-background/70 hover:text-primary transition-colors text-sm link-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Santiago, Chile
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:contacto@cervezaquiltre.cl"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  contacto@cervezaquiltre.cl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+56912345678"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  +56 9 1234 5678
                </a>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[#25D366]/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Escríbenos por WhatsApp
              </motion.a>
              <motion.a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white py-3 px-4 rounded-full font-medium text-sm hover:shadow-lg transition-all"
              >
                <Instagram className="w-4 h-4" />
                Síguenos en Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} Cerveza Quiltre. Todos los derechos reservados.
            </p>
            <p className="text-background/50 text-xs text-center">
              🍺 Bebe con responsabilidad. Prohibida la venta a menores de 18 años.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
