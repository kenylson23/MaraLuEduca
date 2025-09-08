import { useState } from "react";
import { MapPin, Play, Pause, RotateCcw, Maximize2, X, Navigation, Eye, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TourLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  panoramicImage: string;
  category: 'academic' | 'sports' | 'recreation' | 'administration';
  coordinates: { x: number; y: number };
  highlights: string[];
}

export default function VirtualTour() {
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentView, setCurrentView] = useState<'map' | 'tour'>('map');
  const [rotation, setRotation] = useState(0);
  const [isAutoTour, setIsAutoTour] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const tourLocations: TourLocation[] = [
    {
      id: 'entrance',
      name: 'Entrada Principal',
      description: 'Recepção moderna com área de espera confortável para pais e visitantes',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'administration',
      coordinates: { x: 20, y: 30 },
      highlights: ['Recepção 24h', 'Área de espera', 'Informações gerais']
    },
    {
      id: 'classroom',
      name: 'Salas de Aula',
      description: 'Salas modernas equipadas com tecnologia educacional avançada',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'academic',
      coordinates: { x: 40, y: 45 },
      highlights: ['Projetor interativo', 'Ar condicionado', 'Mobiliário ergonómico']
    },
    {
      id: 'laboratory',
      name: 'Laboratório de Ciências',
      description: 'Laboratório completo para experiências práticas de Física, Química e Biologia',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'academic',
      coordinates: { x: 70, y: 35 },
      highlights: ['Equipamento moderno', 'Bancadas individuais', 'Sistema de segurança']
    },
    {
      id: 'library',
      name: 'Biblioteca',
      description: 'Espaço tranquilo com vasta coleção de livros e área de estudo individual',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'academic',
      coordinates: { x: 25, y: 65 },
      highlights: ['5000+ livros', 'Área de estudo', 'Computadores disponíveis']
    },
    {
      id: 'computer-lab',
      name: 'Laboratório de Informática',
      description: 'Sala equipada com computadores modernos para aulas de tecnologia',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'academic',
      coordinates: { x: 60, y: 60 },
      highlights: ['30 computadores', 'Internet alta velocidade', 'Software educacional']
    },
    {
      id: 'cafeteria',
      name: 'Refeitório',
      description: 'Área ampla e limpa para refeições com cardápio nutritivo diário',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'recreation',
      coordinates: { x: 80, y: 75 },
      highlights: ['Cardápio balanceado', 'Cozinha industrial', 'Área externa']
    },
    {
      id: 'playground',
      name: 'Parque Infantil',
      description: 'Área de recreação segura para as crianças da educação infantil',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'recreation',
      coordinates: { x: 45, y: 85 },
      highlights: ['Equipamento seguro', 'Piso amortecido', 'Supervisão constante']
    },
    {
      id: 'sports-court',
      name: 'Quadra Desportiva',
      description: 'Quadra polivalente para basquetebol, voleibol e outras atividades',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      panoramicImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      category: 'sports',
      coordinates: { x: 15, y: 80 },
      highlights: ['Quadra coberta', 'Equipamento completo', 'Arquibancadas']
    }
  ];

  const getCategoryColor = (category: TourLocation['category']) => {
    const colors = {
      academic: 'bg-primary',
      sports: 'bg-secondary', 
      recreation: 'bg-accent',
      administration: 'bg-muted-foreground'
    };
    return colors[category];
  };

  const getCategoryIcon = (category: TourLocation['category']) => {
    const icons = {
      academic: '📚',
      sports: '⚽',
      recreation: '🎮',
      administration: '🏢'
    };
    return icons[category];
  };

  const startAutoTour = () => {
    setIsAutoTour(true);
    setCurrentView('tour');
    let currentIndex = 0;
    
    const tourInterval = setInterval(() => {
      if (currentIndex < tourLocations.length) {
        setSelectedLocation(tourLocations[currentIndex]);
        currentIndex++;
      } else {
        setIsAutoTour(false);
        clearInterval(tourInterval);
      }
    }, 5000);
  };

  const TourViewer = () => (
    <div className="relative w-full h-[500px] bg-black rounded-xl overflow-hidden">
      {selectedLocation && (
        <>
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${selectedLocation.panoramicImage})`,
              transform: `rotateX(0deg) rotateY(${rotation}deg)`
            }}
          />
          
          {/* Controles do Tour */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
              <h3 className="font-bold">{selectedLocation.name}</h3>
              <p className="text-sm opacity-80">{selectedLocation.description}</p>
            </div>
            
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setRotation(rotation - 30)}
                data-testid="rotate-left"
              >
                <RotateCcw size={16} />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setRotation(rotation + 30)}
                data-testid="rotate-right"
              >
                <Navigation size={16} />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setIsFullscreen(!isFullscreen)}
                data-testid="toggle-fullscreen"
              >
                <Maximize2 size={16} />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Eye className="text-secondary mr-3" size={40} />
            <h2 className="text-4xl font-bold text-foreground">Tour Virtual 360°</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore as modernas instalações do Colégio Mara & Lú através do nosso tour virtual interativo
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Controles e Lista de Locais */}
          <div className="space-y-6">
            <Card className="card-hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary">
                  <MapPin className="mr-2" />
                  Controles do Tour
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setCurrentView('map')}
                    variant={currentView === 'map' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    data-testid="view-map"
                  >
                    Mapa
                  </Button>
                  <Button
                    onClick={() => setCurrentView('tour')}
                    variant={currentView === 'tour' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    data-testid="view-tour"
                  >
                    Tour 360°
                  </Button>
                </div>
                
                <Button
                  onClick={startAutoTour}
                  disabled={isAutoTour}
                  className="w-full pulse-glow"
                  data-testid="start-auto-tour"
                >
                  {isAutoTour ? <Pause className="mr-2" size={16} /> : <Play className="mr-2" size={16} />}
                  {isAutoTour ? 'Tour Automático...' : 'Iniciar Tour Automático'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover-glow max-h-96 overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-primary">Locais para Visitar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tourLocations.map((location, index) => (
                  <motion.button
                    key={location.id}
                    onClick={() => {
                      setSelectedLocation(location);
                      setCurrentView('tour');
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all hover:scale-102 ${
                      selectedLocation?.id === location.id 
                        ? 'bg-primary/20 border-2 border-primary' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`location-${location.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      <Badge className={getCategoryColor(location.category)}>
                        {getCategoryIcon(location.category)}
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{location.name}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Área Principal - Mapa ou Tour */}
          <div className="lg:col-span-2">
            <Card className="card-hover-glow">
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {currentView === 'map' ? (
                    <motion.div
                      key="map"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden"
                    >
                      {/* Mapa da Escola */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3Cpath d="M0 0h100v100H0z" fill="none" stroke="%23ddd" stroke-width="1"/%3E%3C/svg%3E')] opacity-20"></div>
                      
                      {/* Pontos do Mapa */}
                      {tourLocations.map((location, index) => (
                        <motion.button
                          key={location.id}
                          onClick={() => {
                            setSelectedLocation(location);
                            setCurrentView('tour');
                          }}
                          className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 group"
                          style={{
                            left: `${location.coordinates.x}%`,
                            top: `${location.coordinates.y}%`,
                          }}
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.2 }}
                          data-testid={`map-pin-${location.id}`}
                        >
                          <div className={`w-6 h-6 ${getCategoryColor(location.category)} rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs animate-pulse`}>
                            {index + 1}
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {location.name}
                          </div>
                        </motion.button>
                      ))}
                      
                      {/* Legenda */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h4 className="font-semibold text-sm mb-2">Legenda</h4>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs">
                            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                            Académico
                          </div>
                          <div className="flex items-center text-xs">
                            <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                            Desporto
                          </div>
                          <div className="flex items-center text-xs">
                            <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                            Recreação
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="tour"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedLocation ? (
                        <TourViewer />
                      ) : (
                        <div className="w-full h-[500px] bg-muted rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Home size={48} className="mx-auto mb-4 text-muted-foreground" />
                            <p className="text-muted-foreground">
                              Selecione um local no mapa ou na lista para iniciar o tour
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Detalhes do Local Selecionado */}
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Card className="card-hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {selectedLocation.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {selectedLocation.description}
                        </p>
                      </div>
                      <Badge className={getCategoryColor(selectedLocation.category)}>
                        {getCategoryIcon(selectedLocation.category)}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedLocation.highlights.map((highlight, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-3 text-center">
                          <p className="text-sm font-medium text-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Modal Fullscreen */}
        <AnimatePresence>
          {isFullscreen && selectedLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              onClick={() => setIsFullscreen(false)}
            >
              <div className="relative w-full h-full">
                <TourViewer />
                <Button
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30"
                  size="sm"
                  onClick={() => setIsFullscreen(false)}
                  data-testid="close-fullscreen"
                >
                  <X size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}