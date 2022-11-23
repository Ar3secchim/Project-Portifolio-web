import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Github } from "../assets/icons/github.svg"

const type = 'SECONDARY' | 'PRIMARY'

export function CardProjects({ title, text, image, type = 'PRIMARY', Site, GitHub, Tech }) {

  const Primary = () => {
    return (
      <div className="py-4">
        <div className="lg:flex lg:items-center lg:relative overflow-hidden lg:py-8">
          <div className="lg:flex lg:flex-col  lg:absolute lg:w-4/6 lg:bg-gray-100/90 lg:shadow-lg lg:shadow-purple-700/25 lg:rounded-xl lg:p-6 lg:z-10">

            <h3 className="hidden text-base text-gray-500
            md:inline pb-2"
            >Projeto de destaque</h3>
            <h2 className="pb-2 text-purple-700 font-regular text-xl">{title}</h2>
            <p className="hidden lg:block lg:text-lg">
              {text}
            </p>

            <div className="md:hidden sm:hidden lg:flex lg:pt-4">
              <a href={GitHub} className="pr-2">
                <Github width={24} height={24} fill="#3B3F45" />
              </a>
              <a href={Site} className="pr-2" >
                <Link width={24} fill="#3B3F45" />
              </a>
              <span className="text-gray-500 hidden lg:inline">{Tech}</span>
            </div>

          </div>

          <div className=" lg:relative lg:-right-2/4 lg:w-6/12 lg:blur-[1px]">
            <img src={image} />
          </div>

        </div>
        <ul className="flex py-2 justify-between lg:hidden">
          <span className="text-gray-500 hidden lg:inline">{Tech}</span>

          <div className="flex ">
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

  const Secondary = () => {
    return (
      <div className="md:hidden sm:hidden  lg:flex lg:items-center lg:relative overflow-hidden lg:py-8">
        <div className=" lg:-right-2/4 lg:w-6/12 lg:blur-[1px]">
          <img src={image} />
        </div>

        <div className="lg:flex lg:flex-col lg:absolute lg:right-1 text-right lg:w-8/12 lg:bg-gray-100/90 lg:shadow-lg lg:shadow-purple-700/25 lg:rounded-xl lg:p-6 lg:z-10">

          <h3 className="hidden text-base text-gray-500
          md:inline pb-2"
          >Projeto de destaque</h3>
          <h2 className="lg:pb-4 text-purple-700 font-regular text-xl">{title}</h2>
          <p className="hidden lg:block lg:text-lg">
            {text}
          </p>

          <div className="md:hidden sm:hidden lg:flex justify-end lg:pt-4">
            <span className="text-gray-500 hidden lg:inline">{Tech}</span>
            <a href={Site} className="pl-2" >
              <Link width={24} fill="#3B3F45" />
            </a>
            <a href={GitHub} className="pl-2">
              <Github width={24} height={24} fill="#3B3F45" />
            </a>
          </div>

        </div>
        <ul className="flex py-2 justify-between lg:hidden">
          <span className="text-gray-500 hidden lg:inline">{Tech}</span>

          <div className="flex ">
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

  const Render = (props) => {

    if (type === 'PRIMARY') {
      return <Primary />
    } else {
      return <Secondary />
    }

  }
  return <Render />

}
