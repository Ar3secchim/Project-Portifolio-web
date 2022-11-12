import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Github } from "../assets/icons/github.svg"

const type = 'SECONDARY' | 'PRIMARY'

export function CardProjects({ title, text, image, type = 'PRIMARY'}) {

  const Primary = () => {
    return (
      <div className="flex">
        <div >
          <div className="">
            <h3>Projeto de destaque</h3>
            <h2>{title}</h2>
          </div>
          <p>
            {text}
          </p>
          <ul className="flex">
            <li>
              <Github width={24} height={24} />
            </li>
            <li>
              <Link width={24} fill="#F2F2C2"/>
            </li>
          </ul>
        </div>

        <div>
          <img src={image} />
        </div>
      </div>
    )
  }

  const Secondary = () => {
    return (
      <div className="flex">
        <div>
          <img src={image} />
        </div>

        <div>
          <div className="">
            <h3>Projeto de destaque</h3>
            <h2>{title}</h2>
          </div>
          <p>
            {text}
          </p>
          <ul className="flex">
            <li>
              <Github width={24} height={24} />
            </li>
            <li>
              <Link width={24} />
            </li>
          </ul>
        </div>
      </div>
    )
  }

  const Render = (props) => {

    if(type === 'PRIMARY'){
      return <Primary />
    }else{
      return <Secondary />
    }

  }
  return <Render />

}
