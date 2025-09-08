import { Baby, Cat, GraduationCap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CoursesSection() {
  const courses = [
    {
      icon: Baby,
      title: "Educação Infantil",
      age: "3 a 5 anos",
      color: "primary",
      features: ["Desenvolvimento cognitivo", "Atividades lúdicas", "Socialização", "Psicomotricidade"]
    },
    {
      icon: Cat,
      title: "Ensino Primário",
      age: "6 a 10 anos",
      color: "secondary",
      features: ["Alfabetização", "Matemática básica", "Ciências naturais", "História de Angola"]
    },
    {
      icon: GraduationCap,
      title: "Ensino Secundário",
      age: "11 a 17 anos",
      color: "accent",
      features: ["Preparação universitária", "Ciências exatas", "Línguas estrangeiras", "Tecnologia"]
    }
  ];

  return (
    <section id="cursos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Níveis de Ensino</h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos ensino de qualidade desde a educação infantil até ao ensino secundário
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            const colorClass = course.color === 'primary' ? 'border-primary' : 
                              course.color === 'secondary' ? 'border-secondary' : 'border-accent';
            const iconColorClass = course.color === 'primary' ? 'bg-primary/10 text-primary' : 
                                   course.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent';
            const checkColorClass = course.color === 'primary' ? 'text-primary' : 
                                   course.color === 'secondary' ? 'text-secondary' : 'text-accent';
            
            return (
              <Card key={index} className={`hover-scale transition-all duration-300 border-t-4 ${colorClass}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${iconColorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground" data-testid={`course-title-${index}`}>
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground">{course.age}</p>
                  </div>
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className={`mr-2 ${checkColorClass}`} size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
