import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "../components/ui/Button"
import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-pink-600 w-full text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our Leadership</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">DR. MARY NDUNGU</h3>
            <p className="text-lg mb-4 font-body">
              Dr. Mary Ndungu, DNP, PMHNP-BC is the CEO and President of Beacon of Strength Foundation. She is also the
              CEO and Founder of Simply Serene Behavioral Health dba Simply Serene Wellness Center and Simply Serene
              Recovery Center.
            </p>
            <p className="text-lg mb-6 font-body">
              Dr. Mary Ndungu is also the CEO for Restorative Psych LLC DBA Restorative Psych Wellness Center AZ Office.
              Dr. Ndungu is currently an ANCC board certified Doctor of Nursing Practice and has inpatient and
              outpatient experience treating children, adolescents, adults, and geriatric patients with psychiatric and
              addiction and substance abuse spectrum. She treats psychiatric conditions and prescribes and manages
              patients' medication follow ups as well as collaborate with other providers for any referrals. Dr. Ndungu
              is also a trained psychotherapist, and besides psychiatric services, she also spends time with patients
              offering therapeutic counseling. She is Licensed in both the states of Arizona and Texas.
            </p>
            <Link to='/profile'>
              <Button className="hover:bg-gray-100 font-display  flex items-center gap-2">
                View Profile
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/dr-mary-e1719692559315-758x1024.webp"
              alt="Dr. Mary Ndugu"
              className="rounded-lg shadow-md object-cover w-full h-140"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
