import { PageProject } from '../components/PageProject'
import { Flags } from "../components/Flags";
import { Button } from '../components/Button';
import { Container } from '../components/Container';

import photoProfile from '../assets/imgs/prhotoProfileO.png'
import project77Vector from '../assets/imgs/project77Vector.png'
import project77 from '../assets/imgs/Project77.png'
import vectorTasksList from '../assets/imgs/vectorTasksList.png'
import taksList from '../assets/imgs/taksList.png'
import VectorApi from '../assets/imgs/VectorApi.png'
import apiEcommerce from '../assets/imgs/apiEcommerce.png'
import diamomVector from '../assets/imgs/diamomVector.png'
import marianaSemiJoias from '../assets/imgs/marianaSemiJoias.png'
import nameVector from '../assets/imgs/nameVector.png'

export function Home() {
  return (
    <div>
      <Container id="Home" ClassName="bg-black bg-fixed flex-col-reverse lg:flex-row">
        <div  className='lg:flex-1 lg:text-3xl md:text-2xl text-2xl'>
          <h1>Hey!!</h1>
          <h1>Eu sou renarasecchim</h1>
          <h1> Development fullstack</h1>
        </div>

        <div ClassName='lg:flex-2 transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >
          <img 
            className='w-10/12 filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' 
            src={photoProfile}
          />
        </div>
      </Container>

     <Container  ClassName="flex-col bg-zinc-950">
        <div id="#about">
          <h1 className="font-thin text-2xl py-72 lg:text-4xl lg:py-96 md:py-72">Less to worry about...</h1>
        </div>
        <p className='py-4 text-xl'>Quem sou eu</p>
      </Container>

      <Container  ClassName="bg-about bg-no-repeat bg-cover text-xl flex-col justify-center gap-6  lg:gap-16 lg:font-bold lg:text-2xl text-center">
        <p>Como iniciante na área da tecnologia, sou movido por uma fome insaciável de explorar o imenso mundo da tecnologia. </p>
        <p>
          O meu objetivo é propor, de forma criativa e acessível, soluções para resolver problemas das pessoas. É claro que esta viagem
          vai para além do crescimento profissional e da transição de carreira;
        </p>
        <p>
          Trata-se de realizar um sonho antigo que me levou a migrar para a área da tecnologia.
          É por isso que os meus olhos brilham de entusiasmo e estou constantemente motivado.
        </p>
      </Container>

      <Container id="projets" ClassName="bg-[#5A877D]">
        <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-3/6' src={project77Vector}/>
        <PageProject
          Title="Project 77"
          Status="Em produção"
          image={project77}
          urlProject="https://github.com/Ar3secchim/project-77-days"
          urlWebsite="https://project-77-days-pwa.vercel.app/"
        >
          <div className="flex gap-2">
            <Flags Icon={true} Title="Front End"/>
            <Flags Icon={true} Title="mobile"/>
            <Flags Icon={true} Title="design web"/>
          </div>

          <div className='py-4'>
            <span className='mr-8 text-xl'>Data</span>
            <span className='text-xl'>Jul 2023 - current</span>
          </div>
        </PageProject>
      </Container>

        <Container ClassName="bg-[#CECECE] items-center text-black">
          <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-3/6' src={vectorTasksList}/>
          <PageProject
            Title="Task List"
            Status="Live"
            image={taksList}
            urlProject="https://github.com/Ar3secchim/tasks-list-react"
            urlWebsite="https://tasks-list-gilt.vercel.app/"
          >
            <div className="flex gap-2">
              <Flags ClassName="border-black" Icon={true} Title="Front End"/>
              <Flags ClassName="border-black" Icon={true} Title="mobile"/>
              <Flags ClassName="border-black" Icon={true} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-8 text-xl'>Data</span>
              <span className='text-xl'>May 2023 - Jul 2023</span>
            </div>
          </PageProject>
        </Container>

        <Container id="projets" ClassName="bg-[#262626] items-center">
          <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-3/6' src={VectorApi}/>
          <PageProject
            Title="Api Ecomerce"
            Status="Em produção"
            image={apiEcommerce}
            urlProject="https://github.com/Ar3secchim/crud-Ecommerce-App"
            urlWebsite="https://github.com/Ar3secchim/crud-Ecommerce-App"
          >
            <div className="flex gap-2">
              <Flags Icon={true} Title="Back End"/>
              <Flags Icon={true} Title="Java"/>
              <Flags Icon={true} Title="mysql"/>
            </div>

            <div className='py-4'>
              <span className='mr-6 text-xl'>Data</span>
              <span className='text-xl'>Aug 2023 - current</span>
            </div>
          </PageProject>
        </Container>

        <Container ClassName="bg-[#A88629] items-center">
          <img className=' hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-5/12' src={diamomVector}/>
        <PageProject
            Title="Marina Semijoias"
            Status="Live"
            image={marianaSemiJoias}
            urlProject="https://github.com/Ar3secchim/site_marinaSemijoias"
            urlWebsite="https://marinasemijoias.vercel.app/"
          >
            <div className="flex gap-2">
              <Flags Icon={true} Title="Front End"/>
              <Flags Icon={true} Title="mobile"/>
              <Flags Icon={true} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-8 text-xl'>Data</span>
              <span className='text-xl'>Jul 2022 - Aug 2023</span>
            </div>
          </PageProject>
        </Container>''


        <Container ClassName="flex-col text-center">
          <h1 className=" text-2xl font-bold lg:text-4xl">Quer mais de</h1>
          <img  className="w-10/12 lg:w-1/3" src={nameVector} />
        </Container>

        <Container  id="about2" ClassName="bg-[#262626] flex-col text-lg gap-6 lg:gap-16 lg:text-[36px] text-center">
          <p>O trabalho de excelência resulta do equilíbrio.</p>
          <p>Se quer um criativo talentoso que desenvolve soluções poderosas de forma sustentável, criativa e funcional.</p>

          <Button Route="contact">Entre em contato</Button>
      </Container>
    </div>
  )
}
