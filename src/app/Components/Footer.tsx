'use client'
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-8 md:px-16 w-full bg-[#0D0D13] border-t border-[#202131]">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left side */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-2 bg-[#4F46E5]">
              <Image src="/travel.svg" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-white text-lg font-semibold">Travium </h1>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" className="text-white/50 hover:text-white transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" target="_blank" className="text-white/50 hover:text-white transition">
              <FaGithub size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2025 Travium . All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start gap-6">
          {/* Links */}
          <div className="flex flex-wrap gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Discover</a>
          </div>

          {/* Newsletter input */}
         <div className="hidden sm:block w-[360px] ">
  <div className="flex overflow-hidden rounded-2xl border p-1.5 border-[#191A24] bg-[#09090B] focus-within:border-[#818CF8] focus-within:shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] transition-all duration-200">
    <input
      type="text"
      placeholder="Enter your email"
      className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white/40 focus:outline-none"
    />
    <button className="px-4 py-2 text-sm sm:text-md bg-[#0B0B0E] rounded-xl shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] text-white hover:bg-[#1A1A24] transition">
      Subscribe
    </button>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
