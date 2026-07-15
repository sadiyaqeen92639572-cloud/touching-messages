import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E1DA] mt-24 py-12 text-center">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <p className="font-serif font-semibold text-[#8C3B3B]">
          Touching Texts — Touch Hearts with Elegance
        </p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Touching Messages Romantic Platform. Crafted with absolute devotion for modern lovers.
        </p>
        <p className="text-[10px] text-gray-400">
          Touching Texts is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.
        </p>
      </div>
    </footer>
  );
}
