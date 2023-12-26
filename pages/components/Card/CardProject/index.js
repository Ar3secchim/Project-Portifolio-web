import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

export default function CardProject({ Img, Data, Discription, Name, children, Href }) {
  return (
    <div className="flex flex-col items-center p-6 pb-10 hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-[#121212] rounded-2xl ">
      <Image src={Img} />

      <div className="flex flex-col text-start lg:flex-row ">
        <div>
          <h6 className="font-bold text-xl">{Name}</h6>

          <div className="inline-flex font-light">
            <p className="pr-2 text-sm">Data</p>
            <p className="text-sm">{Data}</p>
          </div>
        </div>

        <div className="flex-1 gap-2 lg:ml-6 pt-2 items-center ">
          <p className="text-sm font-extralight ">{Discription}</p>
          <a className="inline-flex items-center text-sm underline-offset-2 underline" href={Href}>
            Saiba mais <FaAngleRight />
          </a>
        </div>
      </div>

      <div className="inline-flex m-2">{children}</div>
    </div>
  );
}