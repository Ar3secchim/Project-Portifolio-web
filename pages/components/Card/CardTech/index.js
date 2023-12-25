import Image from "next/image";

export default function CardTech({ Icon }) {
  return (
    <div className="p-2 flex w-32 h-20 items-center flex-col justify-center  rounded-2xl gap-1  shadow-sm hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-[#121212d0] bg-[#202020] border-2 border-[#262626] ">
      <Image src={Icon}  />
    </div>
  );
}
