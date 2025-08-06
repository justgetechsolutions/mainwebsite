import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      setLocation(`/#${sectionId}`);
    } else {
      // If we're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navigateToHome = () => {
    setLocation('/');
    setIsOpen(false);
  };

  const navigateToCareers = () => {
    setLocation('/careers');
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'glass-effect border-b border-white/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={navigateToHome}
          >
            <div className={`text-2xl font-bold flex items-center space-x-2 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Just</span>
                <span className={scrolled ? 'text-gray-900' : 'text-white'}>GeTech</span>
              </span>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { id: 'home', label: 'Home', action: navigateToHome },
                { id: 'services', label: 'Services', action: () => scrollToSection('services') },
                { id: 'industries', label: 'Industries', action: () => scrollToSection('industries') },
                { id: 'testimonials', label: 'Testimonials', action: () => scrollToSection('testimonials') },
                { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
                { id: 'careers', label: 'Careers', action: navigateToCareers }
              ].map((item) => (
                <motion.button 
                  key={item.id}
                  onClick={item.action}
                  className={`transition-colors duration-200 font-medium ${
                    scrolled 
                      ? 'text-gray-700 hover:text-indigo-600' 
                      : 'text-white hover:text-indigo-300'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Demo
            </motion.button>
            <motion.button 
              className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 ${
                scrolled 
                  ? 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg' 
                  : 'bg-black/20 backdrop-blur-lg'
              }`}>
                {[
                  { id: 'home', label: 'Home', action: navigateToHome },
                  { id: 'services', label: 'Services', action: () => scrollToSection('services') },
                  { id: 'industries', label: 'Industries', action: () => scrollToSection('industries') },
                  { id: 'testimonials', label: 'Testimonials', action: () => scrollToSection('testimonials') },
                  { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
                  { id: 'careers', label: 'Careers', action: navigateToCareers }
                ].map((item, index) => (
                  <motion.button 
                    key={item.id}
                    onClick={item.action}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50' 
                        : 'text-white hover:text-indigo-300 hover:bg-white/10'
                    } rounded-md`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
