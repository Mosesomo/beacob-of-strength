import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Heart, Shield, Users } from "lucide-react"
import { Button } from "../components/ui/Button"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Modern stats data
  const stats = [
    { value: "500+", label: "Shelter Residents", icon: <Heart className="w-6 h-6 text-pink-500" /> },
    { value: "1K+", label: "Counseling Sessions", icon: <Sparkles className="w-6 h-6 text-pink-500" /> },
    { value: "50+", label: "Trained Staff", icon: <Users className="w-6 h-6 text-pink-500" /> },
    { value: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6 text-pink-500" /> }
  ]

  return (
    <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern header with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold tracking-wider text-pink-600 uppercase">
            Our Foundation
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-display">
            Building Hope, Transforming Lives
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Modern grid layout with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section with modern frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Community support"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                <Heart className="w-8 h-8" />
              </div>
            </div>
          </motion.div>

          {/* Content section with modern typography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 font-body">
                <span className="font-semibold text-pink-600">Beacon of Strength Foundation</span> is revolutionizing 
                community support through innovative shelter solutions and accessible mental health services. 
                We're not just providing aid—we're creating sustainable pathways to stability and empowerment.
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
                <p className="text-gray-700 italic font-medium">
                  "Our vision extends beyond temporary relief—we're building a movement that addresses the root causes 
                  of homelessness and mental health challenges through comprehensive, compassionate care."
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 font-body">
                    Trauma-informed shelter environments designed for healing
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 font-body">
                    Evidence-based mental health programs at no cost
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 font-body">
                    Community partnerships for long-term impact
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Modern stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-pink-50 text-pink-600">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-900">{stat.value}</h3>
              <p className="mt-2 text-sm font-medium text-center text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Modern CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">Ready to make a difference?</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join our movement to create lasting change in our community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-3  font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Donate Now
            </Button>
            <button className="px-8 py-3 bg-white text-pink-600 font-medium rounded-lg border border-pink-200 hover:bg-pink-50 transition-all duration-300">
              Volunteer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}