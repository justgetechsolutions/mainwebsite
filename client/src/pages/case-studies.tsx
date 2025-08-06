import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { TrendingUp, Users, Zap, ShoppingCart, MessageSquare, Brain } from "lucide-react";
import { useLocation } from "wouter";

export default function CaseStudies() {
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
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Studies</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Discover how JustGeTech's AI solutions have transformed businesses across different industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how our AI solutions have delivered measurable results for our clients
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Restaurant Chain Transformation</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A major restaurant chain was struggling with customer retention and employee management. They needed a comprehensive solution to streamline operations and improve customer experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">40%</div>
                      <div className="text-sm text-gray-600">Increase in Customer Retention</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">50%</div>
                      <div className="text-sm text-gray-600">Reduction in Management Time</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution Implemented:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom CRM & HRM software</li>
                      <li>• AI-powered customer analytics</li>
                      <li>• Automated employee scheduling</li>
                      <li>• Real-time performance tracking</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Improved customer satisfaction scores</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Streamlined order processing</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Better employee productivity</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reduced operational costs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">70% reduction in processing time</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Improved data accuracy</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Enhanced decision-making</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Increased operational efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Manufacturing Automation</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A manufacturing company was facing challenges with manual data processing and quality control. They needed an AI-powered solution to automate processes and improve efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">70%</div>
                      <div className="text-sm text-gray-600">Faster Processing</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">45%</div>
                      <div className="text-sm text-gray-600">Efficiency Increase</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution Implemented:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AI automation systems</li>
                      <li>• Predictive maintenance</li>
                      <li>• Quality control automation</li>
                      <li>• Real-time monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">E-commerce Platform Success</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    An e-commerce business was struggling with inventory management and customer support. They needed a comprehensive solution to scale their operations and improve customer experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">300%</div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">85%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution Implemented:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom e-commerce platform</li>
                      <li>• AI-powered inventory management</li>
                      <li>• Voice AI customer support</li>
                      <li>• Advanced analytics dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">300% increase in online sales</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Improved inventory accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reduced operational costs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join the success stories and discover how JustGeTech can help you achieve similar results.
          </p>
          <motion.button 
            onClick={navigateToContact}
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 