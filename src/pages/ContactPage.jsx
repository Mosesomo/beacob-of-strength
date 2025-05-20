import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Textarea } from "../components/ui/TextArea"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, ChevronDown } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="" ref={ref}>
      {/* Hero Section with Background Image */}
      <div className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('https://i.pinimg.com/736x/49/79/c4/4979c4b0f41c6c7843e936c282a7b98f.jpg')",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-orange-700/60 mix-blend-multiply" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Contact Us</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto font-body mb-8">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button className="bg-pink-600 hover:bg-pink-700 font-display flex items-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#info">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-display">
                    Our Locations
                    <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/80" />
        </motion.div>
      </div>

      {/* Contact Form and Info Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-display">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 font-body">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 font-body">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="font-body" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 font-body">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" className="font-body" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 font-body">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} className="font-body" />
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 font-display flex items-center gap-2 justify-center">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div id="info" className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-display">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-pink-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 font-display">Email</h4>
                      <p className="text-gray-600 font-body">info@beacon-of-strength-foundation.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-pink-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 font-display">Phone</h4>
                      <p className="text-gray-600 font-body">602-756-9959</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-pink-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 font-display">Address</h4>
                      <p className="text-gray-600">
                        1017 S Gilbert Rd
                        <br />
                        Ste 213
                        <br />
                        Mesa AZ 85204
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-display">Hours of Operation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium font-display flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-pink-600" />
                      Monday - Friday
                    </span>
                    <span className="font-body">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium font-display flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-pink-600" />
                      Saturday
                    </span>
                    <span className="font-body">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium font-display flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-pink-600" />
                      Sunday
                    </span>
                    <span className="font-body">Closed</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-pink-600 font-medium font-display flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      24/7 Crisis Support Line: 602-756-9959
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}