import { useState } from 'react'

import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { ReactComponent as CloseBar } from '../assets/icons/closeBar.svg'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'

import { Link } from 'react-router-dom';
import Container from './Container';
import { ContainerRoot } from './ContainerRoot';

export function NavBar() {
  const urlDownloaded =
    'https://drive.google.com/file/d/1CCTLX4Mp3P6qzGPn7hXzmdgLVdAUd9io/view?usp=share_link'

  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <Container ClassName="w-screen py-4 h-auto bg-black bg-opacity-80 burn fixed z-50">
      <ContainerRoot ClassName="flex justify-items-end gap-60 md:gap-80 xl:gap-[600px] overflow-hidden">
        <a href="/">  
          <h1 className="font-regular text-2xl hover:underline-offset-4 hover:underline lg:flex">RS</h1>
        </a>
        
        <nav className="hidden md:flex lg:flex justify-between font-regular  text-base z-50">
          <ul className="flex gap-6 items-center">
            <li className="hover:underline-offset-4 hover:underline">
              <Link to="about">Sobre</Link>
            </li>

            <li className="hover:hover:underline-offset-4 hover:underline">
              <Link to="projects"> Projetos </Link>
            </li>

            <li className="hover:hover:underline-offset-4 hover:underline">
              <Link to="contact">Contato </Link>
            </li>

            <li>
              <a href="https://github.com/Ar3secchim" target="_blank">
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
                className="border-2 border-purple-500[0.4]  rounded px-2 hover:bg-gray-300 font-regular"
                rel="noreferrer"
              >
                {' '}
                Resume{' '}
              </a>
            </li> */}
          </ul>
        </nav> 
      
        <nav className="lg:hidden md:hidden z-100">
          <div
            className="space-y-2 px-8"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav bg-gray-300' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-2"
              onClick={() => setIsNavOpen(false)}
            >
              <CloseBar />
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-lg">
                <li className="hover:underline-offset-4 hover:underline">
                  <Link to="about" 
                    onClick={() => setIsNavOpen(false)}>Sobre mim </Link>
                </li>

                <li className="hover:hover:underline-offset-4 hover:underline">
                <Link to="projects"
                  onClick={() => setIsNavOpen((prev) => !prev)} 
                > Projetos </Link>
                </li>

                <li className="hover:hover:underline-offset-4 hover:underline">
                  <Link to="contact"
                  onClick={() => setIsNavOpen((prev) => !prev)} 
                  >Contato </Link>
                </li>

                <div className='flex gap-2'>
                  <li>
                    <a href="https://github.com/Ar3secchim"    
                      onClick={() => setIsNavOpen((prev) => !prev)}  
                      target="_blank">
                      <BiLogoGithub size={"30px"}/>
                    </a>
                  </li>

                  <li>
                    <a  href="https://www.linkedin.com/in/renarasecchim/" 
                        onClick={() => setIsNavOpen((prev) => !prev)} 
                        target="_blank">
                      <BiLogoLinkedin size={"30px"} /> 
                    </a>
                  </li>
                </div>

                <li>
                  <a
                    href={urlDownloaded}
                    target="_blank"
                    className="border-2 border-purple-500[0.4]  rounded px-2 hover:bg-gray-300 font-regular"
                    rel="noreferrer"
                  >
                    {' '}
                    Resume{' '}
                  </a>
                </li>
              </ul>
          </div>
        </nav>
      </ContainerRoot>
    </Container>
  )
}
