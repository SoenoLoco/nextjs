export default function ReviewCard({ avatar, name, role, text }) {
  return (
    <div className="bg-white rounded-[40px] p-6 w-[250px] h-[370px] shrink-0 flex flex-col">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-base font-benzin text-[#3805F2] leading-tight">
            {name}
          </h3>
          <p className="text-xs text-gray-500 font-gilroy mt-0.5">{role}</p>
        </div>
      </div>

      <p className="text-xs text-black font-gilroy leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
