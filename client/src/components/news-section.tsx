import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsSection() {
  const news = [
    {
      date: "15 de Janeiro, 2024",
      title: "Feira de Ciências 2024 foi um Grande Sucesso",
      excerpt: "Os nossos alunos apresentaram projetos inovadores na nossa feira anual de ciências, demonstrando criatividade e conhecimento científico...",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Feira de Ciências 2024"
    },
    {
      date: "10 de Janeiro, 2024",
      title: "Festival Cultural Celebra a Herança Angolana",
      excerpt: "Uma celebração vibrante da cultura angolana com danças tradicionais, música e apresentações culturais dos nossos estudantes...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Festival Cultural Angolano"
    },
    {
      date: "5 de Janeiro, 2024",
      title: "Matrículas Abertas para 2024",
      excerpt: "Já estão abertas as matrículas para o ano letivo 2024. Garante já a vaga do teu filho numa educação de excelência...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Cerimónia de Graduação"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Notícias & Eventos</h2>
          <p className="text-xl text-muted-foreground">
            Fique por dentro das novidades e atividades do colégio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="hover-scale shadow-lg overflow-hidden">
              <img 
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover"
                data-testid={`news-img-${index}`}
              />
              <CardContent className="p-6">
                <div className="text-sm text-primary font-semibold mb-2" data-testid={`news-date-${index}`}>
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`news-title-${index}`}>
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`news-excerpt-${index}`}>
                  {article.excerpt}
                </p>
                {index === 2 ? (
                  <button 
                    onClick={scrollToContact}
                    className="text-primary font-semibold hover:text-secondary transition-colors flex items-center"
                    data-testid={`news-link-${index}`}
                  >
                    Ler mais <ArrowRight className="ml-1" size={16} />
                  </button>
                ) : (
                  <button className="text-primary font-semibold hover:text-secondary transition-colors flex items-center"
                          data-testid={`news-link-${index}`}>
                    Ler mais <ArrowRight className="ml-1" size={16} />
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
