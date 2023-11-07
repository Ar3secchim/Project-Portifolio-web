import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Flags } from "./Flags";
import { TitleSection } from "./TitleSection";

export function PageProject({children, Title, Status, ClassName, image, urlProject, urlWebsite}){
  return(
    <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row w-screen justify-between items-center">
        <div className="flex flex-col">
          <Flags ClassName={ClassName} Icon={false} Title={Status}/>
          <TitleSection  title={Title}/>

          {children}

          <div className="flex flex-col">
            <a href={urlProject} target="_blank" className="flex items-center gap-1 underline underline-offset-4"> Saber Mais <BiSolidRightArrowAlt/></a>
            <a href={urlWebsite} target="_blank" className="flex items-center gap-1 underline underline-offset-4"> WebSite <BiSolidRightArrowAlt/></a>
          </div>
        </div>

        <div className="flex justify-end z-10"> 
            <img className="w-11/12" src={image} />
        </div>
    </div>
  )
}