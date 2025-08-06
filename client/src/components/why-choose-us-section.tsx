import { motion } from "framer-motion";
import { Brain, Zap, Shield, Users, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Every solution is built with artificial intelligence at its core, ensuring intelligent automation and predictive capabilities that drive real business value.",
    gradient: "from-purple-500 to-pink-600",
    features: ["Machine Learning", "Predictive Analytics", "Smart Automation"]
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Quick deployment and integration with existing systems, delivering measurable results within weeks, not months.",
    gradient: "from-green-500 to-emerald-600",
    features: ["Fast Setup", "Seamless Integration", "Quick ROI"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance standards to protect your data and ensure business continuity.",
    gradient: "from-blue-500 to-indigo-600",
    features: ["Data Encryption", "Compliance Ready", "24/7 Monitoring"]
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Led by founder Chauhan Dhruvil, our team combines deep technical expertise with industry knowledge to deliver exceptional solutions.",
    gradient: "from-orange-500 to-red-600",
    features: ["Technical Excellence", "Industry Experience", "Dedicated Support"]
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
    gradient: "from-teal-500 to-cyan-600",
    features: ["Always Available", "Quick Response", "Proactive Monitoring"]
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Solutions that grow with your business, from startup to enterprise, with flexible architecture and modular design.",
    gradient: "from-indigo-500 to-purple-600",
    features: ["Flexible Architecture", "Modular Design", "Future-Proof"]
  }
];

export default function WhyChooseUsSection() {
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">JustGeTech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through our AI-first approach, rapid implementation, and unwavering commitment to customer success.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div 
                key={benefit.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {benefit.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Founder Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Meet Our Founder</h3>
              <p className="text-indigo-100 mb-6 text-lg">
                "At JustGeTech, we believe that AI should be accessible to every business. Our mission is to democratize artificial intelligence and help companies of all sizes leverage its power to drive growth and efficiency."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Chauhan Dhruvil</div>
                  <div className="text-indigo-200 text-sm">Founder & CEO, JustGeTech</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
