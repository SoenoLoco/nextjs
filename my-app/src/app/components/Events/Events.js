import Link from "next/link";
import EventCard from "./EventCard";
import { EventsData } from "@/Data/EventsData";

export default function Events() {
  return (
    <section id="events" className="py-10 lg:py-20">
      <div className="flex items-center justify-center gap-4 lg:gap-6 mb-8 lg:mb-10">
        <img src="/star.svg" alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
        <h2 className="text-3xl lg:text-5xl font-bold text-white font-benzin tracking-wide">События</h2>
        <img src="/star.svg" alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
      </div>

      <div className="flex flex-col gap-4 lg:gap-0">
        {EventsData.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard {...event} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-10">
        <button className="cursor-pointer w-full max-w-[400px] lg:max-w-[700px] bg-white text-black py-3 lg:py-4 rounded-full font-bold font-benzin text-xs lg:text-sm hover:bg-[#3805F2] hover:text-white transition-all duration-200">
          Показать еще
        </button>
      </div>
    </section>
  );
}