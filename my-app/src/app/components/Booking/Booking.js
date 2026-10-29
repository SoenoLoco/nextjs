"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import 'react-day-picker/style.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: null,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDateSelect = (date) => {
    setFormData({ ...formData, date });
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return "Дата посещения";
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка формы:", formData);
  };

  return (
    <section
      id="booking"
      className="w-full px-4 sm:px-6 lg:px-12 xl:px-[120px] 2xl:px-[230px] py-20"
    >
      {/* === ЗАГОЛОВОК === */}
      <h2 className="text-4xl md:text-5xl font-bold text-white font-benzin tracking-wide text-center leading-tight mb-16">
        Ваш билет в космос —<br />
        быстрая запись на экскурсию
      </h2>

      {/* === СЕТКА: ФОРМА + КАРТИНКА === */}
      {/* items-stretch — растягивает обе колонки на одну высоту */}
      {/* grid-cols-[1fr_1.3fr] — форма занимает 1 часть, картинка 1.3 части (шире) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-stretch max-w-[1100px] mx-auto">
        {/* ЛЕВАЯ ЧАСТЬ — ФОРМА */}
        <div className="w-full flex flex-col justify-between">
          <div>
            {/* Подзаголовок */}
            <p className="text-xs text-gray-400 font-gilroy leading-relaxed mb-6">
              Запишитесь на экскурсию в планетарий. Просто укажите ваше имя,
              электронную почту и дату, и мы свяжемся с вами для подтверждения.
            </p>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Имя */}
              <input
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full bg-transparent border border-white/40 rounded-full px-6 py-3.5 text-sm font-gilroy text-white placeholder-gray-400 focus:outline-none focus:border-[#3805F2] transition-colors"
              />

              {/* Телефон */}
              <input
                type="tel"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full bg-transparent border border-white/40 rounded-full px-6 py-3.5 text-sm font-gilroy text-white placeholder-gray-400 focus:outline-none focus:border-[#3805F2] transition-colors"
              />

              {/* === ДАТА ПОСЕЩЕНИЯ (КАСТОМНЫЙ КАЛЕНДАРЬ) === */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full bg-transparent border border-white/40 rounded-full px-6 py-3.5 text-sm font-gilroy text-white flex items-center justify-between hover:border-white/60 transition-colors text-left"
                >
                  <span
                    className={formData.date ? "text-white" : "text-gray-400"}
                  >
                    {formatDate(formData.date)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-white/60 transition-transform duration-200 ${isCalendarOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isCalendarOpen && (
                  <div className="fixed inset-0 m-auto w-[320px] h-fit bg-[#1A1A1A] border border-gray-700 rounded-[30px] p-4 z-[100] shadow-2xl sm:absolute sm:top-full sm:left-0 sm:inset-auto sm:mt-2 sm:w-auto sm:p-3 sm:rounded-2xl sm:z-50">
                    <DayPicker
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateSelect}
                      locale={ru}
                      disabled={{ before: new Date() }}
                    />
                  </div>
                )}
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#3805F2] text-white py-3.5 rounded-full font-benzin text-sm border-2 border-[#3805F2] hover:bg-white hover:text-black hover:border-white active:bg-[#3805F2] active:text-white active:border-[#3805F2] transition-all duration-200 mt-2"
                >
                Отправить
              </button>
            </form>
          </div>

          {/* Сноска */}
          <p className="text-[10px] text-gray-500 font-gilroy mt-4">
            *Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </div>

        {/* ПРАВАЯ ЧАСТЬ — КАРТИНКА */}
        {/* h-full — заставляет картинку тянуться на всю высоту колонки (до сноски) */}
        <div className="relative w-full rounded-[40px] overflow-hidden min-h-[350px]">
          <img
            src="/форма.svg"
            alt="Космонавты на фоне планеты"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
