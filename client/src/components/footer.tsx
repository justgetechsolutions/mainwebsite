import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, Phone, Bot } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [, setLocation] = useLocation();

  const navigateToContact = () => {
    setLocation('/#contact');
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
  };

  return (
    <footer className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Just</span>GeTech
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Transforming businesses worldwide with innovative AI-powered solutions. From CRM & HRM software to Voice AI agents, we help companies leverage artificial intelligence for growth and efficiency.
            </motion.p>
            
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">dhruvil@justgetech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">+91-7802992523</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setLocation('/#services')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                CRM & HRM Software
              </button></li>
              <li><button onClick={() => setLocation('/#services')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                AI Automation Systems
              </button></li>
              <li><button onClick={() => setLocation('/#services')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                E-commerce Development
              </button></li>
              <li><button onClick={() => setLocation('/#services')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                Voice AI Agents
              </button></li>
              <li><button onClick={() => setLocation('/#services')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                Custom AI Solutions
              </button></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={() => navigateToPage('/about')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                About JustGeTech
              </button></li>
              <li><button onClick={() => navigateToPage('/careers')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                Careers
              </button></li>
              <li><button onClick={navigateToContact} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center w-full text-left cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                Contact Us
              </button></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} JustGeTech. All rights reserved. | Founded by Chauhan Dhruvil
            </p>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => navigateToPage('/terms')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Terms of Service</button>
              <button onClick={() => navigateToPage('/cookies')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Cookie Policy</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
