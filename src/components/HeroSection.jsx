import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Heart, ArrowRight, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://i.pinimg.com/736x/85/ac/88/85ac886c4db8c4c86fa59abacf9b789d.jpg" alt="Diverse women background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-orange-700/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-display"
            >
              Your Strength is Their Hope
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-100 font-body"
            >
              Join Us in Making a Difference. Together we can create a brighter future for those in need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white font-display flex items-center gap-2"
              >
                <Heart className="h-4 w-4" />
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-display flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce p-2 bg-white/10 rounded-full">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  )
}
