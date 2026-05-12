"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/95 backdrop-blur-md border-b border-white/10 py-2 shadow-2xl"
          : "bg-[#030712] border-b border-white/5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
        
        {/* --- Logo --- */}
        <div className="flex-shrink-0 relative z-[1001]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="SkillNest logo"
              width={130}
              height={35}
              className="w-[110px] md:w-[130px] h-auto brightness-110"
              priority
            />
          </Link>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex gap-8 items-center text-[14px] font-medium">
          <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">Courses</Link>
          <Link href="/profile" className="text-slate-300 hover:text-white transition-colors">Profile</Link>
          
          <div className="flex gap-4 ml-4 items-center">
            <Link href="/signin" className="text-slate-300 hover:text-white">Sign In</Link>
            <Button
              as={Link}
              href="/signup"
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-5 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[1001] text-white text-2xl p-2 outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* --- Mobile Menu Overlay --- */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#030712] z-[1000] flex flex-col pt-24 px-8 md:hidden overflow-y-auto">
            <div className="flex flex-col gap-6 text-center">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-slate-200 border-b border-white/5 pb-4"
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-slate-200 border-b border-white/5 pb-4"
              >
                Courses
              </Link>
              <Link 
                href="/profile" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-slate-200 border-b border-white/5 pb-4"
              >
                Profile
              </Link>
              
              <div className="flex flex-col gap-4 mt-6">
                <Link 
                  href="/signin" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 rounded-xl border border-white/10 text-white font-semibold"
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;