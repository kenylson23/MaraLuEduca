import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-shadow">
            Educação de <span className="text-accent">Excelência</span><br />
            para o Futuro de Angola
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto hero-text-shadow">
            No Colégio Mara & Lú, transformamos sonhos em realidade através de uma educação inovadora e de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-accent text-accent-foreground px-8 py-4 text-lg font-semibold hover:bg-white hover-scale"
              data-testid="button-matriculas"
            >
              Matricule-se Agora
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('sobre')}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary"
              data-testid="button-conhecer"
            >
              Conhecer o Colégio
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
