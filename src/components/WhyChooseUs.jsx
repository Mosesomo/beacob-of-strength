import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Heart, Shield, Briefcase, Users, Scale, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Enhanced slide variants for mobile carousel
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      },
    }),
  }

  const reasons = [
    {
      title: "Empowerment",
      description:
        "The foundation empowers women and young girls by providing resources, education, and support they need to reach their true full potential. This commitment to empowerment leads to lasting progress and efficiency and resilience.",
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/g696f4ae18d0878cdfca39c6676815d8dd457aa398ad4390f2334a9e2e5374b06d10853c18dc19302af966386bb5e37bddea00744924cdef8d2cfdc5e6fed0b68_1280-5519043.jpg",
    },
    {
      title: "Safety And Security",
      description:
        "Recognizing the heightened vulnerability faced by many women, the foundation prioritizes creating safe and secure environments where they can feel protected and free from fear of harm or exploitation.",
      icon: <Shield className="h-8 w-8 text-pink-600" />,
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/gabd3edb47a432b113a3f3c4d985c5c6c3ff5928be4f5b79ef572bc2222aa7d7f45496c0aabef369ba7b3a6a2cda85d9aa896786d20e8a76a9bf8322a7fa018d4_1280-2001566.jpg",
    },
    {
      title: "Comprehensive Support",
      description:
        "Encompassing mental health services, education, and practical assistance, this comprehensive approach ensures that individuals receive integrated support to overcome their unique challenges.",
      icon: <Briefcase className="h-8 w-8 text-pink-600" />,
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/pexels-photo-4483669-4483669.jpg",
    },
    {
      title: "Community & Connection",
      description:
        "Through fostering a sense of community and social support where it may not exist, the foundation creates environments where women and young girls can connect, share experiences, and draw strength from one another, reducing isolation and empowerment.",
      icon: <Users className="h-8 w-8 text-pink-600" />,
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/pexels-photo-6646988-6646988.jpg",
    },
    {
      title: "Advocacy & Social Justice",
      description:
        "Beyond direct service provision, the foundation advocates for systemic change and social justice, working to dismantle barriers and create more equitable societies where women's rights are upheld for vulnerable populations.",
      icon: <Scale className="h-8 w-8 text-pink-600" />,
      image: "https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/g4fe40ceb468a1efda781583e17421273e2de83772f0e152dd3224f52b1414b436025138d0ca30a8d61e70eecac9cbca11ded44166f38296db08c0d8385009b96_1280-2755765.jpg",
    },
    {
      title: "Innovation & Adaptability",
      description:
        "Committed to continual improvement, the foundation remains responsive to emerging needs and challenges, staying agile with the approach to effectively address evolving social issues affecting vulnerable populations.",
      icon: <Lightbulb className="h-8 w-8 text-pink-600" />,
      image: "https://i.pinimg.com/736x/11/d1/ba/11d1ba1d63ad0279f19cb85c6a7b34cb.jpg",
    },
  ]

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => 
      prev === 0 ? reasons.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => 
      prev === reasons.length - 1 ? 0 : prev + 1
    )
  }

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext()
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev()
    }
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % reasons.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reasons.length])

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500 font-display">
            Why Beacon Of Strength Foundation?
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body">
            The Beacon of Strength Foundation exists to address critical gaps in support and services for vulnerable
            women and young girls, affirming a vital lifeline through its commitment to:
          </p>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        {!isMobile && (
          <motion.div
            className="hidden md:grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-pink-600 font-display">{reason.title}</h3>
                  </div>
                  <p className="text-gray-700 font-body">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Mobile View - Carousel */}
        {isMobile && (
          <motion.div 
            className="relative md:hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <div 
              className="overflow-hidden touch-pan-y px-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-sm"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={reasons[currentIndex].image}
                      alt={reasons[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{reasons[currentIndex].icon}</div>
                      <h3 className="text-xl font-bold text-pink-600 font-display">{reasons[currentIndex].title}</h3>
                    </div>
                    <p className="text-gray-700 font-body">{reasons[currentIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between mt-8 px-4">
              <button 
                onClick={handlePrev}
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Previous reason"
              >
                <ChevronLeft className="h-6 w-6 text-pink-600" />
              </button>
              
              {/* Indicator Dots */}
              <div className="flex items-center space-x-2">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? "bg-pink-600 scale-125" 
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to reason ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Next reason"
              >
                <ChevronRight className="h-6 w-6 text-pink-600" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}