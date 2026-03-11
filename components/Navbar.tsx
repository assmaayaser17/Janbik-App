"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "من نحن", href: "/about" },
  { label: "كيف يعمل جنبك", href: "/how-it-works" },
  { label: "مقدمي الرعاية", href: "/caregivers" },
  { label: "السوار الذكي", href: "/smart-bracelet" },
  { label: "الآراء", href: "/reviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className=" mx-auto px-4 md:px-6 lg:px-10 h-16 md:h-20 lg:h-24 flex items-center justify-between">
        {/* Logo — rightmost in RTL */}
        <Link href="/" className="shrink-0" aria-label="العودة للصفحة الرئيسية">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2238c1fb15ae50dec4e8f55e851e32a1d8977399?width=227"
            alt="جنبك"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links (show from lg and up so tablet uses dropdown) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#465062] text-base font-medium leading-6 hover:text-[#009999] transition-colors whitespace-nowrap font-cairo"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons — leftmost in RTL (lg and up) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* تواصل معنا — outlined button */}
          <button className="flex items-center gap-3 h-10 px-4 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[#2D3749] text-sm font-bold leading-5 hover:bg-gray-100 transition-colors font-cairo whitespace-nowrap">
            <span>تواصل معنا</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M0 10V3C0 1.34375 1.34375 0 3 0H13C14.6562 0 16 1.34375 16 3V10C16 11.6562 14.6562 13 13 13H9.25C9.0875 13 8.93125 13.0531 8.8 13.15L5.2 15.85C5.06875 15.9469 4.9125 16 4.75 16C4.33437 16 4 15.6656 4 15.25V13H3C1.34375 13 0 11.6562 0 10Z"
                fill="#009999"
              />
            </svg>
          </button>

          {/* انضم إلينا الآن — teal filled button */}
          <button className="flex items-center gap-3 h-10 px-4 rounded-full bg-[#009999] text-white text-sm font-bold leading-5 hover:bg-[#007a7a] transition-colors font-cairo whitespace-nowrap">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0_nav_join)">
                <path
                  d="M8.00065 12.6666L3.33398 7.99992L8.00065 3.33325"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0654 8H3.33203"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_nav_join">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>انضم إلينا الآن</span>
          </button>
        </div>

        {/* Mobile / Tablet hamburger (shown below lg) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="فتح القائمة"
        >
          <span
            className={`block w-6 h-0.5 bg-[#465062] transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#465062] transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#465062] transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile / Tablet Menu (below lg) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#465062] text-base font-medium py-2 border-b border-gray-50 font-cairo"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button className="flex items-center justify-center gap-3 h-10 px-4 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[#2D3749] text-sm font-bold font-cairo">
              <span>تواصل معنا</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10V3C0 1.34375 1.34375 0 3 0H13C14.6562 0 16 1.34375 16 3V10C16 11.6562 14.6562 13 13 13H9.25C9.0875 13 8.93125 13.0531 8.8 13.15L5.2 15.85C5.06875 15.9469 4.9125 16 4.75 16C4.33437 16 4 15.6656 4 15.25V13H3C1.34375 13 0 11.6562 0 10Z"
                  fill="#009999"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-3 h-10 px-4 rounded-full bg-[#009999] text-white text-sm font-bold font-cairo">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_nav_join_mobile)">
                  <path
                    d="M8.00065 12.6666L3.33398 7.99992L8.00065 3.33325"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0654 8H3.33203"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_nav_join_mobile">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>انضم إلينا الآن</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

