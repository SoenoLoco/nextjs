import PromoCard from "./PromoCard";

const promotions = [
  {
    id: 1,
    image: "/Promo_1.jpg",
    title: "Скидка для пенсионеров",
    description:
      "Все пенсионеры получат 20% скидку на билет при посещении планетария",
  },
  {
    id: 2,
    image: "/Promo_2.jpg",
    title: "Пакет ко дню рождения",
    description:
      "В свой день рождения посетители получат экскурсию по планетарию",
  },
  {
    id: 3,
    image: "/Promo_3.jpg",
    title: "Акция «День семьи»",
    description:
      "В воскресенье семьи с двумя детьми получат карту звёздного неба",
  },
];

export default function Promotions() {
  return (
    <section id="promotions" className="w-full py-10 lg:py-16">

      <div className="relative flex items-center justify-center mb-8 lg:mb-12">
        <img 
          src="/star.svg" 
          alt="" 
          className="hidden sm:block w-8 h-8 lg:w-10 lg:h-10 mr-4" 
        />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-benzin tracking-wide text-center">
          Акции и скидки
        </h2>
        <img
          src="/star_big.svg"
          alt=""
          className="absolute right-0 lg:right-[-5%] top-0 lg:top-8 w-12 h-12 lg:w-20 lg:h-20 opacity-50 lg:opacity-100"
        />
      </div>

      <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 snap-x snap-mandatory lg:snap-none px-1 lg:px-0">
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center"
          >
            <PromoCard
              image={promo.image}
              title={promo.title}
              description={promo.description}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
}