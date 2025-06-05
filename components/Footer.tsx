"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Fremy Rosso. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/fremy-rosso/"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/fremyrosso"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
