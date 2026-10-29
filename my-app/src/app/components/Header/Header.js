"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] text-white py-4 shadow-md">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 shrink-0 z-50 relative">
          <img src="/лого.svg" alt="Логотип Celestia" className="w-28 lg:w-37" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-[#3805F2] transition-colors">Главная</Link>
          <Link href="#events" className="hover:text-[#3805F2] transition-colors">События</Link>
          <Link href="#promotions" className="hover:text-[#3805F2] transition-colors">Акции</Link>
          <Link href="#reviews" className="hover:text-[#3805F2] transition-colors">Отзывы</Link>
          <Link href="#faq" className="hover:text-[#3805F2] transition-colors">FAQ</Link>
          <Link href="#footer" className="hover:text-[#3805F2] transition-colors">Контакты</Link>
        </nav>

        <div className="flex items-center gap-4 lg:gap-5 z-50 relative">

          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="group block w-5 h-5">
              <img src="/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 block group-hover:hidden" />
              <img src="/WhatsApp-blue.svg" alt="WhatsApp" className="w-5 h-5 hidden group-hover:block" />
            </a>
            <a href="#" className="group block w-6 h-6">
              <img src="/Telegram.svg" alt="Telegram" className="w-6 h-6 block group-hover:hidden" />
              <img src="/Telegram-blue.svg" alt="Telegram" className="w-6 h-6 hidden group-hover:block" />
            </a>
          </div>

          <a href="tel:88123363636" className="hidden xl:block font-gilroy font-bold hover:text-[#3805F2] transition-colors">
            (812) 336 36 36
          </a>

          <button className="hidden sm:block font-benzin bg-[#3805F2] text-white hover:bg-white hover:text-black px-4 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs transition-all duration-200 cursor-pointer">
            Купить билет
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            aria-label="Меню"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">Главная</Link>
        <Link href="#events" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">События</Link>
        <Link href="#promotions" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">Акции</Link>
        <Link href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">Отзывы</Link>
        <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">FAQ</Link>
        <Link href="#booking" onClick={() => setIsMenuOpen(false)} className="text-2xl font-benzin text-white hover:text-[#3805F2]">Контакты</Link>

        <div className="flex flex-col items-center gap-4 mt-8">
          <a href="tel:88123363636" className="text-xl font-gilroy font-bold text-white hover:text-[#3805F2]">
            (812) 336 36 36
          </a>
          <button className="font-benzin bg-[#3805F2] text-white px-8 py-3 rounded-full text-sm">
            Купить билет
          </button>
        </div>
      </div>
    </header>
  );
}