import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Branch } from "../assets/icons/branch.svg"

export function CardOuthersProjects ({Title, Content, Tech, Github, Site}) {
  const site = `https://${Site}`
  
  return(
    <div className="w-80 my-2 p-4 bg-gray-100 shadow-lg shadow-purple-700/25 rounded-xl lg:inline lg:w-96">
      <ul className="flex justify-between">
        <a href={Github} target="blank"><Branch width={28} stroke ="#34014E" /></a>
        <a href={site}
         target="blank"> <Link width={24} fill="#34014E"/></a>
      </ul>

      <div className="py-2">
        <h3 className="text-purple-700 font-bold pb-2">{Title}</h3>
        <p>{Content}</p>
      </div>

      <span className= "text-xs text-purple-700 font-thin">{Tech}</span>
    </div>
  )
}