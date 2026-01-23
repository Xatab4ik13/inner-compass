import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#help", label: "Помощь" },
  { href: "#about", label: "Обо мне" },
  { href: "#education", label: "Образование" },
  { href: "#methods", label: "Методы" },
  { href: "#results", label: "Результаты" },
  { href: "#books", label: "Книги" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#contacts", label: "Контакты" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  }, [scrollToSection]);

  const handleMobileNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const sectionId = href.replace("#", "");
    // Delay scroll to allow menu to close
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }, [scrollToSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl md:text-2xl font-medium text-deep-brown"
          >
            Олег Петрович
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-body text-xs tracking-wide text-foreground/70 hover:text-deep-brown transition-colors duration-200 uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            onClick={(e) => handleNavClick(e, "#contacts")}
            className="hidden lg:inline-flex px-6 py-2.5 bg-deep-brown text-primary-foreground font-body text-xs tracking-wide uppercase hover:bg-warm-brown transition-colors duration-200"
          >
            Записаться
          </a>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg px-4 shadow-soft"
            >
              <div className="flex flex-col gap-3 py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className="font-body text-sm text-foreground/80 hover:text-deep-brown transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contacts"
                  onClick={(e) => handleMobileNavClick(e, "#contacts")}
                  className="mt-2 px-5 py-3 bg-deep-brown text-primary-foreground font-body text-sm text-center hover:bg-warm-brown transition-colors duration-200"
                >
                  Записаться
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;