import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80"
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("hero")}
          className="p-0 hover:bg-transparent text-white hover:text-zinc-300"
        >
          <span className="text-xl font-bold tracking-wide">Fremy Rosso</span>
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {["about", "expertise", "ventures", "contact"].map((section) => (
            <Button
              key={section}
              variant="ghost"
              onClick={() => scrollToSection(section)}
              className="text-sm font-medium capitalize text-white hover:text-zinc-300 hover:bg-transparent relative group"
            >
              {section}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-zinc-300 hover:bg-transparent"
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
          className="hidden md:block bg-white text-black hover:bg-zinc-200 transition-all duration-300"
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
                className="justify-start capitalize text-white hover:text-zinc-300 hover:bg-transparent"
              >
                {section}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-4 bg-white text-black hover:bg-zinc-200"
            >
              Get In Touch
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
