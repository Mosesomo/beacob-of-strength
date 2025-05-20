import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from 'react-router-dom'
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
  ChevronRight
} from "lucide-react"

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("mental-health")
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

  // This ensures animations trigger when component mounts
  useEffect(() => {
    // Force a small delay to ensure the useInView hook detects the element
    const timer = setTimeout(() => {
      window.scrollTo(window.scrollX, window.scrollY + 1);
      setTimeout(() => window.scrollTo(window.scrollX, window.scrollY - 1), 50);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
    {
      title: "Building Stronger Communities",
      description:
        "Strong mental health support contributes to healthier families and communities, creating a ripple effect that extends beyond the individual to positively impact society.",
      icon: <Briefcase className="h-6 w-6 text-pink-600" />,
    },
    {
      title: "Advancing Gender Equity",
      description:
        "By addressing the unique mental health challenges faced by women and girls, we contribute to greater gender equity in healthcare access and outcomes.",
      icon: <Scale className="h-6 w-6 text-pink-600" />,
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
    {
      title: "Preventing Homelessness",
      description:
        "For women at risk of homelessness, our early intervention services provide critical support to maintain housing stability and prevent crisis situations.",
      icon: <Home className="h-6 w-6 text-white" />,
    },
    {
      title: "Promoting Educational Opportunities",
      description:
        "Access to educational resources, GED programs, vocational training, and higher education support helps women build skills for sustainable careers.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
    },
    {
      title: "Building Community And Connection",
      description:
        "Our shelter programs foster a sense of community and belonging, reducing isolation and creating networks of support that extend beyond the shelter stay.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Advocating For Social Justice",
      description:
        "We engage in advocacy to address systemic barriers and promote policies that support women's rights, affordable housing, and economic justice.",
      icon: <Scale className="h-6 w-6 text-white" />,
    },
  ]

  // Function to handle slide navigation
  const nextSlide = (services) => {
    if (activeTab === "mental-health") {
      setCurrentSlide(prev => (prev === mentalHealthServices.length - (isMobile ? 1 : 3) ? 0 : prev + 1));
    } else {
      setCurrentSlide(prev => (prev === shelterServices.length - (isMobile ? 1 : 3) ? 0 : prev + 1));
    }
  };

  const prevSlide = (services) => {
    if (activeTab === "mental-health") {
      setCurrentSlide(prev => (prev === 0 ? mentalHealthServices.length - (isMobile ? 1 : 3) : prev - 1));
    } else {
      setCurrentSlide(prev => (prev === 0 ? shelterServices.length - (isMobile ? 1 : 3) : prev - 1));
    }
  };

  // Auto-advance slides with smooth transitions
  useEffect(() => {
    // Reset current slide when changing tabs
    setCurrentSlide(0);
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, activeTab]);

  // For desktop view, we show 3 cards at once
  const visibleCards = isMobile ? 1 : 3;
  const getCurrentServices = () => activeTab === "mental-health" ? mentalHealthServices : shelterServices;
  
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto font-body mb-8">
              Comprehensive support for vulnerable women and girls through mental health services and safe shelter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-pink-600 hover:bg-pink-700 font-display flex items-center gap-2"
                onClick={() => window.location.href = '/contact-us'}
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
                    onClick={() => window.location.href = '/contact-us'}
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
                    src="https://i.pinimg.com/736x/8a/15/11/8a1511ff8aef85298398176dcc412bfe.jpg"
                    alt="Mental Health Illustration"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Slideshow for services */}
              <div className="relative">
                <div className="overflow-hidden">
                  {/* On desktop, show 3 cards in a grid that slides */}
                  <div 
                    className={`flex transition-transform duration-500 ease-in-out ${isMobile ? '' : 'gap-6'}`}
                    style={{ transform: `translateX(-${(currentSlide * 100) / visibleCards}%)` }}
                  >
                    {mentalHealthServices.map((service, index) => (
                      <div 
                        key={index} 
                        className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 bg-white rounded-lg shadow-md p-6`}
                      >
                        <div className="flex items-start mb-4">
                          <div className="mr-4 mt-1">{service.icon}</div>
                          <h3 className="text-xl font-bold text-sky-600 font-display">{service.title}</h3>
                        </div>
                        <p className="text-gray-700 font-body">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button 
                      onClick={() => prevSlide(mentalHealthServices)}
                      className="bg-white/80 rounded-full p-2 ml-2 shadow-md hover:bg-white z-10"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6 text-pink-600" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button 
                      onClick={() => nextSlide(mentalHealthServices)}
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
                    // Mobile: individual dots for each slide
                    mentalHealthServices.map((_, index) => (
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
                    // Desktop: dots for possible positions
                    Array.from({ length: mentalHealthServices.length - visibleCards + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${
                          currentSlide === index ? "bg-pink-600" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))
                  )}
                </div>
              </div>
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
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Request Shelter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Slideshow for services */}
              <div className="relative">
                <div className="overflow-hidden">
                  {/* On desktop, show 3 cards in a grid that slides */}
                  <div 
                    className={`flex transition-transform duration-500 ease-in-out ${isMobile ? '' : 'gap-6'}`}
                    style={{ transform: `translateX(-${(currentSlide * 100) / visibleCards}%)` }}
                  >
                    {shelterServices.map((service, index) => (
                      <div 
                        key={index} 
                        className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 bg-pink-700 rounded-lg shadow-md p-6 text-white`}
                      >
                        <div className="flex items-start mb-4">
                          <div className="mr-4 mt-1">{service.icon}</div>
                          <h3 className="text-xl font-bold font-display">{service.title}</h3>
                        </div>
                        <p className="text-white/90 font-body">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button 
                      onClick={() => prevSlide(shelterServices)}
                      className="bg-white/80 rounded-full p-2 ml-2 shadow-md hover:bg-white z-10"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6 text-pink-600" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button 
                      onClick={() => nextSlide(shelterServices)}
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
                    // Mobile: individual dots for each slide
                    shelterServices.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${
                          currentSlide === index ? "bg-white" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))
                  ) : (
                    // Desktop: dots for possible positions
                    Array.from({ length: shelterServices.length - visibleCards + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${
                          currentSlide === index ? "bg-white" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-display">Need Assistance?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-body">
              Our team is available 24/7 to provide support and connect you with the services you need. All inquiries
              are confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-pink-600 hover:bg-pink-700 font-display"
                onClick={() => window.location.href = '/contact-us'}
              >
                Contact Us Now
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-600 text-pink-600 hover:bg-pink-50 font-display"
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                Call Helpline: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}