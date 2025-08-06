import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Briefcase, GraduationCap, Users, Zap, Brain, Code, Send, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    graduationYear: "",
    position: "",
    coverLetter: "",
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("Thank you for your application! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      university: "",
      course: "",
      graduationYear: "",
      position: "",
      coverLetter: "",
      resume: null
    });
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
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Team</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Build the future of AI with us. We're looking for passionate students and professionals to join our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join JustGeTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of our innovative team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Learn AI",
                description: "Gain hands-on experience with cutting-edge AI technologies and real-world applications."
              },
              {
                icon: Users,
                title: "Mentorship",
                description: "Work directly with experienced professionals and receive personalized guidance."
              },
              {
                icon: Zap,
                title: "Flexible Work",
                description: "Enjoy remote work opportunities and flexible schedules that fit your lifestyle."
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                description: "Build a strong foundation for your career with valuable experience and networking."
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect opportunities for students and recent graduates to kickstart their careers
            </p>
          </motion.div>

          {/* Currently No Hiring Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white p-12 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Currently No Open Positions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're not actively hiring at the moment, but we're always looking for talented individuals to join our team. 
                Feel free to submit your application below, and we'll keep it on file for future opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We typically offer internships and entry-level positions for students and recent graduates in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Roles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Engineer Intern</li>
                    <li>• Frontend Developer Intern</li>
                    <li>• Data Science Intern</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Roles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business Development Intern</li>
                    <li>• Marketing Intern</li>
                    <li>• Sales Intern</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            </motion.div> */}
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">Submit Your Application</h2>
            <p className="text-xl text-gray-600">
              Tell us about yourself and we'll keep your application on file for future opportunities
            </p> */}

          {/* <motion.form 
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="your.email@university.edu"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <Label htmlFor="university" className="text-sm font-medium text-gray-700">
                  University/Institution *
                </Label>
                <Input
                  id="university"
                  name="university"
                  type="text"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Your university name"
                />
              </div>
              
              <div>
                <Label htmlFor="course" className="text-sm font-medium text-gray-700">
                  Course of Study *
                </Label>
                <Input
                  id="course"
                  name="course"
                  type="text"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="e.g., Computer Science, Data Science"
                />
              </div>
              
              <div>
                <Label htmlFor="graduationYear" className="text-sm font-medium text-gray-700">
                  Expected Graduation Year *
                </Label>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="Graduated">Already Graduated</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                Preferred Position *
              </Label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select preferred position</option>
                <option value="AI Engineer Intern">AI Engineer Intern</option>
                <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                <option value="Data Science Intern">Data Science Intern</option>
                <option value="Business Development Intern">Business Development Intern</option>
                <option value="Marketing Intern">Marketing Intern</option>
                <option value="Sales Intern">Sales Intern</option>
                <option value="Other">Other (specify in cover letter)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-700">
                Cover Letter *
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                rows={6}
                className="mt-2"
                placeholder="Tell us about yourself, your interest in AI/technology, and why you'd be a great fit for JustGeTech..."
              />
            </div>
            
            <div className="mb-8">
              <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
                Resume/CV *
              </Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </motion.form> */}
        {/* </div> */}
      {/* </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Careers?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Get in touch with us to learn more about opportunities at JustGeTech
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>dhruvil@justgetech.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91-7802992523</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 