export default function Hero() {
  return (
    <section className="py-6 lg:py-10 flex flex-col gap-4 lg:gap-6">
      <div className="bg-white text-black rounded-[30px] lg:rounded-[40px] p-6 lg:p-10 flex flex-col lg:flex-row justify-between overflow-hidden relative min-h-[350px] lg:min-h-[420px]">
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[600px] relative z-10">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight font-benzin">
            Раскройте тайны звёзд <br />с помощью <span className="text-[#3805F2]">Celestia</span>
          </h1>
          <p className="text-xs lg:text-sm text-gray-600 font-gilroy max-w-[480px]">
            Мы проводим специальные мероприятия, такие как ночи наблюдения за звёздами, лекции и многое другое
          </p>
          <button className="font-benzin mt-4 lg:mt-8 bg-[#3805F2] text-white border-2 border-[#3805F2] hover:bg-transparent hover:text-[#3805F2] px-8 lg:px-12 py-2.5 lg:py-3 rounded-full text-sm w-fit">
            Подробнее
          </button>
        </div>
        <div className="absolute bottom-0 right-0 w-full lg:w-[70%] h-[50%] lg:h-full lg:opacity-100">
          <img src="/hero.svg" alt="Галактика" className="w-full h-full object-contain object-bottom" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 w-full lg:w-1/3">
          <div className="bg-white text-black rounded-[30px] p-5 lg:p-8 flex flex-col justify-between min-h-[160px] lg:min-h-[220px] relative w-1/2 lg:w-full">
            <div>
              <h2 className="text-xl lg:text-3xl font-bold font-benzin leading-tight">для<br />парочек</h2>
              <p className="text-xs text-gray-600 font-gilroy mt-2 lg:mt-3">ночи наблюдения<br />за звездами</p>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 lg:w-14 lg:h-14 bg-[#3805F2] rounded-full flex items-center justify-center">
              <img src="/details.svg" alt="Подробнее" className="w-4 h-4 lg:w-6 lg:h-6" />
            </div>
          </div>

          <div className="bg-[#3805F2] text-white rounded-[30px] p-5 lg:p-8 flex flex-col justify-between min-h-[160px] lg:min-h-[180px] relative w-1/2 lg:w-full">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold font-benzin leading-tight">20%</h2>
              <p className="text-xs text-white/80 font-gilroy mt-2">скидка пенсионерам</p>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center">
              <img src="/details-black.svg" alt="Подробнее" className="w-4 h-4 lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[30px] lg:rounded-[40px] p-6 lg:p-8 w-full lg:flex-1 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 z-10">
            <img src="/logo.svg" alt="Логотип" className="w-8 h-8 lg:w-10 lg:h-10" />
            <h2 className="text-lg lg:text-2xl font-bold text-white font-benzin leading-tight">ОНЛАЙН-<br />ПРОГУЛКА</h2>
          </div>
          <div className="flex gap-2 lg:gap-6 z-10">
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex flex-col items-center justify-center text-black">
              <span className="text-base lg:text-xl font-bold font-benzin">&gt;50</span>
              <span className="text-[10px] lg:text-xs font-gilroy">залов</span>
            </div>
            <div className="w-24 h-24 lg:w-40 lg:h-40 bg-[#3805F2] rounded-full flex flex-col items-center justify-center text-white z-20">
              <span className="text-xl lg:text-2xl font-bold font-benzin">&gt;100</span>
              <span className="text-[10px] lg:text-xs font-gilroy text-center px-2">программ</span>
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex flex-col items-center justify-center text-black">
              <span className="text-base lg:text-xl font-bold font-benzin">&gt;20</span>
              <span className="text-[10px] lg:text-xs font-gilroy">телескопов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}