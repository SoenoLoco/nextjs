"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";

export default function EventCard({
  image,
  ageLimit,
  category,
  title,
  description,
  price1,
  price2,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return "Выбрать дату";
    return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  };

  return (
    <div className="flex items-start gap-6 py-6 border-b border-gray-800/50">
      <div className="relative w-[313px] h-[159px] rounded-[30px] overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-1 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-black font-gilroy">
          {ageLimit}+
        </div>
      </div>

      <div className="w-[200px] shrink-0 pt-2">
        <p className="text-[10px] tracking-wider uppercase font-gilroy mb-2">
          {category}
        </p>
        <h3 className="pt-4 text-base font-benzin text-white leading-tight uppercase">
          {title}
        </h3>
      </div>

      <div className="flex-1 flex flex-col gap-4 pt-1">
        <p className="text-sm text-gray-300 font-gilroy leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src="/kids.svg" alt="Детский тариф" className="w-6 h-6" />
            </div>
            <span className="text-white font-gilroy text-sm">{price1} ₽</span>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src="/person.svg" alt="Детский тариф" className="w-5 h-5" />
            </div>
            <span className="text-white font-gilroy text-sm">{price2} ₽</span>
          </div>

          <div className="relative ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer px-5 py-2 rounded-full border border-gray-700 text-gray-400 text-xs font-gilroy flex items-center justify-between hover:border-gray-500 transition-colors min-w-[160px]"
            >
              <span>{formatDate(selectedDate)}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1A1A1A] border border-gray-700 rounded-2xl p-3 z-50 shadow-lg">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleSelect}
                  locale={ru}
                  disabled={{ before: new Date() }}
                />
              </div>
            )}
          </div>

          <button className="cursor-pointer px-6 py-2.5 rounded-full bg-[#3805F2] hover:bg-[#2A00B8] active:scale-95 text-white text-xs font-medium font-gilroy transition-all duration-200">
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
}
