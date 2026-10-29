"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ReviewCard from "./ReviewCard";
import PhotoCard from "./PhotoCard";

const reviews = [
  {
    type: "photo",
    images: ["/review-1.svg", "/review-2.svg"],
    avatar: "/avatar-1.svg",
  },
  {
    type: "review",
    avatar: "/avatar-2.svg",
    name: "Михаил П.",
    role: "Фрилансер",
    text: "Виды из телескопа были невероятными, а викторины для детей были веселыми и интересными.\n\nЯ настоятельно рекомендую планетарий всем, кто хочет почувствовать незабываемое впечатление и познать немного про нашу вселенную!",
  },
  {
    type: "photo",
    images: ["/review-2.svg", "/review-1.svg"],
    avatar: "/avatar-3.svg",
  },
  {
    type: "review",
    avatar: "/avatar-4.svg",
    name: "Елена П.",
    role: "Домохозяйка",
    text: "Мы пришли с детьми разного возраста, и все они были в восторге от того, что увидели.\n\nМалыши с удовольствием изучали планеты и звезды, а также задавали вопросы астрономам, которые с радостью отвечали на них.",
  },
  {
    type: "photo",
    images: ["/review-1.svg", "/review-2.svg"],
    avatar: "/avatar-1.svg",
  },
  {
    type: "review",
    avatar: "/avatar-2.svg",
    name: "Михаил П.",
    role: "Фрилансер",
    text: "Виды из телескопа были невероятными, а викторины для детей были веселыми и интересными.\n\nЯ настоятельно рекомендую планетарий всем, кто хочет почувствовать незабываемое впечатление и познать немного про нашу вселенную!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-10 lg:py-16 overflow-hidden">
      <div className="relative flex flex-col items-center mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-white font-benzin tracking-wide text-center">Отзывы и отметки</h2>
        
        <div className="flex lg:absolute lg:right-0 lg:top-4 gap-2 mt-4 lg:mt-0">
           <button className="hidden lg:flex reviews-prev w-8 h-8 rounded-full bg-white items-center justify-center">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6" /></svg>
           </button>
           <button className="hidden lg:flex reviews-next w-8 h-8 rounded-full bg-white items-center justify-center">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 18 15 12 9 6" /></svg>
           </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".reviews-prev", nextEl: ".reviews-next" }}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        className="!pb-4 lg:!pb-0"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className="!w-[260px] lg:!w-auto">
            {item.type === "photo" ? (
              <PhotoCard images={item.images} avatar={item.avatar} />
            ) : (
              <ReviewCard avatar={item.avatar} name={item.name} role={item.role} text={item.text} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
