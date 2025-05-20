import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar" // Make sure the path is correct
import Home from "./components/Home"
import ServicesPage from "./pages/ServicePage"
import ProfilePage from "./pages/ProfilePage" 
import ContactSection from "./pages/ContactPage"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactSection />} />
        {/* You might want to add a route for the donate page too */}
        <Route path="/donate" element={<div className="pt-32 text-center">Donation Page</div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App