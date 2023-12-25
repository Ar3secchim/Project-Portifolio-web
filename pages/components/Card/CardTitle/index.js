import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CardTitle({ Title, Route }) {
  return (
    <div className="flex items-center justify-center p-[2px] rounded-3xl gap-1  shadow-sm hover:scale-105 transform transition-all duration-500 ease-in-out  bg-gradient-to-b from-[#4e0670bb] via-[#9224579a] to-[#ff5e004b] hover:bg-[#121212d0]">
      
      <a href={Route} className="flex items-center justify-center gap-1 rounded-3xl bg-[#202020] w-full h-full p-8 ">
        <FaAngleLeft />
        <h2 className="text-xl font-bold text-center">{Title}</h2>
        <FaAngleRight />
      </a>
    </div>
  );
}
