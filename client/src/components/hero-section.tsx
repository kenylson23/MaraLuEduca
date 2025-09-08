import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      {showVideo ? (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          >
            <source src="https://player.vimeo.com/external/195986834.sd.mp4?s=7c12f7b2c5e01c1f40e8b9c3e84fccb8e5b7b834&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      )}
      
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Video Play Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => setShowVideo(!showVideo)}
        className="absolute top-24 right-8 z-30 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all floating-animation"
        data-testid="video-toggle"
      >
        <Play size={24} />
      </motion.button>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 hero-text-shadow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Educação de <span className="text-accent floating-animation">Excelência</span><br />
            para o Futuro de Angola
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto hero-text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            No Colégio Mara & Lú, transformamos sonhos em realidade através de uma educação inovadora e de qualidade.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-accent text-accent-foreground px-8 py-4 text-lg font-semibold pulse-glow hover-scale"
              data-testid="button-matriculas"
            >
              Matricule-se Agora
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('sobre')}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary hover-scale"
              data-testid="button-conhecer"
            >
              Conhecer o Colégio
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
