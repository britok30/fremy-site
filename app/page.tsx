"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Car,
  Users,
  MapPin,
  TrendingUp,
  Briefcase,
  Mail,
  Phone,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60"
      >
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("hero")}
            className="p-0 hover:bg-transparent"
          >
            <span className="text-xl font-bold">Fremy Rosso</span>
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {["about", "expertise", "ventures", "contact"].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium capitalize"
              >
                {section}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop CTA Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {["about", "expertise", "ventures", "contact"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className="justify-start capitalize"
                >
                  {section}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-4"
              >
                Get In Touch
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-20 md:py-28 overflow-hidden">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-zinc-950 to-zinc-900/30"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10"
          >
            <motion.div variants={itemVariants} className="md:w-1/2 space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Entrepreneur, <br />
                <span className="text-zinc-100">
                  Real Estate Strategist
                </span>, <br />
                Visionary Founder
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-zinc-400"
              >
                Building businesses that create wealth and freedom through smart
                investing
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={() => scrollToSection("ventures")}
                  variant="default"
                  className="border border-zinc-500"
                >
                  Explore My Ventures
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Connect With Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              variants={itemVariants}
              className="md:w-1/2 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-700 bg-zinc-900">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Fremy Rosso - Entrepreneur and Real Estate Strategist"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
                About Me
              </h2>
              <Separator className="w-20 mx-auto mb-6 bg-zinc-700" />
              <p className="text-lg text-zinc-300">
                I'm Fremy Rosso — an entrepreneur, real estate strategist, and
                founder of multiple ventures focused on reshaping the way people
                invest, travel, and connect with opportunity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-zinc-400">
                  With a foundation rooted in hustle, vision, and long-term
                  thinking, I've dedicated my career to building businesses that
                  solve real problems while helping people grow wealth and
                  freedom through smart investing.
                </p>
                <p className="text-zinc-400">
                  My core focus is helping investors across the U.S. discover
                  and secure profitable real estate opportunities. Whether
                  you're new to investing or scaling a portfolio, I specialize
                  in locating undervalued or high-potential properties in both
                  on-market and off-market spaces.
                </p>
                <p className="text-zinc-400">
                  I also dabble in hard money loan sales, connecting investors
                  with funding options that help close deals quickly and
                  efficiently. I understand both sides of the deal: finding the
                  property and finding the money — and I bring those worlds
                  together.
                </p>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: Building2,
                    title: "Real Estate",
                    description:
                      "Sourcing profitable investment opportunities nationwide",
                  },
                  {
                    icon: Car,
                    title: "Turo Business",
                    description: "Managing a successful car rental operation",
                  },
                  {
                    icon: Users,
                    title: "Klub Rideshare",
                    description:
                      "Launching a revolutionary subscription-based platform",
                  },
                  {
                    icon: TrendingUp,
                    title: "Investor Strategy",
                    description:
                      "Helping clients make smarter investment decisions",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <Card className="h-full bg-zinc-800 border-zinc-700">
                      <CardHeader>
                        <item.icon className="h-10 w-10 text-zinc-100 mb-2" />
                        <CardTitle className="text-lg text-zinc-50">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-zinc-400">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
                My Expertise
              </h2>
              <Separator className="w-20 mx-auto mb-6 bg-zinc-700" />
              <p className="text-lg text-zinc-300">
                Specialized skills and knowledge developed through years of
                entrepreneurial experience
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: MapPin,
                  title: "Real Estate Lead Generation",
                  description:
                    "I specialize in sourcing leads, motivated sellers, and creative finance opportunities across multiple U.S. markets using strategic marketing, data-driven targeting, and AI-powered tools.",
                },
                {
                  icon: TrendingUp,
                  title: "Marketing & Deal Flow",
                  description:
                    "I understand how to market real estate and bring attention to the right deals. I'm focused on positioning offers the right way, to the right audience, at the right time.",
                },
                {
                  icon: Briefcase,
                  title: "Investor-Focused Strategy",
                  description:
                    "My real value lies in how I help investors make smarter, faster, and more confident decisions. I know how to look at deals from a numbers perspective, a location perspective, and a long-term value perspective.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="h-full bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <item.icon className="h-10 w-10 text-zinc-100 mb-2" />
                      <CardTitle className="text-zinc-50">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-400">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Ventures Section with Real Images */}
        <section id="ventures" className="py-16 md:py-24 bg-zinc-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
                Business Ventures
              </h2>
              <Separator className="w-20 mx-auto mb-6 bg-zinc-700" />
              <p className="text-lg text-zinc-300">
                Past, present, and future entrepreneurial projects
              </p>
            </motion.div>

            <div className="space-y-16">
              {[
                {
                  image: "/images/miami.jpg",
                  title: "Real Estate Investment Strategy",
                  description:
                    "My core focus is helping investors across the U.S. discover and secure profitable real estate opportunities. I specialize in locating undervalued or high-potential properties in both on-market and off-market spaces. My work includes deal sourcing, market analysis, creative financing, and connecting investors with opportunities that align with their goals.",
                  buttonText: "Learn More",
                  isComingSoon: false,
                },
                {
                  image: "/images/ferrari.jpg",
                  title: "Turo & Rental Cars",
                  description:
                    "As a seasoned Turo host, I've built and managed a rental car business that services travelers and locals alike, providing convenience, consistency, and a premium experience. My fleet offers reliable transportation options with exceptional customer service.",
                  buttonText: "Learn More",
                  isComingSoon: false,
                },
                {
                  image: "/images/rideshare.jpg",
                  title: "Klub Rideshare",
                  description:
                    "Founder of Klub, a revolutionary subscription-based rideshare platform launching in the Miami Tri-State area. Unlike traditional rideshare apps, Klub uses a membership model that gives riders affordable, consistent transportation, while giving drivers predictable income. With built-in background checks and ride limits, Klub prioritizes safety, sustainability, and satisfaction on both sides of the ride.",
                  buttonText: "Join Waitlist",
                  isComingSoon: true,
                },
              ].map((venture, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative h-64 md:h-80 rounded-xl overflow-hidden ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800">
                      {venture.isComingSoon && (
                        <div className="absolute top-4 left-4 z-10">
                          <Badge
                            variant="secondary"
                            className="bg-zinc-900/80 text-zinc-200 backdrop-blur-sm"
                          >
                            COMING SOON
                          </Badge>
                        </div>
                      )}
                      <Image
                        src={venture.image}
                        alt={venture.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark overlay for better text contrast */}
                      <div className="absolute inset-0 bg-zinc-900/20" />
                    </div>
                  </motion.div>
                  <div
                    className={`space-y-4 ${
                      index % 2 === 1 ? "md:col-start-1" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-zinc-50">
                      {venture.title}
                    </h3>
                    <p className="text-zinc-400">{venture.description}</p>
                    <Button
                      variant="default"
                      onClick={() => scrollToSection("contact")}
                      className="border border-zinc-500"
                    >
                      {venture.buttonText} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
                Let's Connect
              </h2>
              <Separator className="w-20 mx-auto mb-6 bg-zinc-700" />
              <p className="text-lg text-zinc-300">
                Interested in working together? Reach out to discuss
                opportunities.
              </p>
            </motion.div>

            <div className="flex  justify-center">
              <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center gap-12">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "fremyrosso1@gmail.com",
                    href: "mailto:fremyrosso1@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "(609) 738 0880",
                    href: "tel:+6097380880",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Miami, Florida",
                    href: null,
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <contact.icon className="h-6 w-6 text-zinc-100" />
                    <div>
                      <h3 className="text-xl font-semibold  text-zinc-50">
                        {contact.title}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-zinc-400">{contact.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
