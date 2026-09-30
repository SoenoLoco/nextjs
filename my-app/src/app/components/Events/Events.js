import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    image: "/event-1.svg",
    ageLimit: "7",
    category: "полнокупольная программа",
    title: "Прогулка по звёздному небу",
    description:
      "Мы предлагаем вам прогуляться по самым ярким созвездиям северного полушария, насладиться петербургским звездным небом всех сезонов, полюбоваться Млечным Путем и, конечно, загадать заветное желание на 'падающую' звезду",
    price1: 400,
    price2: 600,
  },
  {
    id: 2,
    image: "/event-2.svg",
    ageLimit: "4",
    category: "детская интерактивная программа",
    title: "Путешествие по Солнечной системе",
    description:
      "Программа для самых юных посетителей, где можно весело и увлекательно совершить экспедицию на космическом корабле к удивительным планетам. Узнаем какая из планет самая большая, а какая ближе всего находится к Солнцу.",
    price1: 400,
    price2: 600,
  },
  {
    id: 3,
    image: "/event-3.svg",
    ageLimit: "10",
    category: "полнокупольная программа",
    title: "Тёмная астрономия",
    description:
      "До появления науки как таковой, мы обращались к мифам. На программе «Мифы и легенды звёздного неба» мы узнаем, как люди древности использовали мифологическое мышление в попытках понять, каково место человека во Вселенной...",
    price1: 400,
    price2: 600,
  },
];

export default function Events() {
  return (
    <section className="w-full px-[230px] py-20">
      <div className="flex items-center justify-center gap-6 mb-10">
        <img src="/star.svg" alt="" className="w-10 h-10" />
        <h2 className="text-5xl font-bold text-white font-benzin tracking-wide">
          События
        </h2>
        <img src="/star.svg" alt="" className="w-10 h-10" />
      </div>

      <div className="flex justify-center gap-3 mb-10">
        <button className="cursor-pointer px-6 py-2 rounded-full bg-[#3805F2] text-white text-xs font-gilroy">
          Программы
        </button>
        <button className="cursor-pointer px-6 py-2 rounded-full border border-gray-700 text-gray-400 text-xs font-gilroy hover:border-gray-500 transition-colors">
          Мероприятия
        </button>
        <button className="cursor-pointer px-6 py-2 rounded-full border border-gray-700 text-gray-400 text-xs font-gilroy hover:border-gray-500 transition-colors">
          Лекции
        </button>
      </div>

      <div className="flex flex-col">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            ageLimit={event.ageLimit}
            category={event.category}
            title={event.title}
            description={event.description}
            price1={event.price1}
            price2={event.price2}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="cursor-pointer w-full max-w-[700px] bg-white text-black py-4 rounded-full font-bold font-benzin text-sm hover:bg-gray-200 transition-colors">
          Показать еще
        </button>
      </div>
    </section>
  );
}
