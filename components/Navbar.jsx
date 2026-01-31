"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

// If path includes /studio → don't show navbar
if (pathname.startsWith("/studio")) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
document.documentElement.style.overflow = isOpen ? "hidden" : "unset";
document.body.style.overflow = isOpen ? "hidden" : "unset";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('navigation.home'), href: "/" },
    { name: t('navigation.blogs'), href: "/blog" },
    { name: t('navigation.services'), href: "/services" },
    { name: t('navigation.about'), href: "/about" },
    { name: t('navigation.contact'), href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute left-0 right-0 top-0 z-[9999] mb-20"
dir="ltr"
      >
        {/* 3D Layered Background */}
        <div className="relative">
          {isScrolled && (
            <>
              <div className="absolute inset-0 bg-white transform translate-y-1"></div>
              <div className="absolute inset-0 bg-gray-50 transform translate-y-0.5"></div>
            </>
          )}
          
          <div className={`relative transition-colors duration-500 ${
            isScrolled ? "bg-white" : "bg-white"
          }`}>
            {/* Top Accent Bar */}
            {isScrolled && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#00B7FF] to-[#0099CC] origin-left"
              />
            )}

            <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12 h-25 md:h-24 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <motion.a
                href="/"
                className="relative z-50 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  {isScrolled && (
                    <div className="absolute -inset-2 bg-[#00B7FF]/5 transform -skew-x-6"></div>
                  )}
                  <Image
                    src="/logo.png"
                    alt="Creative Accounting"
                    width={200}
                    height={200}
                    className="hidden md:flex relative"
                    priority
                  />
                  <Image
                    src="/logo.jpeg"
                    alt="Creative Accounting"
                    width={90}
                    height={90}
                    className="md:hidden relative"
                    priority
                  />
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-10 lg:flex">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative">
                      <div className={`absolute -inset-2 bg-[#00B7FF]/0 transform skew-x-12 transition-all duration-300 group-hover:bg-[#00B7FF]/10`}></div>
                      <span className={`relative text-base font-bold uppercase tracking-wider transition-colors duration-300
                        ${isScrolled ? 'text-gray-700' : "text-gray-800"} group-hover:text-[#00b7ff]`}>
                        {link.name}
                      </span>
                    </div>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00b7ff] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#00B7FF]/5 transform skew-x-6"></div>
                  <div className="relative">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 lg:hidden"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-[#00B7FF]/10 transform rotate-45"></div>
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 6, backgroundColor: "#00b7ff" }
                      : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#000000" : "#00b7ff" }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-7 relative z-10"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 w-7 relative z-10 ${isScrolled ? 'bg-black' : 'bg-[#00b7ff]'}`}
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -6, backgroundColor: "#00b7ff" }
                      : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#000000" : "#00b7ff" }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-7 relative z-10"
                />
              </button>
            </div>

            {/* Bottom Accent Border */}
            {isScrolled && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden w-screen h-screen overflow-hidden"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Geometric Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B7FF]/5 transform rotate-45 translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0099CC]/5 transform -rotate-12 -translate-x-32 translate-y-32"></div>
            <div className="absolute top-1/4 left-0 w-1 h-32 bg-[#00B7FF]/20"></div>
            <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-[#0099CC]/20"></div>

            {/* Menu Content */}
            <div className={`relative flex h-full flex-col items-center justify-center gap-8 text-center`}>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -50 : 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#00B7FF]/0 transform -skew-x-12 transition-all duration-300 group-hover:bg-[#00B7FF]/10"></div>
                    <span className="relative text-3xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#00b7ff]">
                      {link.name}
                    </span>
                  </div>
                  <motion.div className="absolute -bottom-2 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              {/* Language Switcher for Mobile */}
              <div className="mt-8 relative">
                <div className="absolute -inset-3 bg-[#00B7FF]/5 transform skew-y-3"></div>
                <div className="relative">
                  <LanguageSwitcher isMobile={true} />
                </div>
              </div>

              {/* Decorative Lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 h-1 w-64 bg-gradient-to-r from-transparent via-[#00b7ff] to-transparent"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-28 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-[#0099CC]/50 to-transparent"
              />
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-[#00B7FF]"></div>
            <div className="absolute top-0 left-0 w-1 h-24 bg-[#00B7FF]"></div>
            <div className="absolute bottom-0 right-0 w-24 h-1 bg-[#0099CC]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-24 bg-[#0099CC]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}