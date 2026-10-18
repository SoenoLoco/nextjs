"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    id: 1,
    question:
      "Какие выставки и события, посвящённые космосу, проходят в планетарии?",
    answer:
      "Выставка фотографий и изображений космических объектов, интерактивные демонстрации о нашей Солнечной системе, путешествия по галактикам и другим небесным телам. Также проводятся лекции и семинары о космической науке и астрономии, а иногда даже организуются ночные наблюдения за звёздами.",
  },
  {
    id: 2,
    question: "Какие возможности есть для детей на выставках в планетарии?",
    answer:
      "Для детей мы подготовили интерактивные программы, викторины, мастер-классы и специальные экскурсии, где они смогут узнать о космосе в игровой форме.",
  },
  {
    id: 3,
    question: "Какова стоимость посещения выставок и событий в планетарии?",
    answer:
      "Стоимость билетов варьируется в зависимости от программы и возраста посетителя. Детские билеты — от 400 ₽, взрослые — от 600 ₽. Пенсионерам предоставляется скидка 20%.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full px-4 sm:px-6 lg:px-12 xl:px-[120px] 2xl:px-[230px] py-10"
    >
      <h2 className="text-5xl font-bold text-white font-benzin tracking-wide text-center leading-tight mb-12">
        Часто задаваемые
        <br />
        вопросы
      </h2>

      <div className="flex flex-col gap-4 max-w-[1000px] mx-auto">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="cursor-pointer w-full max-w-[1000px] bg-[#3805F2] text-white py-5 rounded-full font-benzin text-sm hover:bg-[#FFFFFF] hover:text-black active:bg-[#3805F2] active:border-[#FFFFFF] active:text-white transition-all duration-200">
          Показать еще
        </button>
      </div>
    </section>
  );
}
