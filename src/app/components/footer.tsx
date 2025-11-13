"use client";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-red-900 py-6 text-center">
      <div className="flex flex-col items-center justify-center space-y-3">
        {/* Instagram Link */}
        <a
          href="https://instagram.com/interikfinnberg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-red-600 transition-colors duration-300"
        >
          <FaInstagram className="text-xl" />
          <span className="font-semibold tracking-wide">Contact me on Instagram</span>
        </a>

        {/* Divider line */}
        <div className="w-32 h-[1px] bg-red-900"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} EMRICK — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
