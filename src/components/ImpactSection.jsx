import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Building, Clock, TrendingUp, CheckCircle } from "lucide-react"

// Counter component for animating statistics
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    if (!isAnimating) return;
    
    let startTime = null;
    let animationFrame;
    
    // Clean numeric value for calculations
    const endValue = parseInt(end.replace(/\D/g, ""), 10);
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isAnimating]);
  
  useEffect(() => {
    // Start animation when component mounts
    setIsAnimating(true);
  }, []);
  
  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return <>{formattedCount}{suffix}</>;
};

// Animated progress bar component
const AnimatedProgress = ({ value, duration = 1500 }) => {
  const [currentValue, setCurrentValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    if (!isAnimating) return;
    
    let startTime = null;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCurrentValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isAnimating]);
  
  useEffect(() => {
    // Start animation when component mounts
    setIsAnimating(true);
  }, []);
  
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className="h-full bg-pink-600 transition-all duration-300 ease-out"
        style={{ width: `${currentValue}%` }}
      />
    </div>
  );
};

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { label: "People Helped", value: "5,000+", icon: <Users className="h-8 w-8 text-pink-600" />, suffix: "+" },
    { label: "Communities Served", value: "25+", icon: <Building className="h-8 w-8 text-pink-600" />, suffix: "+" },
    { label: "Volunteer Hours", value: "10,000+", icon: <Clock className="h-8 w-8 text-pink-600" />, suffix: "+" },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="h-8 w-8 text-pink-600" />, suffix: "%" },
  ]

  const programs = [
    { name: "Youth Empowerment", progress: 85 },
    { name: "Women's Support", progress: 92 },
    { name: "Community Outreach", progress: 78 },
    { name: "Crisis Response", progress: 88 },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Our Impact</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body">
            Through dedication and community support, we've made a meaningful difference in thousands of lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-pink-600 mb-1 font-display">
                {isInView && <Counter end={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-gray-600 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 font-display">Program Success Rates</h3>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium font-display">{program.name}</span>
                    <span className="text-pink-600 font-medium font-display">
                      {isInView && <Counter end={program.progress.toString()} suffix="%" duration={1500} />}
                    </span>
                  </div>
                  {isInView && <AnimatedProgress value={program.progress} />}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <img
                src="https://i.pinimg.com/736x/26/79/e9/2679e95ac41462d6dbd51e795d218fd7.jpg"
                alt="Community impact"
                className="rounded-lg shadow-md h-90 w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 font-display">Our Reach</h3>
            <p className="text-gray-700 mb-6 font-body">
              Since our founding, we've expanded our services to reach more communities in need. Our approach focuses on
              sustainable impact and long-term change.
            </p>
            <ul className="space-y-3">
              {[
                "Established programs in 25+ communities",
                "Trained 200+ community leaders",
                "Developed partnerships with 50+ organizations",
                "Created sustainable support systems in underserved areas",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}