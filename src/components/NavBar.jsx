import { useState } from 'react'

import { ReactComponent as CloseBar } from '../assets/icons/closeBar.svg'

import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

export function NavBar() {
  const urlDownloaded =
    'https://drive.google.com/file/d/1jNllLICD4YHlo8E6cRNy7mBvc-uB9NSE/view?usp=share_link'

  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <div className="w-full flex justify-between my-6 fixed px-20 z-50">
      <a href="/">
        <h1 className="text-xl">RENARA SECCHIM</h1>
      </a>

      <nav
        className=" hidden md:flex lg:flex  justify-between text-lg"
      >
        <ul className="flex gap-6 items-center">

          <li
            className="hover:underline-offset-4 hover:underline"
          >
            <a href="#About"> Sobre mim </a>
          </li>

          <li
            className="hover:hover:underline-offset-4 hover:underline"
          >
            <a href="#projects"> Projetos </a>
          </li>

          <li
            className="hover:hover:underline-offset-4 hover:underline"
          >
            <a href="#Contact"> Contato </a>
          </li>

          <li>
            <a href="" target="_blank">
              <BiLogoGithub size={"30px"}/>
            </a>
          </li>

          <li>
            <a  href="https://www.linkedin.com/in/renarasecchim/" target="_blank">
              <BiLogoLinkedin size={"30px"} /> 
            </a>
          </li>

          {/* <li>
            <a
              href={urlDownloaded}
              target="_blank"
              className="border-2 border-purple-500[0.4]  rounded px-2 hover:bg-violet-100 font-regular"
              rel="noreferrer"
            >
              {' '}
              Resume{' '}
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
