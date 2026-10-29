import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      <img
        src="/star.svg"
        alt=""
        className="absolute top-[20%] left-[15%] w-8 h-8 opacity-50"
      />
      <img
        src="/star_big.svg"
        alt=""
        className="absolute bottom-[20%] right-[15%] w-24 h-24 opacity-30"
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        <h1 className="text-[150px] md:text-[250px] leading-none font-bold font-benzin text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-widest drop-shadow-2xl">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white font-benzin mt-4 mb-2 uppercase tracking-wide">
          Страница улетела в космос
        </h2>
        <p className="text-sm md:text-base text-gray-400 font-gilroy max-w-[500px] mb-10">
          Кажется, вы свернули не туда. Этой страницы не существует, либо она была удалена.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#3805F2] text-white px-10 py-4 rounded-full font-benzin text-sm md:text-base border-2 border-[#3805F2] hover:bg-white hover:text-black hover:border-white active:bg-[#3805F2] active:text-white active:border-[#3805F2] transition-all duration-300 cursor-pointer"
        >
          Вернуться на главную
        </Link>
      </div>

    </section>
  );
}