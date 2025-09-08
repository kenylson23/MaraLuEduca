import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Mara & Lú</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Formando os líderes do amanhã através de uma educação de excelência em Angola.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-social-facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-social-instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-social-youtube"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-sobre"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cursos')}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-cursos"
                >
                  Cursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-galeria"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-depoimentos"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Educação Infantil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Ensino Primário
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Ensino Secundário
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-matriculas"
                >
                  Matrículas
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-start">
                <MapPin className="mr-2 text-primary mt-1 flex-shrink-0" size={16} />
                Rua Principal, Bairro Miramar, Luanda
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-2 text-primary flex-shrink-0" size={16} />
                +244 923 456 789
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-2 text-primary flex-shrink-0" size={16} />
                info@colegiomara.ao
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Colégio Mara & Lú. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Feito por{" "}
            <a 
              href="https://www.instagram.com/keny_ggg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="footer-developer-link"
            >
              Kenylson Lourenço
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
