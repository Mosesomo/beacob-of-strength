import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/Tabs"
import {
  Brain,
  Home,
  Heart,
  Shield,
  Sparkles,
  Users,
  Briefcase,
  GraduationCap,
  Scale,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("mental-health")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
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

  const mentalHealthServices = [
    {
      title: "Addressing Unmet Needs",
      description:
        "We provide comprehensive mental health services to address the unmet needs of vulnerable women and girls, offering accessible, culturally sensitive, and gender-responsive services.",
      icon: <Brain className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Promoting Healing And Recovery",
      description:
        "Through evidence-based therapies and a trauma-informed approach, we facilitate the healing process for survivors of trauma, abuse, and adversity, helping them rebuild their lives.",
      icon: <Heart className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Breaking The Cycle Of Poverty And Abuse",
      description:
        "Mental health support plays a crucial role in breaking the cycles of poverty and abuse by addressing the underlying psychological impacts and building resilience.",
      icon: <Sparkles className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Empowerment And Education",
      description:
        "Our mental health programs empower women and girls with knowledge about mental wellness, coping strategies, and self-care, enabling them to take control of their wellbeing.",
      icon: <GraduationCap className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Creating Safe And Supportive Environments",
      description:
        "We create safe spaces where women and girls can express themselves freely, receive support without judgment, and begin their journey toward healing.",
      icon: <Shield className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Reducing Stigma",
      description:
        "Working to reduce the stigma around mental health issues through education, awareness, and advocacy, making it easier for women to seek help without fear of discrimination.",
      icon: <Users className="h-6 w-6 text-pink-600" />,
    },
  ]

  const shelterServices = [
    {
      title: "Safety And Protection",
      description:
        "Our shelters provide immediate safety and protection for women and children fleeing dangerous situations, with secure facilities and trained staff to ensure their wellbeing.",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      title: "Stability And Security",
      description:
        "Beyond immediate safety, we offer stability through consistent support, predictable routines, and a secure environment where women can begin to rebuild their lives.",
      icon: <Home className="h-6 w-6 text-white" />,
    },
    {
      title: "Supportive Environment",
      description:
        "Our shelters create a nurturing and supportive atmosphere where women are treated with dignity and respect, fostering healing and personal growth.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      title: "Empowerment And Independence",
      description:
        "By providing life skills training, financial literacy, and employment support, we help women develop the tools needed for long-term independence and self-sufficiency.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
    },
    {
      title: "Mental Health And Well-Being",
      description:
        "Integrated mental health services are available to address trauma, anxiety, depression, and other psychological impacts of abuse and displacement.",
      icon: <Brain className="h-6 w-6 text-white" />,
    },
    {
      title: "Breaking The Cycle Of Poverty",
      description:
        "Our comprehensive approach addresses the interconnected challenges of housing instability, poverty, and abuse, helping women break free from cycles of disadvantage.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8
      }
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1)
    const services = activeTab === "mental-health" ? mentalHealthServices : shelterServices
    setCurrentIndex((prev) => 
      prev === 0 ? services.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setDirection(1)
    const services = activeTab === "mental-health" ? mentalHealthServices : shelterServices
    setCurrentIndex((prev) => 
      prev === services.length - 1 ? 0 : prev + 1
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

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  return (
    <div className="" ref={ref}>
      {/* Hero Section with Background Image */}
      <div className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/37/cf/1e/37cf1e0eeff2e9ed56861d49f6195f64.jpg')",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-orange-700/60 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 font-display"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto font-body mb-8"
            >
              Comprehensive support for vulnerable women and girls through mental health services and safe shelter.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                className="bg-pink-600 hover:bg-pink-700 font-display flex items-center gap-2"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Request Services
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a href="#learn">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-display">
                  Learn More
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-white/80" />
        </motion.div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white py-8 shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="mental-health"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-3xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="mental-health" className="font-display text-lg">
                Mental Health Services
              </TabsTrigger>
              <TabsTrigger value="shelter" className="font-display text-lg">
                Shelter Services
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content Sections */}
      <div>
        {/* Mental Health Services */}
        <div className={activeTab === "mental-health" ? "block" : "hidden"}>
          <section id="learn" className="py-16 bg-sky-500">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">
                    FREE MENTAL HEALTH TREATMENT
                  </h2>
                  <p className="text-white text-lg mb-6 font-body">
                    By providing free mental health treatment, the Beacon of Strength Foundation addresses the critical
                    needs of vulnerable women and girls, offering comprehensive support for healing from trauma,
                    addiction, mental health challenges, and providing counseling, therapy, medication management and
                    support customized to needs.
                  </p>
                  <Button
                    className="text-sky-600 hover:bg-gray-100 font-display flex items-center gap-2"
                    onClick={() => (window.location.href = "/contact-us")}
                  >
                    Request Services
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <img
                    src="https://images.pexels.com/photos/30865266/pexels-photo-30865266/free-photo-of-women-running-in-colorful-dresses-on-track.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Mental Health Illustration"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Services Grid/Carousel */}
              {!isMobile ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {mentalHealthServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="bg-white rounded-lg shadow-md p-6 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="flex items-start mb-4">
                        <div className="mr-4 mt-1">{service.icon}</div>
                        <h3 className="text-xl font-bold text-sky-600 font-display">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 font-body">{service.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="relative md:hidden"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <div 
                    className="overflow-hidden touch-pan-y"
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
                        className="bg-white rounded-lg shadow-md p-6 mx-4"
                      >
                        <div className="flex items-start mb-4">
                          <div className="mr-4 mt-1">{mentalHealthServices[currentIndex].icon}</div>
                          <h3 className="text-xl font-bold text-sky-600 font-display">
                            {mentalHealthServices[currentIndex].title}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-body">
                          {mentalHealthServices[currentIndex].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex justify-between mt-6 px-4">
                    <button 
                      onClick={handlePrev}
                      className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="h-6 w-6 text-pink-600" />
                    </button>
                    
                    {/* Indicator Dots */}
                    <div className="flex items-center space-x-2">
                      {mentalHealthServices.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === index ? "bg-pink-600 scale-125" : "bg-gray-300"
                          }`}
                          aria-label={`Go to service ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleNext}
                      className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                      aria-label="Next service"
                    >
                      <ChevronRight className="h-6 w-6 text-pink-600" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </div>

        {/* Shelter Services */}
        <div className={activeTab === "shelter" ? "block" : "hidden"}>
          <section className="py-16 bg-pink-600">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-2 lg:order-1 flex justify-center"
                >
                  <img
                    src="https://i.pinimg.com/736x/54/0e/4a/540e4a9105cc00769d2137a73f2848c5.jpg"
                    alt="Shelter Illustration"
                    className="w-full object-cover h-100 rounded-lg shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="order-1 lg:order-2"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">FREE SHELTER</h2>
                  <p className="text-white text-lg mb-6 font-body">
                    Providing temporary, transitional, and long-term housing options for women and children experiencing
                    displacement or crisis. Our secure and caring shelter is a critical foundation for healing, growth,
                    and building new beginnings.
                  </p>
                  <Button
                    className=" text-pink-600 hover:bg-gray-100 font-display flex items-center gap-2"
                    onClick={() => (window.location.href = "/contact-us")}
                  >
                    Request Shelter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Services Grid/Carousel */}
              {!isMobile ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {shelterServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      className="bg-pink-700 rounded-lg shadow-md p-6 text-white h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="flex items-start mb-4">
                        <div className="mr-4 mt-1">{service.icon}</div>
                        <h3 className="text-xl font-bold font-display">{service.title}</h3>
                      </div>
                      <p className="text-white/90 font-body">{service.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="relative md:hidden"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <div 
                    className="overflow-hidden touch-pan-y"
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
                        className="bg-pink-700 rounded-lg shadow-md p-6 text-white mx-4"
                      >
                        <div className="flex items-start mb-4">
                          <div className="mr-4 mt-1">{shelterServices[currentIndex].icon}</div>
                          <h3 className="text-xl font-bold font-display">
                            {shelterServices[currentIndex].title}
                          </h3>
                        </div>
                        <p className="text-white/90 font-body">
                          {shelterServices[currentIndex].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex justify-between mt-6 px-4">
                    <button 
                      onClick={handlePrev}
                      className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="h-6 w-6 text-pink-600" />
                    </button>
                    
                    {/* Indicator Dots */}
                    <div className="flex items-center space-x-2">
                      {shelterServices.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === index ? "bg-white scale-125" : "bg-white/40"
                          }`}
                          aria-label={`Go to service ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleNext}
                      className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                      aria-label="Next service"
                    >
                      <ChevronRight className="h-6 w-6 text-pink-600" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-6 font-display"
            >
              Need Assistance?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-body"
            >
              Our team is available 24/7 to provide support and connect you with the services you need. All inquiries
              are confidential.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                className="bg-pink-600 hover:bg-pink-700 font-display"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Contact Us Now
              </Button>
              <Button
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 font-display"
                onClick={() => (window.location.href = "tel:+15551234567")}
              >
                Call Helpline: (555) 123-4567
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}