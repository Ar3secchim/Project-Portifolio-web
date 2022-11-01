import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { ReactComponent as ImgEmphasissds } from "../assets/imgs/img- emphasissds.svg"

export function Home() {

  return (
    <div>
      <nav className="flex mx-auto justify-between text-purple-700 text-lg px-6 font-regular m-4
      ">
        <ul>
          <Logo width={50}/>
        </ul>

        <ul className="flex gap-6 items-center">
          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-bold">
            <a href="" > Home </a>
          </li>

          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-bold">
            <a href="" > Sobre mim </a>
          </li>

          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-bold">
            <a href="" > Projetos </a>
          </li>

          <li>
            <button className="border-2 border-purple-500[0.4]  rounded px-2 hover:bg-violet-100 font-bold"> Resume </button>
          </li>

        </ul>
      </nav>

      <main>
        <div className=" container flex">
          <div>
            <h3 className="text-lg">Hellou,</h3>
            <h1 className="text-xl"> Eu sou a Renara Secchim</h1>
          </div>
          <ImgEmphasissds width={240}/>
        </div>
      </main>
    </div>
  )
}
