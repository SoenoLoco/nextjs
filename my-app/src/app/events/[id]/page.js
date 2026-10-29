import Link from "next/link";
import { EventsData } from "@/Data/EventsData";

export default async function EventDetailPage({ params }) {
  const resolvedParams = await params;

  const event = EventsData.find((e) => e.id === Number(resolvedParams.id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-white font-benzin text-4xl">Событие не найдено</h1>
      </div>
    );
  }

    return (
    <section className="w-full max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-10 min-h-screen">

      <div className="max-w-7xl mx-auto">

        <Link 
          href="/#events" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-gilroy text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Вернуться к событиям
        </Link>


        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">


          <div className="relative w-full lg:w-[55%] aspect-[4/3] rounded-[40px] overflow-hidden shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {/* Кружок с возрастом */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-sm font-bold text-black font-gilroy">
              {event.ageLimit}+
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 w-full lg:w-[45%]">
            
            <p className="text-xs tracking-wider uppercase font-gilroy text-gray-400">
              {event.category}
            </p>
            
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white font-benzin leading-tight uppercase">
              {event.title}
            </h1>

            <div className="flex items-center gap-10 py-4 border-y border-gray-800 mt-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-gilroy mb-1">Длительность</span>
                <span className="text-white font-benzin text-lg lg:text-xl">{event.duration}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-gilroy mb-1">Возраст</span>
                <span className="text-white font-benzin text-lg lg:text-xl">{event.ageLimit}+</span>
              </div>
            </div>

            <p className="text-base text-gray-300 font-gilroy leading-relaxed mt-2">
              {event.fullDescription}
            </p>

            <div className="mt-8 bg-[#1A1A1A] p-6 lg:p-8 rounded-[30px] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img src="/kids.svg" alt="Детский" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-gilroy">Детский</span>
                    <span className="text-white font-gilroy font-bold">{event.price1} ₽</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img src="/person.svg" alt="Взрослый" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-gilroy">Взрослый</span>
                    <span className="text-white font-gilroy font-bold">{event.price2} ₽</span>
                  </div>
                </div>
              </div>

              <button className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#3805F2] text-white font-benzin text-sm hover:bg-white hover:text-black transition-all duration-300">
                Купить билет
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}