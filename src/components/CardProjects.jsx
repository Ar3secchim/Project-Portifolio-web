import { ReactComponent as Github } from '../assets/icons/github.svg'
import { ReactComponent as Link } from '../assets/icons/link.svg'

import { StackIcon } from 'github-automated-repos/index'

export function CardProjects({ Title, Text, Site, GitHub, Stacks, Image }) {
  return (
    <div className="py-4">
      <div className=" lg:flex lg:items-center lg:my-10 overflow-hidden lg:py-8 xl:py-0">
        <div className="p-4 lg:flex lg:flex-col lg:absolute lg:w-3/6 bg-gray-100/90 shadow-lg:shadow-purple-700/25 rounded-xl lg:p-6 lg:z-10">
          <h3
            className="hidden text-base text-gray-500
            lg:inline pb-2"
          >
            Projeto de destaque
          </h3>
          <h2 className="pb-2 text-purple-700 font-regular text-lg">{Title}</h2>
          <p className="lg:block lg:text-lg">{Text}</p>

          <div className="flex  justify-between lg:pt-4 lg:flex-col lg:gap-2 py-2">
            <span className="flex gap-2 mt-2">
              {Stacks.map((icon) => {
                return <StackIcon key={icon} iconItem={icon} />
              })}
            </span>

            <div className="flex items-center gap-2 md:flex ">
              <a
                href={GitHub}
                target="_blank"
                className="pr-2"
                rel="noreferrer"
              >
                <Github width={24} height={24} fill="#3B3F45" />
              </a>
              <a href={Site} target="_blank" className="pr-2" rel="noreferrer">
                <Link width={24} fill="#3B3F45" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex md:hidden sm:hidden lg:relative lg:-right-2/4 lg:w-6/12 lg:blur-[1px] hidden">
          <img src={Image} alt="imagem do projeto" />
        </div>
      </div>
    </div>
  )
}
