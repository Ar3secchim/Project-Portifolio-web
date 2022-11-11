import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Branch } from "../assets/icons/branch.svg"

export function CardOuthersProjects ({Title, Content}) {
  return(
    <div className=" w-80 bg-slate-500">
      <ul>
        <li><Branch width={24} /></li>
        <li> <Link width={24} fill="#8257E5"/></li>
      </ul>

      <div>
        <h3>{Title}</h3>
        <p>{Content}</p>
      </div>

      <span></span>
    </div>
  )
}