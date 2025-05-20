import { useRef, useState, useEffect } from "react"
import { Button } from "../components/ui/Button"
import { motion, useInView } from "framer-motion"
import { Heart, Shield, Briefcase, Users, Scale, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

 // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  
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
  
   const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reasons.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reasons.length - 1 : prev - 1))
  }

  // Auto-advance slides with smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [currentSlide])

  // For desktop view, we show 3 cards at once
  const visibleCards = isMobile ? 1 : 3
  const startIndex = isMobile ? currentSlide : (currentSlide % (reasons.length - visibleCards + 1))


  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
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

        {/* Slideshow for all screen sizes */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* On desktop, show 3 cards in a grid that slides */}
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isMobile ? '' : 'gap-8'}`}
              style={{ transform: `translateX(-${(startIndex * 100) / visibleCards}%)` }}
            >
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={reason.image || "/api/placeholder/400/320"}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{reason.icon}</div>
                      <h3 className="text-xl font-bold text-pink-600 font-display">{reason.title}</h3>
                    </div>
                    <p className="text-gray-700 font-body">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevSlide}
                className="bg-white/80 rounded-full p-2 ml-2 shadow-md hover:bg-white z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-pink-600" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextSlide}
                className="bg-white/80 rounded-full p-2 mr-2 shadow-md hover:bg-white z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-pink-600" />
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {isMobile ? (
              // Mobile: 6 dots for 6 individual slides
              reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentSlide === index ? "bg-pink-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))
            ) : (
              // Desktop: 4 dots for 4 possible positions (0,1,2,3)
              Array.from({ length: reasons.length - visibleCards + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    startIndex === index ? "bg-pink-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}