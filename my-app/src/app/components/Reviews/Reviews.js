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
    <section
      id="reviews"
      className="w-full px-4 sm:px-6 lg:px-12 xl:px-[120px] 2xl:px-[230px] py-10 overflow-hidden"
    >
      <div className="relative flex items-center justify-center mb-12">
        <h2 className="text-5xl font-bold text-white font-benzin tracking-wide">
          Отзывы и отметки
        </h2>

        <div className="absolute right-0 top-4 flex gap-2">
          <button
            suppressHydrationWarning
            className="reviews-prev cursor-pointer w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-colors hover:bg-[#3805F2] hover:text-white active:bg-white active:text-[#3805F2]"
            aria-label="Предыдущий отзыв"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            suppressHydrationWarning
            className="reviews-next cursor-pointer w-8 h-8 rounded-full bg-white text-black flex items-center justify-center
      hover:bg-[#3805F2] hover:text-white
      active:bg-white active:text-[#3805F2] active:shadow-[0_0_20px_rgba(56,5,242,0.9)]
      transition-all duration-200"
            aria-label="Следующий отзыв"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".reviews-prev",
          nextEl: ".reviews-next",
        }}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        className="!pb-4"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            {item.type === "photo" ? (
              <PhotoCard
                images={item.images}
                avatar={item.avatar}
                tags={item.tags}
                caption={item.caption}
              />
            ) : (
              <ReviewCard
                avatar={item.avatar}
                name={item.name}
                role={item.role}
                text={item.text}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
