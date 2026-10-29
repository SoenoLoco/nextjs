"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-12 xl:px-[120px] 2xl:px-[230px] py-10 bg-[#131313]">
      {/* === 1. ЗАГОЛОВОК === */}
      <h2 className="text-4xl md:text-5xl font-bold text-white font-benzin tracking-wide text-center mb-10">
        Как нас найти?
      </h2>

      {/* === 2. КАРТА === */}
      <div className="relative w-full h-[350px] rounded-[40px] overflow-hidden mb-8">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5fec5f9301e195597d07d92d06b9f7b6ccc4029fc35d90320b9ce2ca98fca94&amp;source=constructor"
          width="100%"
          height="427"
          frameBorder="0"
          // Оставили только постоянные фильтры. Убрали все hover:...
          className="absolute inset-0 w-full h-full grayscale invert contrast-125 opacity-70"
        ></iframe>
      </div>

      {/* === 3. КОНТАКТНАЯ СТРОКА === */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
        {/* Адрес */}
        <div className="flex items-center gap-2">
          <img src="/карта.svg" alt="Адрес" className="w-5 h-5" />
          <span className="text-white font-gilroy text-sm">
            Екатеринбург, ул. Маршала Жукова, дом 12
          </span>
        </div>

        {/* Соцсети */}
        <div className="flex items-center gap-3">
          <a href="#" className="w-8 h-8 bg-[#3805F2] rounded-full flex items-center justify-center hover:bg-[#2A00B8] transition-colors">
            <img src="/facebook.svg" alt="Facebook" className="" />
          </a>
          <a href="#" className="w-8 h-8 bg-[#3805F2] rounded-full flex items-center justify-center hover:bg-[#2A00B8] transition-colors">
            <img src="/instagram.svg" alt="Instagram" className="" />
          </a>
          <a href="#" className="w-8 h-8 bg-[#3805F2] rounded-full flex items-center justify-center hover:bg-[#2A00B8] transition-colors">
            <img src="/youtube.svg" alt="YouTube" className="" />
          </a>
        </div>

        {/* Телефон и мессенджеры */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/Telegram.svg" alt="Telegram" className="w-5 h-5" />
          </a>
          <a href="tel:88123363636" className="text-white font-gilroy text-sm hover:text-[#3805F2] transition-colors">
            +7 (812) 336 36 36
          </a>
        </div>
      </div>

      {/* === 4. НИЖНЯЯ ПАНЕЛЬ: ПОДПИСКА + ПОЛИТИКА === */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8">
        {/* Политика конфиденциальности (слева) */}
        <Link 
          href="/privacy" 
          className="text-gray-500 font-gilroy text-xs hover:text-white transition-colors order-2 lg:order-1 whitespace-nowrap"
        >
          Политика конфиденциальности
        </Link>

        {/* Форма подписки (по центру) */}
        <div className="bg-white rounded-full p-1.5 pr-5 flex flex-col md:flex-row items-center gap-3 w-full max-w-[660px] min-h-[82px] order-1 lg:order-2 lg:ml-[210px]">
    
          {/* Текст внутри формы */}
          <h3 className="text-[#3805F2] font-benzin text-sm pl-5 hidden md:block leading-tight whitespace-nowrap">
            Подписаться<br />на рассылку
          </h3>

          {/* Поле ввода */}
          <input
            type="email"
            placeholder="Электронная почта"
            className="flex-1 bg-transparent border border-gray-300 rounded-full px-5 py-2.5 text-sm font-gilroy text-black placeholder-gray-400 focus:outline-none focus:border-[#3805F2] w-full md:w-[322px]"
          />

          {/* Кнопка */}
          <button className="bg-[#3805F2] text-white px-10 py-2.5 rounded-full font-benzin text-sm hover:bg-[#2A00B8] transition-colors whitespace-nowrap w-full md:w-auto">
            Подписаться
          </button>
        </div>

        {/* Пустой блок для баланса (справа), чтобы форма была ровно по центру */}
        <div className="hidden lg:block w-[180px] order-3"></div>
      </div>
    </footer>
  );
}