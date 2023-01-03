import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Branch } from "../assets/icons/branch.svg"

export function CardOuthersProjects ({Title, Content, Tech, Github, Site}) {
  return(
    <div className="hidden w-96 my-4 p-4 bg-gray-100 shadow-lg shadow-purple-700/25 rounded-xl lg:inline">
      <ul className="flex justify-between">
        <a href={Github}><Branch width={28} stroke ="#34014E" /></a>
        <a href={Site} target="blank"> <Link width={24} fill="#34014E"/></a>
      </ul>

      <div className="py-2">
        <h3 className="text-purple-700 font-bold pb-2">{Title}</h3>
        <p>{Content}</p>
      </div>

      <span className= "text-xs text-purple-700 font-thin">{Tech}</span>
    </div>
  )
}