export default function PromoCard({ image, title, description }) {
  return (
    <div className="group relative w-full h-[320px] lg:h-[330px] rounded-[30px] lg:rounded-[40px] overflow-hidden cursor-pointer shrink-0">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-[#3805F2] px-5 lg:px-6 py-4 lg:py-5 rounded-tr-[40px] lg:rounded-tr-[60px]">
        <div className="pr-14 lg:pr-20">
          <h3 className="text-sm lg:text-base font-bold font-benzin text-white leading-tight mb-1 lg:mb-1.5">
            {title}
          </h3>
          <p className="text-[10px] lg:text-[11px] text-white/80 font-gilroy leading-snug">
            {description}
          </p>
        </div>

        <div className="absolute bottom-4 right-4 lg:bottom-4 lg:right-5 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center">
          <img
            src="/details-black.svg"
            alt="Подробнее"
            className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:-rotate-75"
          />
        </div>
      </div>
    </div>
  );
}