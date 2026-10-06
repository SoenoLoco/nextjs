export default function PromoCard({ image, title, description }) {
  return (
    <div className="group relative w-full h-[330px] rounded-[40px] overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-65 object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-[#3805F2] px-6 py-5 rounded-tr-[60px]">
        <div className="pr-20">
          <h3 className="text-base font-bold font-benzin text-white leading-tight mb-1.5">
            {title}
          </h3>
          <p className="text-[11px] text-white/80 font-gilroy leading-snug">
            {description}
          </p>
        </div>

        <div className="absolute bottom-4 right-5 w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <img
            src="/details-black.svg"
            alt="Подробнее"
            className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-75"
          />
        </div>
      </div>
    </div>
  );
}
