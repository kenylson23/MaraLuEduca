import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-primary">Mara & Lú</h1>
          </div>
          
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
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary text-primary-foreground hover:bg-secondary"
              data-testid="nav-matriculas"
            >
              Matrículas
            </Button>
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
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('cursos')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-cursos"
              >
                Cursos
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-galeria"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-depoimentos"
              >
                Depoimentos
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-primary text-primary-foreground hover:bg-secondary w-fit"
                data-testid="mobile-nav-matriculas"
              >
                Matrículas
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
