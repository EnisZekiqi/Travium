'use client'
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-16 w-full bg-[#0D0D13] border-t border-[#202131]">
      <div className="grid md:grid-cols-2 gap-10 items-center justify-between">
        
        {/* Left side */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-2 bg-[#4F46E5]">
              <Image src="/travel.svg" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-white text-lg font-semibold tracking-wide">Travium</h1>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" className="text-white/60 hover:text-[#4F46E5] transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" target="_blank" className="text-white/60 hover:text-[#4F46E5] transition">
              <FaGithub size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Travium. All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="hidden sm:flex flex-col w-full justify-start items-start sm:justify-end sm:items-end gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 text-start sm:text-end">Quick Links</h3>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <a href="#" className="hover:text-[#4F46E5] transition">Home</a>
              <a href="#" className="hover:text-[#4F46E5] transition">Features</a>
              <a href="#" className="hover:text-[#4F46E5] transition">Discover</a>
            </div>
          </div>

          {/* Built with love */}
          <p className="text-white/50 text-sm mt-4">
            Designed & built with <span className="text-[#4F46E5]">❤️</span> by the Travium team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
