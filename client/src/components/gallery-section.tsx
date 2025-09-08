export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Laboratório de informática",
      className: "col-span-2 md:col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Laboratório de ciências",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Biblioteca escolar",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Ginásio desportivo",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Refeitório escolar",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      alt: "Parque infantil",
      className: "col-span-1 md:col-span-2"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nossas Instalações</h2>
          <p className="text-xl text-muted-foreground">
            Espaços modernos e equipados para proporcionar a melhor experiência educacional
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`hover-scale ${image.className}`}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                data-testid={`gallery-img-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
