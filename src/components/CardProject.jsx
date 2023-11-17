import { TitleSection } from "../components/TitleSection";
import { BiSolidRightArrowAlt } from "react-icons/bi";

export function CardProject({Img, Title, Data, Discription, Href, children}){
  return(
    <div className="flex flex-col items-center p-4 rounded-2xl border-gray-300 border-2 transition hover:scale-105">
      <img className="lg:w-3/4" src={Img}/>

      <div className="flex flex-col lg:flex-row text-start lg:justify-items-center lg:items-center lg:px- lg:mt-4">
        <div className="flex-0 lg:ml-6">
          <TitleSection title={Title} ClassName="text-xl lg:py-0"/>

          <div>
            <span className='pr-4 text-lg'>Data</span>
            <span className='text-lg'>{Data}</span>
            <a href={Href} target="_blank" className="flex underline underline-offset-4 items-center gap-1 pt-3"> Saber Mais <BiSolidRightArrowAlt/></a>
          </div>
        </div>

        <div className="flex-1 gap-2 lg:m-4 items-center ">
          <p className=" text-base pt-2 pb-6 flex">{Discription}</p>
          {children}
        </div>
      </div>
    </div>
  )
}