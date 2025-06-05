"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-zinc-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About Me
              </h2>
              <Separator className="w-24 mx-auto mb-8 bg-white" />
              <p className="text-xl text-zinc-300 leading-relaxed">
                I'm Fremy Rosso — an entrepreneur, real estate strategist, and
                founder of multiple ventures focused on reshaping the way people
                invest, travel, and connect with opportunity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-zinc-400 leading-relaxed">
                  With a foundation rooted in hustle, vision, and long-term
                  thinking, I've dedicated my career to building businesses that
                  solve real problems while helping people grow wealth and
                  freedom through smart investing.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  My core focus is helping investors across the U.S. discover
                  and secure profitable real estate opportunities. Whether
                  you're new to investing or scaling a portfolio, I specialize
                  in locating undervalued or high-potential properties in both
                  on-market and off-market spaces.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  I also dabble in hard money loan sales, connecting investors
                  with funding options that help close deals quickly and
                  efficiently. I understand both sides of the deal: finding the
                  property and finding the money — and I bring those worlds
                  together.
                </p>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Real Estate",
                    description:
                      "Sourcing profitable investment opportunities nationwide",
                  },
                  {
                    title: "Turo Business",
                    description: "Managing a successful car rental operation",
                  },
                  {
                    title: "Klub Rideshare",
                    description:
                      "Launching a revolutionary subscription-based platform",
                  },
                  {
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
                    <Card className="h-full bg-black border-zinc-700 hover:border-white transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-zinc-400 leading-relaxed">
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
        <section id="expertise" className="py-20 md:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                My Expertise
              </h2>
              <Separator className="w-24 mx-auto mb-8 bg-white" />
              <p className="text-xl text-zinc-300 leading-relaxed">
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
                  title: "Real Estate Lead Generation",
                  description:
                    "I specialize in sourcing leads, motivated sellers, and creative finance opportunities across multiple U.S. markets using strategic marketing, data-driven targeting, and AI-powered tools.",
                },
                {
                  title: "Marketing & Deal Flow",
                  description:
                    "I understand how to market real estate and bring attention to the right deals. I'm focused on positioning offers the right way, to the right audience, at the right time.",
                },
                {
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
                  <Card className="h-full bg-zinc-900 border-zinc-700 hover:border-white transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-xl mb-4">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-400 leading-relaxed text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Ventures Section */}
        <section id="ventures" className="py-20 md:py-32 bg-zinc-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Business Ventures
              </h2>
              <Separator className="w-24 mx-auto mb-8 bg-white" />
              <p className="text-xl text-zinc-300 leading-relaxed">
                Past, present, and future entrepreneurial projects
              </p>
            </motion.div>

            <div className="space-y-20">
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
                  image: "/images/mercedes.jpg",
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
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative h-80 md:h-96 rounded-xl overflow-hidden ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800 shadow-2xl">
                      {venture.isComingSoon && (
                        <div className="absolute top-6 left-6 z-10">
                          <Badge
                            variant="secondary"
                            className="bg-black/80 text-white backdrop-blur-sm border border-zinc-600 px-3 py-1"
                          >
                            COMING SOON
                          </Badge>
                        </div>
                      )}
                      <Image
                        src={venture.image}
                        alt={venture.title}
                        fill
                        className="object-cover duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                    </div>
                  </motion.div>
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "md:col-start-1" : ""
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-white">
                      {venture.title}
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {venture.description}
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => scrollToSection("contact")}
                    >
                      {venture.buttonText}{" "}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Let's Connect
              </h2>
              <Separator className="w-24 mx-auto mb-8 bg-white" />
              <p className="text-xl text-zinc-300 leading-relaxed">
                Interested in working together? Reach out to discuss
                opportunities.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                variants={itemVariants}
                className="flex flex-col lg:flex-row lg:items-center gap-12"
              >
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
                    content: "(609) 738-0880",
                    href: "tel:+6097380880",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Miami, Florida",
                    href: null,
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {contact.title}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-zinc-400 hover:text-white transition-colors duration-300 text-lg"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-zinc-400 text-lg">
                          {contact.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
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
