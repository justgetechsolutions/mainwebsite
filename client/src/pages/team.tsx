import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Users, Bot, Code, Brain, Shield, Zap } from "lucide-react";

export default function Team() {
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Team</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate experts behind JustGeTech's innovative AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with industry knowledge to deliver cutting-edge AI solutions that drive real business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Leadership",
                description: "Experienced leaders guiding our vision and strategy for AI innovation and business growth."
              },
              {
                icon: Bot,
                title: "AI Engineers",
                description: "Specialized AI engineers developing intelligent solutions and machine learning models."
              },
              {
                icon: Code,
                title: "Software Developers",
                description: "Full-stack developers building robust, scalable applications and platforms."
              },
              {
                icon: Brain,
                title: "Data Scientists",
                description: "Data experts creating predictive models and analytics solutions for business insights."
              },
              {
                icon: Shield,
                title: "Security Specialists",
                description: "Security professionals ensuring our solutions meet the highest security standards."
              },
              {
                icon: Zap,
                title: "DevOps Engineers",
                description: "Infrastructure experts maintaining reliable, high-performance systems and deployments."
              }
            ].map((team, index) => {
              const IconComponent = team.icon;
              return (
                <motion.div
                  key={team.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{team.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{team.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leader driving JustGeTech's mission to democratize AI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Chauhan Dhruvil</h3>
                    <p className="text-indigo-100">Founder & CEO</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">About Chauhan</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Chauhan Dhruvil is the visionary founder and CEO of JustGeTech. With a deep passion for artificial intelligence and business transformation, Chauhan leads our mission to democratize AI technology and make it accessible to businesses of all sizes.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Under Chauhan's leadership, JustGeTech has developed innovative AI solutions that have helped numerous businesses streamline operations, improve efficiency, and drive growth through intelligent automation and data-driven insights.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Expertise</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI & Machine Learning</li>
                        <li>• Business Strategy</li>
                        <li>• Technology Leadership</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Contact</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• dhruvil@justgetech.com</li>
                        <li>• +91-7802992523</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation-Driven</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We encourage creative thinking and experimentation, constantly pushing the boundaries of what's possible with AI technology.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular innovation workshops</li>
                <li>• Hackathons and idea competitions</li>
                <li>• Continuous learning programs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Environment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in the power of teamwork and collaboration, working together to deliver exceptional solutions for our clients.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cross-functional teams</li>
                <li>• Open communication channels</li>
                <li>• Knowledge sharing sessions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Are you passionate about AI and technology? We're always looking for talented individuals to join our mission.
          </p>
          <motion.button 
            onClick={() => window.location.href = '/careers'}
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 