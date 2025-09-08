import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} id="depoimentos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground">
            O que dizem os pais e alunos sobre o Colégio Mara & Lú
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover-glow shadow-lg h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={inView ? { opacity: 1, rotate: 0 } : {}}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          <Star size={16} fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-content-${index}`}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <motion.img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      data-testid={`testimonial-img-${index}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
