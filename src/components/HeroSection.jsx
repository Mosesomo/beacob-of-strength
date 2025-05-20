import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Heart, ArrowRight, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image with responsive handling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/85/ac/88/85ac886c4db8c4c86fa59abacf9b789d.jpg" 
          alt="Diverse women background" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-orange-700/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-display text-center lg:text-left"
            >
              Your Strength is Their Hope
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 font-body text-center lg:text-left"
            >
              Join Us in Making a Difference. Together we can create a brighter future for those in need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className="bg-pink-600 hover:bg-pink-700 text-white font-display flex items-center gap-2 justify-center w-full sm:w-auto"
              >
                <Heart className="h-4 w-4" />
                Get Involved
              </Button>
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-display flex items-center gap-2 justify-center w-full sm:w-auto"
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
            {/* Content for the right side - leaving empty as in original */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce p-2 bg-white/10 rounded-full cursor-pointer">
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </div>
      </motion.div>
    </section>
  )
}