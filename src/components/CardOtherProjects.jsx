import { ReactComponent as Branch } from '../assets/icons/branch.svg'
import { ReactComponent as Link } from '../assets/icons/link.svg'

import { StackIcon } from 'github-automated-repos/index'

export function CardOuthersProjects({ Title, Content, Github, Site, Stacks }) {
  const site = `${Site}`
  // container w-70 h-[100%] my-2 p-4 bg-gray-100 shadow-lg shadow-purple-700/25 rounded-xl lg:inline lg:max-w-sm
  return (
    <div className="w-full my-2 p-4 shadow-lg shadow-purple-700/25 rounded-xl lg:w-64 md:w-72">
      <ul className="flex justify-between">
        <a href={Github} target="blank">
          <Branch width={28} stroke="#34014E" />
        </a>
        <a href={site} target="blank">
          <Link width={24} fill="#34014E" />
        </a>
      </ul>

      <h3 className="text-purple-700 font-bold ">{Title}</h3>

      <div className="py-2 h-48 flex flex-col justify-between">
        <p>{Content}</p>
        <span className="flex gap-2">
          {Stacks.map((icon) => {
            return <StackIcon key={icon} iconItem={icon} />
          })}
        </span>
      </div>
    </div>
  )
}
