import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre o Colégio Mara & Lú</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de uma década formando os líderes do amanhã em Angola
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Instalações modernas do Colégio Mara & Lú" 
              className="rounded-xl shadow-lg w-full h-auto hover-scale"
              data-testid="img-escola"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-primary shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                  <Target className="mr-2" />
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground">
                  Proporcionar educação de excelência, formando cidadãos críticos, criativos e éticos, preparados para os desafios do século XXI e comprometidos com o desenvolvimento de Angola.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-secondary shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3 flex items-center">
                  <Eye className="mr-2" />
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground">
                  Ser reconhecido como o colégio de referência em Angola, destacando-se pela qualidade do ensino, inovação pedagógica e formação integral dos nossos estudantes.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stat-alunos">500+</div>
                <div className="text-sm text-muted-foreground">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-professores">40+</div>
                <div className="text-sm text-muted-foreground">Professores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-anos">12+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
