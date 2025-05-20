import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "../components/ui/Button"
import { ArrowRight } from "lucide-react"
import { div } from "framer-motion/client"

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div>
    <section className="" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 font-display">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 font-body">
              To empower and uplift vulnerable women and young girls by providing comprehensive support, including free
              mental health services, addiction recovery programs, education, and safe shelter, fostering resilience,
              self-worth, and empowering them to overcome adversity, heal emotionally, and build a foundation for a
              brighter, more secure future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700 font-display">View Our Services</Button>
              <Button
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 font-display flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://beacon-of-strength-foundation.com/wp-content/uploads/2024/07/removal.ai_422f27a4-c342-4de8-97b3-8f6bbe69d3e7-africa-black-woman-empowerment-vector.png"
              alt="Women empowerment illustration"
              className="rounded-lg shadow-md w-full h-120"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://beacon-of-strength-foundation.com/wp-content/uploads/2024/07/removal.ai_2c12e685-f4d1-4552-be65-33e1176b1130-vector.png"
              alt="Woman empowerment illustration"
              className="rounded-lg shadow-md w-full h-120"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 font-display">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 font-body">
              To create a world where every vulnerable woman and girl, regardless of her circumstances, has access to
              the resources and support needed to overcome adversity, achieve mental well-being through access to free
              mental health treatment, has the opportunity to thrive in a safe, supportive, and empowering environment,
              enabling them to heal, grow and maximize her full potential, allowing her to build a brighter, more secure
              future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}
