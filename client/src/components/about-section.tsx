import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} id="sobre" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre o Colégio Mara & Lú</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de uma década formando os líderes do amanhã em Angola
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Instalações modernas do Colégio Mara & Lú" 
              className="rounded-xl shadow-lg w-full h-auto card-hover-glow"
              data-testid="img-escola"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="border-l-4 border-primary shadow-md card-hover-glow">
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="border-l-4 border-secondary shadow-md card-hover-glow">
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
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-primary" 
                  data-testid="stat-alunos"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {inView && <CountUp end={500} duration={2.5} />}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Alunos</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-secondary" 
                  data-testid="stat-professores"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {inView && <CountUp end={40} duration={2.5} />}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Professores</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-accent" 
                  data-testid="stat-anos"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {inView && <CountUp end={12} duration={2.5} />}+
                </motion.div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
