"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import 'react-day-picker/style.css';

export default function EventCard({ image, ageLimit, category, title, description, price1, price2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return "Дата";
    return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  };

  return (
    <div className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 p-3 lg:p-5 rounded-[30px] bg-[#131313] lg:bg-transparent hover:bg-[#3805F2] transition-all duration-300 cursor-pointer">

      <div className="relative w-full lg:w-[313px] h-[200px] lg:h-[159px] rounded-[25px] lg:rounded-[30px] overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-black font-gilroy">
          {ageLimit}+
        </div>
      </div>

      <div className="w-full lg:w-[200px] shrink-0">
        <p className="hidden lg:block text-[10px] tracking-wider uppercase font-gilroy mb-2 text-gray-400">{category}</p>
        <h3 className="text-lg lg:text-base font-benzin text-white leading-tight uppercase">{title}</h3>
        <p className="block lg:hidden text-xs text-gray-400 mt-2 line-clamp-2">{description}</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 w-full">
        <p className="hidden lg:block text-sm text-gray-300 font-gilroy leading-relaxed">{description}</p>

        <div className="flex flex-wrap items-center gap-3 lg:gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center"><img src="/kids.svg" alt="" className="w-5 h-5" /></div>
            <span className="text-white font-gilroy text-sm">{price1} ₽</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center"><img src="/person.svg" alt="" className="w-4 h-4" /></div>
            <span className="text-white font-gilroy text-sm">{price2} ₽</span>
          </div>

          <div className="relative ml-auto">
            <button onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
              }} 
              className="cursor-pointer px-4 lg:px-5 py-2 rounded-full border border-gray-400 text-gray-400 text-[10px] lg:text-xs font-gilroy flex items-center justify-between min-w-[120px] lg:min-w-[160px] hover:border-white hover:text-white">
              <span>{formatDate(selectedDate)}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            {isOpen && (
              <div onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }} className="fixed inset-0 m-auto w-[320px] h-fit bg-[#1A1A1A] border border-gray-700 rounded-[30px] p-4 z-[100] shadow-2xl sm:absolute sm:top-full sm:right-0 sm:inset-auto sm:mt-2 sm:w-auto sm:p-3 sm:rounded-2xl sm:z-50">
                <DayPicker mode="single" selected={selectedDate} onSelect={handleSelect} locale={ru} disabled={{ before: new Date() }} />
              </div>
            )}
          </div>

          <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }} className="cursor-pointer px-4 lg:px-5 py-2 rounded-full bg-[#3805F2] text-white text-[10px] lg:text-[10px] font-benzin border-2 border-[#3805F2] hover:bg-white hover:text-black transition-all">
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
}