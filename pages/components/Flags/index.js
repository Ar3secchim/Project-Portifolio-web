import { BiCircle } from "react-icons/bi";

export default function Flags({ Title, Icon }) {
  return (
    <span
      className={`border-1 bg-gradient-to-b from-[#4e0670bb] via-[#9224579a] to-[#ff5e004b] rounded-full w-max m-1 px-[2px] py-[2px]`}
    >
      {Icon ? (
        <span className="text-sm flex flex-row justify-center items-center mx-[8px] my-[3px]">
          <BiCircle size={10} className="mr-2" />
          {Title}
        </span>
      ) : (
        <span className=" bg-[#141414] rounded-full text-sm px-[8px] py-[2px]">
          {Title}
        </span>
      )}
    </span>
  );
}
