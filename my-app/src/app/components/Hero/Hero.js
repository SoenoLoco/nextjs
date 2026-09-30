export default function Hero() {
  return (
    <section className="w-full px-[230px] py-10 flex flex-col gap-6">
      <div className="bg-white text-black rounded-[40px] p-10 flex justify-between overflow-hidden relative min-h-[420px]">
        <div className="flex flex-col gap-5 max-w-[6000px] relative z-10">
          <h1 className="text-5xl font-bold leading-tight font-benzin">
            Раскройте тайны звёзд <br />с помощью{" "}
            <span className="text-[#3805F2]">Celestia</span>
          </h1>

          <p className="text-xs text-gray-600 font-gilroy text-medium max-w-[480px]">
            Мы проводим специальные мероприятия, такие как ночи наблюдения за
            звёздами, лекции и многое другое
          </p>

          <button className="font-benzin mt-[45] bg-[#3805F2] text-white border-2 border-[#3805F2] hover:bg-transparent hover:text-[#3805F2] active:bg-white active:text-black active:border-transparent active:shadow-[0_0_30px_rgba(56,5,242,0.8)] px-12 py-3 rounded-full text-sm font-medium transition-all duration-200 w-fit cursor-pointer">
            Подробнее
          </button>
        </div>

        <div className="absolute right-0 top-30 h-full w-[70%]">
          <img
            src="/hero.svg"
            alt="Галактика"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex gap-6 items-stretch">
        <div className="flex flex-col gap-6 w-1/3">
          <div className="bg-white text-black rounded-[40px] p-8 flex flex-col justify-between min-h-[220px] relative">
            <div>
              <h2 className="text-3xl font-bold font-benzin leading-tight">
                для
                <br />
                парочек
              </h2>
              <p className="text-sm text-gray-600 font-gilroy mt-3">
                ночи наблюдения
                <br />
                за звездами
              </p>
            </div>
            <div className="group absolute bottom-6 right-6 w-14 h-14 bg-[#3805F2] rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <img
                src="/details.svg"
                alt="Подробнее"
                className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-75"
              />
            </div>
          </div>

          <div className="bg-[#3805F2] text-white rounded-[40px] p-8 flex flex-col justify-between min-h-[180px] relative">
            <div>
              <h2 className="text-4xl font-bold font-benzin leading-tight">
                20%
              </h2>
              <p className="text-sm text-white/80 font-gilroy mt-2">
                скидка пенсионерам
              </p>
            </div>
            <div className="group absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <img
                src="/details-black.svg"
                alt="Подробнее"
                className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-75"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[40px] p-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.jpg"
              alt="Фон"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          <div className="flex items-center gap-3 mb-8 z-10">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-black text-xl">
                <img src="/logo.svg" alt="Логотип" className="" />
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white font-benzin leading-tight">
              ОНЛАЙН-
              <br />
              ПРОГУЛКА
            </h2>
          </div>

          <div className="flex gap-6 z-10">
            <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-lg">
              <span className="text-xl font-bold font-benzin">&gt;50</span>
              <span className="text-xs font-gilroy">залов</span>
            </div>

            <div className="w-40 h-40 bg-[#3805F2] rounded-full flex flex-col items-center justify-center text-white shadow-xl z-20">
              <span className="text-2xl font-bold font-benzin">&gt;100</span>
              <span className="text-xs font-gilroy text-center px-4">
                программ про Вселенную
              </span>
            </div>

            <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-lg">
              <span className="text-xl font-bold font-benzin">&gt;20</span>
              <span className="text-xs font-gilroy">телескопов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
