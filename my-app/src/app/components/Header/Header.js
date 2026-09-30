"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white py-4">
      <div className="w-full px-[224px] flex items-center gap-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/лого.svg" alt="Логотип Celestia" className="w-37" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link
            href="/"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            Главная
          </Link>
          <Link
            href="/events"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            События
          </Link>
          <Link
            href="/promo"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            Акции
          </Link>
          <Link
            href="/reviews"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            Отзывы
          </Link>
          <Link
            href="/faq"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contacts"
            className="font-gilroy hover:text-[#3805F2] transition-colors"
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-5 h-5"
            >
              <img
                src="/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5 block group-hover:hidden"
              />

              <img
                src="/WhatsApp-blue.svg"
                alt="WhatsApp"
                className="w-5 h-5 hidden group-hover:block"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-6 h-6"
            >
              <img
                src="/Telegram.svg"
                alt="Telegram"
                className="w-6 h-6 block group-hover:hidden"
              />

              <img
                src="/Telegram-blue.svg"
                alt="Telegram"
                className="w-6 h-6 hidden group-hover:block"
              />
            </a>
          </div>

          <a
            href="tel:88123363636"
            className="font-gilroy font-bold hidden lg:block  hover:text-[#3805F2] transition-colors"
          >
            (812) 336 36 36
          </a>

          <button className="font-benzin bg-[#3805F2] text-white hover:bg-white hover:text-black active:bg-[#3805F2] active:text-white active:ring-2 active:ring-white px-6 py-2.5 rounded-full text-xs transition-all duration-200 cursor-pointer">
            Купить билет
          </button>
        </div>
      </div>
    </header>
  );
}
