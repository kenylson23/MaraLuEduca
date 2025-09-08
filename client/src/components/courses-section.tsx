import { Baby, Cat, GraduationCap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CoursesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} id="cursos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Níveis de Ensino</h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos ensino de qualidade desde a educação infantil até ao ensino secundário
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            const colorClass = course.color === 'primary' ? 'border-primary' : 
                              course.color === 'secondary' ? 'border-secondary' : 'border-accent';
            const iconColorClass = course.color === 'primary' ? 'bg-primary/10 text-primary' : 
                                   course.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent';
            const checkColorClass = course.color === 'primary' ? 'text-primary' : 
                                   course.color === 'secondary' ? 'text-secondary' : 'text-accent';
            
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`card-hover-glow border-t-4 ${colorClass} h-full`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <motion.div 
                        className={`w-16 h-16 ${iconColorClass} rounded-full flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={32} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`course-title-${index}`}>
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground">{course.age}</p>
                    </div>
                    <ul className="space-y-3">
                      {course.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className={`mr-2 ${checkColorClass}`} size={16} />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
