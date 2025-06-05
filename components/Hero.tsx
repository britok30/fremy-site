"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/miami.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-black/20 to-zinc-900/40 z-10"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-20"
      >
        <motion.div variants={itemVariants} className="md:w-1/2 space-y-8">
          <motion.h1
            variants={textRevealVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Entrepreneur,{" "}
            <motion.span
              className="block text-zinc-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Real Estate Strategist,
            </motion.span>{" "}
            <motion.span
              className="block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Visionary Founder
            </motion.span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-300 leading-relaxed"
          >
            Building businesses that create wealth and freedom through smart
            investing
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <Button
              onClick={() => scrollToSection("ventures")}
              variant="default"
              className="border border-zinc-200 cursor-pointer"
            >
              Explore My Ventures
            </Button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 px-8 py-3 cursor-pointer"
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
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-700 bg-zinc-900 shadow-2xl">
              <Image
                src="/images/headshot.jpg"
                alt="Fremy Rosso - Entrepreneur and Real Estate Strategist"
                fill
                className="object-cover duration-500"
                priority
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
