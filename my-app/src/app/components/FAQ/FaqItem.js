"use client";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="w-full bg-white rounded-full px-8 py-5 flex items-center justify-between gap-6 hover:bg-gray-50 transition-colors cursor-pointer text-left"
      >
        <span className="text-sm font-benzin text-[#3805F2] leading-tight">
          {question}
        </span>

        <div
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-black" : "bg-[#3805F2]"
          }`}
        >
          <span className="text-white text-xl font-light leading-none select-none">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {isOpen && (
        <p className="text-xs text-gray-400 font-gilroy leading-relaxed px-8 pt-5 pb-2 max-w-[900px]">
          {answer}
        </p>
      )}
    </div>
  );
}
