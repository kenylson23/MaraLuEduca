import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoursesSection from "@/components/courses-section";
import TuitionCalculator from "@/components/tuition-calculator";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TuitionCalculator />
      <GallerySection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
