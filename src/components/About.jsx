import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-10 w-full text-white" ref={ref}>
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600 font-display">About Us</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-6 font-body text-gray-700"
          >
            Beacon Of Strength Foundation is dedicated to making a positive impact in our community by providing
            essential support to those in need. Our mission is to create safe and welcoming shelters and to offer free
            mental health services for individuals who are less fortunate or unable to afford these crucial resources.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-6 font-body text-gray-700"
          >
            Founded with compassion and driven by a commitment to social welfare, we strive to create an environment
            where everyone has access to the help they need. Our shelters offer a secure haven for those facing
            homelessness, providing not just a roof over their heads but also a sense of stability and hope for a better
            future.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg font-body"
          >
            In addition to our shelter services, we prioritize mental health by offering comprehensive, no-cost
            counseling and support. Our team of dedicated professionals works tirelessly to ensure that mental health
            care is accessible to all, fostering a healthier and more resilient community.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
