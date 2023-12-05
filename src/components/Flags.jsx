import { BiCircle } from "react-icons/bi";
import { twMerge } from 'tailwind-merge';

export function Flags({Title, Icon, ClassName}){

  return(
    <span className={twMerge(`border-2 hover:bg-gray-300 rounded-lg w-max m-1 border-gray-300  ${ClassName}`)}>
      {Icon ? 
        <span className="text-base flex flex-row justify-center items-center mx-[8px] my-[3px]"> 
          <BiCircle size={10} className="mr-2"/> 
          {Title}
        </span>
        : 
        <span className="text-base px-[8px] py-[2px]">{Title}</span> 
      }
    </span>
  )
}