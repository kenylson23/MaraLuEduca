import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center pulse-glow"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <GraduationCap className="text-white text-xl" />
            </motion.div>
            <h1 className="text-2xl font-bold text-primary">Mara & Lú</h1>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('cursos')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-cursos"
            >
              Cursos
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('[data-testid="tuition-calculator"]');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-calculator"
            >
              Calculadora
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('[data-testid="virtual-tour"]');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-tour"
            >
              Tour Virtual
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-galeria"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-depoimentos"
            >
              Depoimentos
            </button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-primary text-primary-foreground hover:bg-secondary pulse-glow"
                data-testid="nav-matriculas"
              >
                Matrículas
              </Button>
            </motion.div>
          </div>
          
          <Button
            variant="ghost"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'cursos', label: 'Cursos' },
                  { id: 'calculadora', label: 'Calculadora' },
                  { id: 'tour', label: 'Tour Virtual' },
                  { id: 'galeria', label: 'Galeria' },
                  { id: 'depoimentos', label: 'Depoimentos' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'calculadora') {
                        const element = document.querySelector('[data-testid="tuition-calculator"]');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (item.id === 'tour') {
                        const element = document.querySelector('[data-testid="virtual-tour"]');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        scrollToSection(item.id);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`mobile-nav-${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className="bg-primary text-primary-foreground hover:bg-secondary w-fit pulse-glow"
                    data-testid="mobile-nav-matriculas"
                  >
                    Matrículas
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
