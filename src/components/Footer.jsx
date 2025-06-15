import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Heart, 
  Send, 
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-white">
      <div className="px-14 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src={Logo} className="object-cover h-42 w-auto" alt="Beacon of Strength Logo"></img>
            <h3 className="text-xl font-bold mb-4 font-display">Beacon of Strength</h3>
            <p className="text-gray-400 mb-4 font-body">
              Empowering individuals through support, education, and community building to create lasting positive
              change.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-body"
                >
                  <ExternalLink className="h-3 w-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-body"
                >
                  <ExternalLink className="h-3 w-3" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-body"
                >
                  <ExternalLink className="h-3 w-3" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-body"
                >
                  <ExternalLink className="h-3 w-3" />
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-body"
                >
                  <ExternalLink className="h-3 w-3" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Contact Us</h3>
            <ul className="space-y-3 font-body text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-pink-600" />
                <div>
                  <span className="font-semibold text-white">Email Address</span>
                  <p>info@beacon-of-strength-foundation.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-pink-600" />
                <div>
                  <span className="font-semibold text-white">Phone</span>
                  <p>602-756-9959</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-pink-600" />
                <div>
                  <span className="font-semibold text-white">Address</span>
                  <p>1017 S Gilbert Rd Ste 213, Mesa AZ 85204</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-center text-sm font-body">
            &copy; {new Date().getFullYear()} Beacon of Strength Foundation. All rights reserved. | Designed by CarlteQ
          </p>
        </div>
      </div>
    </footer>
  );
}