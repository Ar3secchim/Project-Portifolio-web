import { TitleSection } from "../components/TitleSection";

export function CardProject({Img, Title, Data, Discription, children}){
  return(
    <div className="flex flex-col items-center">
      <img className="w-3/4" src={Img}/>

      <div className="flex text-start justify-items-center">
        <div className="flex-0 ml-6">
          <TitleSection title={Title} ClassName="text-xl py-0"/>

          <div>
            <span className='pr-4 text-lg'>Data</span>
            <span className='text-lg'>{Data}</span>
          </div>
        </div>

        <div className="flex-1 gap-2 ml-20">
          <p className="text-lg pb-2">{Discription}</p>
          {children}
        </div>
      </div>
    </div>
  )
}