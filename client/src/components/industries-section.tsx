import { motion } from "framer-motion";
import { Building2, ShoppingBag, UtensilsCrossed, Car, GraduationCap, Factory } from "lucide-react";

const industries = [
  {
    title: "Food Service & Restaurants",
    description: "CRM solutions for restaurants, food chains, and hospitality businesses to manage customers, orders, and operations efficiently.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Retail & E-commerce",
    description: "Smart inventory management, customer analytics, and e-commerce platforms for retail businesses to boost sales and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    icon: ShoppingBag,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Manufacturing",
    description: "AI-powered automation and business management solutions to optimize production processes and improve operational efficiency.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    icon: Factory,
    color: "from-gray-500 to-slate-500"
  },
  {
    title: "Technology & SaaS",
    description: "Custom AI solutions and business management software for tech companies to scale operations and enhance customer experience.",
    image: "https://www.corporatevision-news.com/wp-content/uploads/2023/04/SaaS-Business.jpg",
    icon: Building2,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Automotive",
    description: "CRM and automation solutions for automotive businesses to manage customer relationships, service scheduling, and sales processes.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    icon: Car,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Education & Training",
    description: "AI-powered learning management systems and student relationship management solutions for educational institutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    icon: GraduationCap,
    color: "from-amber-500 to-orange-500"
  }
];

export default function IndustriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized AI solutions across diverse sectors to meet unique industry challenges and drive digital transformation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.title}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <motion.img 
                    src={industry.image} 
                    alt={`${industry.title} industry`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                  
                  {/* Industry features */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      CRM Solutions
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      AI Automation
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      Analytics
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Industry CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Our AI solutions are adaptable to any industry. Let's discuss how we can customize our services for your specific needs.
            </p>
            <motion.button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Custom Solution Inquiry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
