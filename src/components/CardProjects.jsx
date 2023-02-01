import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Github } from "../assets/icons/github.svg"



export function CardProjects({ Title, Text, Image, Site, GitHub, Tech }) {
 
    return (
      <div className="py-4">
        <div className=" lg:flex lg:items-center lg:relative overflow-hidden lg:py-8">
          <div className="lg:flex lg:flex-col  lg:absolute lg:w-4/6 lg:bg-gray-100/90 lg:shadow-lg lg:shadow-purple-700/25 lg:rounded-xl lg:p-6 lg:z-10">

            <h3 className="hidden text-base text-gray-500
            md:inline pb-2"
            >Projeto de destaque</h3>
            <h2 className="pb-2 text-purple-700 font-regular text-xl">{Title}</h2>
            <p className="hidden lg:block lg:text-lg">
              {Text}
            </p>

            <div className="hidden md:hidden lg:flex lg:pt-4 lg:flex-col" >
              <span className="text-white font-regular hidden lg:inline lg:w-fit lg:p-1 lg:rounded-md lg:bg-purple-300">{Tech}</span>
              <div className="lg:flex lg:pt-3 ">
                <a href={GitHub} className="pr-2">
                  <Github width={24} height={24} fill="#3B3F45" />
                </a>
                <a href={Site} className="pr-2" >
                  <Link width={24} fill="#3B3F45" />
                </a>
              </div>
            </div>

          </div>

          <div className=" lg:relative lg:-right-2/4 lg:w-6/12 lg:blur-[1px] flex justify-center">
            <img src={Image} />
          </div>

        </div>
        {/* list links mobile */}
        <ul className="lg:hidden">
          <span className="text-gray-500 hidden lg:inline">{Tech}</span>

          <div className="flex mt-2 justify-end">
            <a href={GitHub} className="pr-2">
              <Github width={24} height={24} fill="#3B3F45" />
            </a>
            <a href={Site} className="pr-2" >
              <Link width={24} fill="#3B3F45" />
            </a>
          </div>
        </ul>
      </div>
    )
}
