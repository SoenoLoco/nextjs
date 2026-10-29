import Link from "next/link";
import EventCard from "./EventCard";
import { EventsData } from "@/Data/EventsData";

export default function Events() {
  return (
    <section id="events" className="w-full px-[230px] py-20">
      <div className="flex items-center justify-center gap-6 mb-10">
        <img src="/star.svg" alt="" className="w-10 h-10" />
        <h2 className="text-5xl font-bold text-white font-benzin tracking-wide">
          События
        </h2>
        <img src="/star.svg" alt="" className="w-10 h-10" />
      </div>

      <div className="flex flex-col">
        {EventsData.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard
              image={event.image}
              ageLimit={event.ageLimit}
              category={event.category}
              title={event.title}
              description={event.description}
              price1={event.price1}
              price2={event.price2}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="cursor-pointer w-full max-w-[700px] bg-white text-black py-4 rounded-full font-bold font-benzin text-sm border-2 border-white hover:bg-[#3805F2] hover:text-white hover:border-[#3805F2] active:bg-[#3805F2] active:border-[#2A00B8] transition-all duration-200">
          Показать еще
        </button>
      </div>
    </section>
  );
}