import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Mail,
  Phone,
  Calendar,
  FileText,
  ExternalLink,
  Quote,
} from "lucide-react"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"

export default function ProfilePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const achievements = [
    "ANCC board certified Doctor of Nursing Practice",
    "Licensed in both Arizona and Texas",
    "Extensive experience in psychiatric and addiction treatment",
    "Trained psychotherapist",
    "CEO of multiple healthcare organizations",
  ]

  const experiences = [
    {
      title: "CEO and President",
      organization: "Beacon of Strength Foundation",
      period: "2018 - Present",
      description:
        "Leading the foundation's mission to support vulnerable women and girls through mental health services and shelter programs.",
    },
    {
      title: "CEO and Founder",
      organization: "Simply Serene Behavioral Health",
      period: "2015 - Present",
      description: "Established and leads Simply Serene Wellness Center and Simply Serene Recovery Center.",
    },
    {
      title: "CEO",
      organization: "Restorative Psych LLC DBA Restorative Psych Wellness Center AZ Office",
      period: "2016 - Present",
      description: "Oversees operations and clinical services for mental health treatment center.",
    },
  ]

  const education = [
    {
      degree: "Doctor of Nursing Practice (DNP)",
      specialization: "PMHNP-BC",
      institution: " Walden University Minneapolis",
      year: "2012",
    },
  ]

  const specialties = [
    "Child & Adolescent Psychiatry",
    "Adult Psychiatry",
    "Geriatric Psychiatry",
    "Addiction Treatment",
    "Substance Abuse",
    "Trauma-Informed Care",
    "Psychotherapy",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100" ref={ref}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <img src="https://beacon-of-strength-foundation.com/wp-content/uploads/2024/06/dr-mary-e1719692559315-758x1024.webp" alt="Dr. Mary Ndugu" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-display">Dr. Mary Ndungu</h1>
                <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">DNP</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">PMHNP-BC</Badge>
                </div>
              </div>
              <h2 className="text-2xl font-light mb-6 font-body">CEO and President, Beacon of Strength Foundation</h2>
              <p className="text-white/90 max-w-2xl font-body">
                A dedicated healthcare leader with extensive experience in mental health and addiction treatment,
                committed to providing compassionate care and creating supportive environments for vulnerable
                populations.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 font-display">
                  <Award className="h-5 w-5 text-pink-600" />
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 font-body">
                      <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-pink-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 font-display">
                  <GraduationCap className="h-5 w-5 text-pink-600" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4 font-body">
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.specialization}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    {/*<p className="text-gray-500 text-sm">Graduated: {edu.year}</p>*/}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 font-display">
                  <Heart className="h-5 w-5 text-pink-600" />
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty, index) => (
                    <Badge key={index} className="bg-pink-100 text-pink-800 hover:bg-pink-200 font-body">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 font-display">
                  <Briefcase className="h-5 w-5 text-pink-600" />
                  Professional Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-pink-200 font-body">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pink-600"></div>
                      <h4 className="font-semibold text-gray-800 text-lg">{exp.title}</h4>
                      <p className="text-pink-600 font-medium">{exp.organization}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
                        {/*<Calendar className="h-4 w-4" />*/}
                        {/*{exp.period}*/}
                      </p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 font-display">
                  <FileText className="h-5 w-5 text-pink-600" />
                  Professional Biography
                </h3>
                <div className="space-y-4 font-body text-gray-700">
                  <p>
                    Dr. Mary Ndungu, DNP, PMHNP-BC is the CEO and President of Beacon of Strength Foundation. She is
                    also the CEO and Founder of Simply Serene Behavioral Health dba Simply Serene Wellness Center and
                    Simply Serene Recovery Center.
                  </p>
                  <p>
                    Dr. Mary Ndungu is also the CEO for Restorative Psych LLC DBA Restorative Psych Wellness Center AZ
                    Office. Dr. Ndungu is currently an ANCC board certified Doctor of Nursing Practice and has inpatient
                    and outpatient experience treating children, adolescents, adults, and geriatric patients with
                    psychiatric and addiction and substance abuse spectrum.
                  </p>
                  <p>
                    She treats psychiatric conditions and prescribes and manages patients' medication follow ups as well
                    as collaborate with other providers for any referrals. Dr. Ndungu is also a trained psychotherapist,
                    and besides psychiatric services, she also spends time with patients offering therapeutic
                    counseling. She is Licensed in both the states of Arizona and Texas.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-600 mt-6">
                    <div className="flex items-start">
                      <Quote className="h-6 w-6 text-pink-600 mr-2 flex-shrink-0" />
                      <p className="italic text-gray-700">
                        "My mission is to create accessible mental healthcare for all, especially those who are most
                        vulnerable. Through compassion and evidence-based treatment, we can transform lives and build
                        stronger communities."
                      </p>
                    </div>
                    <p className="text-right text-pink-600 font-medium mt-2">— Dr. Mary Ndugu</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-md p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-display">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-white/90">
                        1017 S Gilbert Rd
                        <br />
                        Ste 213
                        <br />
                        Mesa AZ 85204
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/90">
                        info@beacon-of-strength-foundation.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-white/90">
                        Office: 602-756-9959
                        <br />
                        Assistant: 602-756-9959
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <Button className=" text-pink-600 hover:bg-gray-100 font-display flex items-center gap-2">
                      Schedule a Consultation
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
