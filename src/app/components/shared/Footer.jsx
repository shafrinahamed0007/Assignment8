"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaDiscord, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FaTwitter size={20} />, href: "#", label: "Twitter" },
    { icon: <FaDiscord size={20} />, href: "#", label: "Discord" },
    { icon: <FaGithub size={20} />, href: "#", label: "Github" },
    { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-[#030712] text-white">
      {/* Background Mesh Gradient Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand & Social Section */}
          <div className="flex flex-col items-center space-y-8 text-center md:items-start md:text-left lg:col-span-4">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={180} // Adjusted to a more reasonable logo size
                height={60}  // Adjusted to a more reasonable logo size
                className="object-contain brightness-125 contrast-110 h-auto w-auto" // Added h-auto and w-auto here
                priority
              />
            </Link>

            <p className="max-w-sm text-[16px] leading-relaxed text-slate-400">
              Transform your ideas into stunning visuals with our
              production-ready AI. The future of creativity is here.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition-all duration-300 hover:text-purple-400 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-5">
            {/* Product Column */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-200">
                Product
              </h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><Link href="/generate" className="hover:text-white transition-colors">AI Generator</Link></li>
                <li><Link href="/all-photos" className="hover:text-white transition-colors">Showcase</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Plan</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-200">
                Company
              </h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left lg:col-span-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-200">
              Get Started
            </h3>
            <p className="text-[14px] text-slate-400">
              Ready to create something amazing?
            </p>
            <Link
              href="/signup"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              Sign Up Free
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[13px] text-slate-500">
              © {currentYear} <span className="font-bold text-slate-300">pixgen</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-[13px] font-medium text-slate-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;