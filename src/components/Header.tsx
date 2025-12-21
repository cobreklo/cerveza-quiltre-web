import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Productos", href: "#productos" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proceso", href: "#proceso" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">Q</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-ping" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl md:text-2xl font-bold tracking-wider text-foreground uppercase">
                Cerveza <span className="text-primary">Quiltre</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                Artesanal & Chilena
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-4 py-2 font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search - Desktop only */}
            <div className="hidden md:block relative group">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-40 lg:w-48 bg-secondary text-foreground rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-primary focus:outline-none text-sm border-none transition-all group-hover:w-52 lg:group-hover:w-56"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`py-3 px-4 font-medium rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile Search */}
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full bg-secondary text-foreground rounded-full py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary focus:outline-none border-none"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
