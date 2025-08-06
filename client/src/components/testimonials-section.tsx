import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "JustGeTech's CRM & HRM software transformed our restaurant chain operations. We saw a 40% increase in customer retention and 50% reduction in employee management time within 3 months.",
    name: "Sarah Johnson",
    role: "Educational Platform Director",
    industry: "Education Industry",
    rating: 5,
    service: "CRM & HRM Software",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4"
  },
  {
    quote: "Their AI automation systems reduced our manual processing time by 70%. The predictive analytics feature helped us identify market trends before our competitors. Exceptional ROI within the first quarter.",
    name: "Michael Chen",
    role: "Tech Solutions Architect",
    industry: "Technology & SaaS",
    rating: 5,
    service: "AI Automation Systems",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=c0aede"
  },
  {
    quote: "The e-commerce platform JustGeTech built for us increased our online sales by 300% in the first year. The AI-powered inventory management and customer support chatbot have been game-changers.",
    name: "Priya Patel",
    role: "E-commerce Founder",
    industry: "Retail & E-commerce",
    rating: 4,
    service: "E-commerce Development",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffdfbf"
  },
  {
    quote: "JustGeTech's business management software streamlined our operations, leading to a significant boost in efficiency and profitability. Their team was incredibly supportive throughout the implementation.",
    name: "David Lee",
    role: "Manufacturing Operations Manager",
    industry: "Manufacturing",
    rating: 5,
    service: "Business Management Software",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=ffd5dc"
  },
  {
    quote: "The voice AI agents developed by JustGeTech revolutionized our customer support. We've seen a dramatic improvement in response times and customer satisfaction scores.",
    name: "Emily White",
    role: "Customer Service Lead",
    industry: "Customer Service",
    rating: 4,
    service: "Voice AI Agents",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=d1ecf1"
  },
  {
    quote: "Their custom AI solution for our automotive diagnostics was precise and highly effective. It has significantly reduced our diagnostic time and improved accuracy.",
    name: "Robert Green",
    role: "Automotive Engineer",
    industry: "Automotive",
    rating: 5,
    service: "Custom AI Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=d4edda"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        > */}
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from businesses that have transformed their operations with JustGeTech's AI-powered solutions.
          </p> */}
        {/* </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background pattern for card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Quote className="text-purple-500 w-10 h-10 mb-4" />
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.industry}</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">{testimonial.rating}/5</span>
                </div>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* JustGeTech by the Numbers */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">JustGeTech by the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-5xl font-extrabold text-purple-600 mb-2">250%+</p>
              <p className="text-lg text-gray-700">Average ROI for Clients</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-5xl font-extrabold text-indigo-600 mb-2">98%</p>
              <p className="text-lg text-gray-700">Client Satisfaction Rate</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-5xl font-extrabold text-pink-600 mb-2">50+</p>
              <p className="text-lg text-gray-700">Successful AI Implementations</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Success Story?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Join the growing list of businesses transforming with JustGeTech's AI solutions.
          </p>
          <motion.button
            onClick={() => window.location.href = '/#contact'}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
