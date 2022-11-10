import { ReactComponent as Link } from "../assets/icons/link.svg"
import { ReactComponent as Github } from "../assets/icons/github.svg"

const type = 'SECONDARY' | 'PRIMARY'

export function CardProjects({ title, text, image, type }) {

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
              <Link width={24} />
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
              <Link width={24} />
            </li>
          </ul>
        </div>

        <div>
          <img src={image} />
        </div>
      </div>
    )
  }

  const Render = (type) => {

    if (type === 'SECONDARY') {
      <Secondary />
      console.log(1)
    } else {
      <Primary />
    }
  }

  return (
    <div>
      <Render />
    </div>
  )
}
