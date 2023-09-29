import { BiCircle } from "react-icons/bi";
import { twMerge } from 'tailwind-merge';

export function Flags({Title, Icon, ClassName}){

  return(
    <span className={twMerge(`border rounded-lg w-max border-white ${ClassName}`)}>
      {Icon ? 
        <span className="text-sm px-[8px] py-[2px]">{Title}</span> : 
        <span className="text-sm flex flex-row justify-center items-center mx-[8px] my-[3px]"> <BiCircle size={10} className="mr-2"/> {Title}</span>
      }
    </span>
  )
}