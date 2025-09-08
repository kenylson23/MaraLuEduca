import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Mãe de aluno",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b606?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "O Colégio Mara & Lú transformou a vida do meu filho. A qualidade do ensino e o cuidado individual com cada aluno são excepcionais. Recomendo a todas as famílias!"
    },
    {
      name: "João Miguel",
      role: "Aluno do 12º ano",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Estudo aqui há 3 anos e posso dizer que é a melhor escola de Luanda. Os professores são dedicados e as instalações são modernas. Me sinto preparado para a universidade!"
    },
    {
      name: "Ana Ferreira",
      role: "Mãe de aluna",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "A educação que a minha filha recebe no Mara & Lú é completa. Não só aprende as matérias, mas também desenvolve valores e habilidades para a vida. Estou muito satisfeita!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground">
            O que dizem os pais e alunos sobre o Colégio Mara & Lú
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-scale shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    data-testid={`testimonial-img-${index}`}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
