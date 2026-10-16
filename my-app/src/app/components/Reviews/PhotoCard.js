"use client";

import { useRef, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function PhotoCard({ images = [], avatar, tags, caption }) {
  const paginationRef = useRef(null);
  const id = useId(); 

  return (
    <div className="relative rounded-[40px] w-[250px] h-[370px] shrink-0 overflow-hidden">
      <div
        ref={paginationRef}
        className="photo-card-pagination absolute top-4 left-5 right-5 z-20 flex gap-1.5 justify-center"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          el: `#pagination-${id}`,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="!absolute !inset-0 !w-full !h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-full !h-full">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        src={avatar}
        alt=""
        className="absolute top-8 left-5 w-12 h-12 rounded-full object-cover border-2 border-white z-10"
      />
    </div>
  );
}
