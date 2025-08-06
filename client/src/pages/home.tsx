import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import IndustriesSection from "@/components/industries-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AIChatbot from "@/components/ai-chatbot";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation from other pages
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1); // Remove the # symbol
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }

    // Scroll Animation Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade elements
    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </div>
  );
}
