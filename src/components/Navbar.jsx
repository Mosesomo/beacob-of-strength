import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { cn } from "../components/lib/utils"
import { Button } from "../components/ui/Button"
import { Menu, X, Heart, Sparkles } from "lucide-react"
import Logo from '../assets/logo.png'

const navItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact-us" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-0" : "bg-transparent py-0",
      )}
    >
      <div className="container mx-auto px-2 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-pink-600 font-display"
          >
            <img src={Logo} className="object-cover h-24 w-auto" alt="Logo" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className={cn(
                  "text-base font-medium transition-colors hover:text-pink-600 font-display",
                  isScrolled ? "text-gray-800" : "text-white",
                  location.pathname === item.to ? "text-pink-600" : ""
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
            <Link to="/contact-us">
              <Button className="bg-pink-600 hover:bg-pink-700 font-display flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Get Involved
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pink-600" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={cn(
                  "text-gray-800 font-medium py-2 hover:text-pink-600 font-display",
                  location.pathname === item.to ? "text-pink-600" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact-us">
              <Button 
                className="bg-pink-600 hover:bg-pink-700 w-full font-display flex items-center justify-center gap-2"
              >
                <Heart className="h-4 w-4" />
                Get Involved
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}