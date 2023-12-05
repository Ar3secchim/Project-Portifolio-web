import { PageProject } from '../components/PageProject'
import { Flags } from "../components/Flags";
import { Button } from '../components/Button';
import  Container  from '../components/Container';
import { ContainerRoot } from '../components/ContainerRoot';

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
      <Container id="Home" ClassName="bg-black bg-fixed">
        <ContainerRoot ClassName="flex-col-reverse sm:justify-center lg:flex-row items-center lg:justify-between">
          <div  className='text-2xl lg:text-3xl xl:text-4xl'>
            <h1>Hey, I'm Renara Secchim</h1>
            <h1>Development Fullstack</h1>
          </div>

          <div ClassName='transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >
            <img 
              className='w-10/12 xl:w-full lg:w-full filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' 
              src={photoProfile}
            />
          </div>
        </ContainerRoot>
      </Container>

     <Container  ClassName=" bg-zinc-950">
        <ContainerRoot ClassName="flex-col justify-center items-center">
          <div id="#about">
            <h1 className="font-thin text-2xl py-64 lg:text-4xl lg:py-82 md:py-52">Less to worry about...</h1>
          </div>
          <p className='py-4 text-xl'>Quem sou eu</p>
        </ContainerRoot>
      </Container>

      <Container ClassName="bg-about bg-no-repeat bg-cover ">
        <ContainerRoot ClassName="flex-col text-center lg:gap-8 lg:font-thin lg:text-2xl text-lg justify-center gap-6 text-center">
          <p>Como iniciante na área da tecnologia, sou movido por uma fome insaciável de resolver problemas através da tecnologia. </p>
          <p>
            O meu objetivo é propor, de forma criativa e acessível, soluções para resolver problemas das pessoas.
          </p>
          <p>
            Esse objetivo tem por trás e realizar um sonho antigo que me levou a migrar para a área da tecnologia, que é mostrar para as pessoas que a tecnologia veio para
            facilitar nossas vidas. É por esse motivo que os meus olhos brilham de entusiasmo e me mantém constantemente motivada.
          </p>
        </ContainerRoot>
      </Container>

      <Container id="projets" ClassName="bg-[#5A877D]">
        <ContainerRoot ClassName="items-center">
          <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-3/6' src={project77Vector}/>
          <PageProject
            Title="Project 77"
            Status="Em produção"
            image={project77}
            urlProject="https://github.com/Ar3secchim/project-77-days"
            urlWebsite="https://project-77-days-pwa.vercel.app/"
           
          >
            <div className="flex gap-2">
              <Flags Icon={false} Title="Front End"/>
              <Flags Icon={false} Title="mobile"/>
              <Flags Icon={false} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-6 text-xl'>Data</span>
              <span className='text-lg'>Jul 2023 - current</span>
            </div>
          </PageProject>
        </ContainerRoot>
      </Container>

      <Container ClassName="bg-[#CECECE] items-center text-black">
        <ContainerRoot>
          <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-4/6' src={vectorTasksList}/>
          <PageProject
            Title="Task List"
            Status="Live"
            image={taksList}
            urlProject="https://github.com/Ar3secchim/tasks-list-react"
            urlWebsite="https://tasks-list-gilt.vercel.app/"
            ClassName="border-black"
          >
            <div className="flex gap-2">
              <Flags ClassName="border-black" Icon={false} Title="Front End"/>
              <Flags ClassName="border-black" Icon={false} Title="mobile"/>
              <Flags ClassName="border-black" Icon={false} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-4 text-lg'>Data</span>
              <span className='text-lg'>May 2023 - Jul 2023</span>
            </div>
          </PageProject>
        </ContainerRoot>
      </Container>

        <Container id="projets" ClassName="bg-[#262626] items-center">
          <ContainerRoot>
            <img className='hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-3/6' src={VectorApi}/>
            <PageProject
              Title="Api Ecomerce"
              Status="Em produção"
              image={apiEcommerce}
              urlProject="https://github.com/Ar3secchim/crud-Ecommerce-App"
              urlWebsite="https://github.com/Ar3secchim/crud-Ecommerce-App"
            >
              <div className="flex gap-2">
                <Flags Icon={false} Title="Back End" />
                <Flags Icon={false} Title="Java"/>
                <Flags Icon={false} Title="mysql"/>
              </div>

              <div className='py-4'>
                <span className='mr-4 text-lg'>Data</span>
                <span className='text-lg'>Aug 2023 - current</span>
              </div>
            </PageProject>
          </ContainerRoot>
        </Container>

        <Container ClassName="bg-[#A88629] items-center">
          <ContainerRoot>
            <img className=' hidden lg:flex lg:absolute lg:-z-1 lg:right-0 lg:w-5/12' src={diamomVector}/>
            <PageProject
                Title="Marina Semijoias"
                Status="Live"
                image={marianaSemiJoias}
                urlProject="https://github.com/Ar3secchim/site_marinaSemijoias"
                urlWebsite="https://marinasemijoias.vercel.app/"
              >
              <div className="flex gap-2">
                <Flags Icon={false} Title="Front End" />
                <Flags Icon={false} Title="mobile"/>
                <Flags Icon={false} Title="design web"/>
              </div>

              <div className='py-4'>
                <span className='mr-4 text-lg'>Data</span>
                <span className='text-lg'>Jul 2022 - Aug 2023</span>
              </div>
            </PageProject>
          </ContainerRoot>
        </Container>

        <Container ClassName="text-center">
          <ContainerRoot ClassName="flex-col justify-center items-center">
            <h1 className="text-2xl font-regular lg:text-4xl mb-2 xl:text-[72px]">Quer mais de</h1>
            <img  className="w-2/5 " src={nameVector} />
          </ContainerRoot>
        </Container>

        <Container  id="about2" ClassName="bg-[#262626] lg:text-[36px]">
          <ContainerRoot ClassName="flex-col gap-8 justify-center items-center">
            <p>O trabalho de excelência resulta do equilíbrio.</p>
            <p className="leading-snug text-center">Se quer um criativo talentoso que desenvolve soluções poderosas de forma sustentável, criativa e funcional.</p>

            <Button Route="contact">Entre em contato</Button>
          </ContainerRoot>
      </Container>
    </div>
  )
}
