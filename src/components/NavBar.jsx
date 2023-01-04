import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { ReactComponent as CloseBar } from "../assets/icons/closeBar.svg"
import { useState } from "react"; // import state

export function NavBar() {
  const urlDownloaded =  'https://drive.google.com/file/d/1jNllLICD4YHlo8E6cRNy7mBvc-uB9NSE/view?usp=share_link'
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <div className="container flex items-center justify-between md:mx-auto py-4">
      <a href="/">
        <Logo width={50} />
      </a>

      <div>
        <section className="MOBILE-MENU flex lg:hidden sm:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-purple-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute top-5 left-0 px-4 py-4 ">
              <Logo width={50} />
            </div>
            {/* toggle class based on isNavOpen state */}
            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <CloseBar />
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-xl ">
              <li className=" text-purple-700 border-b border-purple-300 my-8 font-regular">
                <a href="#About">Sobre mim</a>
              </li>

              <li className=" text-purple-700 border-b border-purple-300 my-8 font-regular">
                <a href="#projects">Projetos</a>
              </li>

              <li className=" text-purple-700 border-b border-purple-300 my-8 font-regular">
                <a href="#Contact">Contato</a>
              </li>

              <li>
                <a href={urlDownloaded} target="_blank" className="border-2 border-purple-500[0.4]   text-purple-700 rounded px-4 py-2 hover:bg-violet-100 font-regular my-8"> Resume </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <nav className="DESKTOP-MENU hidden md:flex lg:flex  justify-between text-purple-700 text-lg  font-regular
      ">
        <ul className="flex gap-6 items-center">
          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-regular">
            <a href="home" > Home </a>
          </li>

          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-regular">
            <a href="#About" > Sobre mim </a>
          </li>

          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-regular">
            <a href="#projects" > Projetos </a>
          </li>

          <li className="hover:text-purple-300 hover:underline underline-offset-8
          font-regular">
            <a href="#Contact" > Contato </a>
          </li>

          <li>
            <a href={urlDownloaded} target="_blank" className="border-2 border-purple-500[0.4]  rounded px-2 hover:bg-violet-100 font-regular"> Resume </a>
          </li>

        </ul>
      </nav>
    </div>
  )
}