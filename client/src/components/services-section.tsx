import { motion } from "framer-motion";
import { Users, Bot, ShoppingCart, BarChart3, MessageSquare, Database, Settings, Globe } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "CRM & HRM Software",
    description: "Comprehensive customer relationship management and human resource management solutions to streamline your business operations.",
    gradient: "from-blue-50 to-indigo-50",
    iconGradient: "from-blue-500 to-indigo-600",
    border: "border-blue-100",
    features: ["Customer Management", "Employee Portal", "Analytics Dashboard"]
  },
  {
    icon: Bot,
    title: "AI Automation Systems",
    description: "Intelligent automation solutions that reduce manual work, improve efficiency, and drive business growth through AI-powered processes.",
    gradient: "from-purple-50 to-pink-50",
    iconGradient: "from-purple-500 to-pink-600",
    border: "border-purple-100",
    features: ["Process Automation", "Smart Workflows", "Predictive Analytics"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Modern, scalable e-commerce websites and platforms built with cutting-edge technologies for optimal performance and user experience.",
    gradient: "from-emerald-50 to-teal-50",
    iconGradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-100",
    features: ["Online Stores", "Payment Integration", "Inventory Management"]
  },
  {
    icon: BarChart3,
    title: "Business Management Software",
    description: "All-in-one business management solutions to handle operations, finances, and strategic planning in one integrated platform.",
    gradient: "from-amber-50 to-orange-50",
    iconGradient: "from-amber-500 to-orange-600",
    border: "border-amber-100",
    features: ["Financial Tracking", "Project Management", "Performance Metrics"]
  },
  {
    icon: MessageSquare,
    title: "Voice AI Agents",
    description: "Advanced chatbots and customer support automation powered by AI to provide 24/7 intelligent customer service and engagement.",
    gradient: "from-rose-50 to-red-50",
    iconGradient: "from-rose-500 to-red-600",
    border: "border-rose-100",
    features: ["Chatbots", "Voice Assistants", "Customer Support"]
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    description: "Bespoke AI solutions tailored to your specific business needs, from data analysis to predictive modeling and automation.",
    gradient: "from-slate-50 to-gray-50",
    iconGradient: "from-slate-500 to-gray-600",
    border: "border-slate-100",
    features: ["Custom Development", "AI Integration", "Scalable Solutions"]
  }
];

export default function ServicesSection() {
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${service.border} border relative overflow-hidden`}
                whileHover={{ y: -8 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                </div>
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.iconGradient} mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can help you achieve your business goals and drive growth.
            </p>
            <motion.button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="inline mr-2 h-5 w-5" />
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
