import { TitleSection } from "../components/TitleSection";

export function CardProject({Img, Title, Data, Discription, children}){
  return(
    <div className="flex flex-col items-center ">
      <img className="w-3/4" src={Img}/>

      <div className="flex flex-col lg:flex-row text-start lg:justify-items-center lg:px-16 lg:mt-8">
        <div className="flex-0 lg:ml-6">
          <TitleSection title={Title} ClassName="text-xl lg:py-0"/>

          <div>
            <span className='pr-4 text-lg'>Data</span>
            <span className='text-lg'>{Data}</span>
          </div>
        </div>

        <div className="flex-1 gap-2 lg:ml-20 items-center ">
          <p className=" text-base lg:text-lg pb-2">{Discription}</p>
          {children}
        </div>
      </div>
    </div>
  )
}