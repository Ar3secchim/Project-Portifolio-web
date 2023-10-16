import { NavBar } from '../components/NavBar'
import { PageProject } from '../components/PageProject'
import { Flags } from "../components/Flags";
import { Button } from '../components/Button';
import { Contact } from './Contact';
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
      {/* <span className="w-0.5 h-screen bg-gray-300 absolute -mx-[4px]"> </span> */}

      <Container id="Home" className="items-center bg-black bg-fixed">
        <div  className='lg:flex-1 lg:text-3xl md:text-2xl'>
          <h1>Hey!!</h1>
          <h1>Eu sou renarasecchim</h1>
          <h1> Development fullstack</h1>
        </div>

        <div className='lg:w-80 md:w-64 flex-2 flex justify-center transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >

          <img 
            className='filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' 
            src={photoProfile}
          />
        </div>
      </Container>

     <Container id="About" ClassName="flex-col bg-zinc-950">
        <div>
          <h1 className="font-thin text-4xl py-96 md:py-72">Less to worry about...</h1>
        </div>
        <p className='py-4 text-xl'>Quem sou eu</p>
      </Container>

      <Container  ClassName="bg-about bg-no-repeat bg-cover flex-col justify-center gap-16 font-bold text-2xl text-center">
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

      <Container id="projets" ClassName="bg-[#5A877D] items-center">
        <img className='absolute -z-1 right-0 w-3/6' src={project77Vector}/>
        <PageProject
          Title="Project 77"
          Status="Em produção"
          image={project77}
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
          <img className='absolute -z-1 right-0 w-3/6' src={vectorTasksList}/>
          <PageProject
            Title="Task List"
            Status="Live"
            image={taksList}
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
          <img className='absolute -z-1 right-0 w-3/6' src={VectorApi}/>
          <PageProject
            Title="Api Ecomerce"
            Status="Em produção"
            image={apiEcommerce}
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
          <img className='absolute -z-1 right-0 w-5/12' src={diamomVector}/>
        <PageProject
            Title="Marina Semijoias"
            Status="Live"
            image={marianaSemiJoias}
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
        </Container>


        <Container ClassName="items-center justify-center">
          <h1 className="font-bold text-4xl">Quer mais de</h1>
          <img  src={nameVector} />
        </Container>

        <Container  id="about2" ClassName="bg-[#262626] flex-col justify-center gap-16 font-thim text-[36px] text-center">
          <p>O trabalho de excelência resulta do equilíbrio.</p>
          <p>Se quer um criativo talentoso que desenvolve soluções poderosas de forma sustentável, criativa e funcional.</p>

          <Button Route="contact">Entre em contato</Button>
      </Container>
    </div>
  )
}
