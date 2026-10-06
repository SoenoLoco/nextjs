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
    <section className="w-full px-[230px] py-10">
      <div className="relative flex items-center justify-center mb-12">
        <img src="/star.svg" alt="" className="w-10 h-10" />
        <h2 className="text-5xl font-bold text-white font-benzin tracking-wide">
          Акции и скидки
        </h2>

        <img
          src="/star_big.svg"
          alt=""
          className="absolute right-[-5%] top-8 w-20 h-20"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <PromoCard
            key={promo.id}
            image={promo.image}
            title={promo.title}
            description={promo.description}
          />
        ))}
      </div>
    </section>
  );
}
