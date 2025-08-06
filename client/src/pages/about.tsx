import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Bot, Target, Users, Award, Globe, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const navigateToContact = () => {
    setLocation('/#contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">JustGeTech</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering AI-powered solutions to transform businesses and drive digital innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize artificial intelligence and make cutting-edge AI solutions accessible to businesses of all sizes. We believe that every company deserves the power of intelligent automation and data-driven insights.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by Chauhan Dhruvil, JustGeTech is committed to delivering innovative, scalable, and cost-effective AI solutions that drive real business transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading provider of AI-powered business solutions, empowering organizations worldwide to achieve unprecedented growth and efficiency through intelligent technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at JustGeTech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Innovation First",
                description: "We constantly push the boundaries of what's possible with AI technology, always seeking new ways to solve complex business challenges."
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Your success is our success. We're committed to delivering solutions that drive measurable results and exceed expectations."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We maintain the highest standards of quality in every solution we deliver, ensuring reliability and performance."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "We believe in making AI accessible to businesses worldwide, regardless of their size or location."
              },
              {
                icon: Zap,
                title: "Rapid Delivery",
                description: "We understand the urgency of business needs and deliver solutions quickly without compromising quality."
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "Every solution we create is designed to deliver tangible, measurable business outcomes and ROI."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Chauhan Dhruvil</h3>
                  <p className="text-xl text-indigo-600 mb-6">Founder & CEO</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    "At JustGeTech, we believe that artificial intelligence should be accessible to every business. Our mission is to democratize AI technology and help companies of all sizes leverage its power to drive growth, efficiency, and innovation."
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With a passion for technology and business transformation, I founded JustGeTech to bridge the gap between cutting-edge AI capabilities and practical business applications. We're committed to delivering solutions that not only work but drive real, measurable results for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and discover how JustGeTech can help you achieve your business goals.
          </p>
          <motion.button 
            onClick={navigateToContact}
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 