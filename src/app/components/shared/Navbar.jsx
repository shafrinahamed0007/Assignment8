"use client";

import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          setIsMobileMenuOpen(false);
        },
      },
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/95 backdrop-blur-md border-b border-white/10 py-2 shadow-2xl"
          : "bg-[#030712] border-b border-white/5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
        {/* Logo */}
        <div className="flex-shrink-0 relative z-[1001]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="SkillNest logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-[14px] font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/profile" className="hover:text-white transition-colors">
            Profile
          </Link>

          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse ml-4" />
          ) : !user ? (
            <div className="flex gap-4 ml-4">
              <Link href="/signin">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-white border-white/20"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4 border-l border-white/10 pl-4">
              {user.image ? (
                <Avatar
                  as={Link}
                  href="/profile"
                  className="transition-transform w-8 h-8"
                  src={user.image}
                />
              ) : (
                <Link
                  href="/profile"
                  className="text-white hover:text-purple-400 font-medium text-sm transition-colors max-w-[120px] truncate"
                  title={user.name}
                >
                  {user.name}
                </Link>
              )}

              <Button size="sm" color="danger" variant="flat" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[1001] text-white text-2xl p-2"
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#030712] z-[1000] flex flex-col pt-24 px-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 text-center">
            {["Home", "Courses", "Profile"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-slate-200 border-b border-white/5 pb-4"
              >
                {item}
              </Link>
            ))}

            {isPending ? (
              <div className="text-white">Loading...</div>
            ) : !user ? (
              <div className="flex flex-col gap-4 mt-6">
                <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    fullWidth
                    variant="bordered"
                    className="text-white border-white/10 h-12"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    fullWidth
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold h-12"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 mt-6 w-full">
                <div className="flex flex-col items-center gap-2 bg-white/5 p-4 rounded-xl w-full justify-center">
                  {user.image ? (
                    <Avatar src={user.image} size="lg" className="mb-1" />
                  ) : (
                    <p className="text-white font-bold text-xl">{user.name}</p>
                  )}

                  <p className="text-tiny text-slate-400">{user.email}</p>
                </div>

                <Button
                  fullWidth
                  color="danger"
                  variant="flat"
                  onClick={signOut}
                  className="h-12 font-bold"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
