import { NavBar } from '../components/NavBar'
import { PageProject } from '../components/PageProject'
import { Flags } from "../components/Flags";
import { Button } from '../components/Button';
import { Contact } from './Contact';
import { Container } from '../components/Container';

export function Home() {
  return (
    <div>
      <span className="w-0.5 h-screen bg-gray-300 absolute -mx-[4px]"> </span>

      <section id="Home" className="px-60 lg:px-20 md:px-8 flex md:justify-between  items-center h-screen bg-black bg-fixed">
        <div  className='lg:flex-1 lg:text-3xl md:text-2xl'>
          <h1>Hey!!</h1>
          <h1>Eu sou renarasecchim</h1>
          <h1> Development fullstack</h1>
        </div>

        <div className='lg:w-80 md:w-64 flex-2 flex justify-center transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >
          <img 
            className='filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' 
            src='src/assets/imgs/prhotoProfileO.png'
          />
        </div>
      </section>

     <section  id="About" className="px-60 lg:px-20 md:px-8 h-screen flex flex-col items-center justify-between">
        <div>
          <h1 className="font-thin text-4xl py-96 md:py-80">Less to worry about...</h1>
        </div>
        <p className='py-6 text-xl'>Quem sou eu</p>
      </section>

      <section  id="" className="px-60 lg:px-20 md:px-8 h-screen bg-about bg-no-repeat bg-cover flex flex-col justify-center gap-16 font-bold text-2xl text-center">
        <p>Como iniciante na área da tecnologia, sou movido por uma fome insaciável de explorar o imenso mundo da tecnologia. </p>
        <p>
          O meu objetivo é propor, de forma criativa e acessível, soluções para resolver problemas das pessoas. É claro que esta viagem
          vai para além do crescimento profissional e da transição de carreira;
        </p>
        <p>
          Trata-se de realizar um sonho antigo que me levou a migrar para a área da tecnologia.
          É por isso que os meus olhos brilham de entusiasmo e estou constantemente motivado.
        </p>
      </section>

        <section id="projets" className="bg-[#5A877D] px-60 lg:px-20 md:px-8 h-screen flex items-center">
        <img className='absolute -z-1 right-0 w-4/6' src="src/assets/imgs/project77Vector.png"/>
          <PageProject
            Title="Project 77"
            Status="Em produção"
            image="src/assets/imgs/Project77.png"
          >
            <div className="flex gap-2">
              <Flags Icon={true} Title="Front End"/>
              <Flags Icon={true} Title="mobile"/>
              <Flags Icon={true} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-8'>Data</span>
              <span>Jul 2023 - current</span>
            </div>
          </PageProject>
        </section>

        <section className="bg-[#CECECE] px-60 lg:px-20 md:px-8 h-screen flex items-center text-black">
          <img className='absolute -z-1 right-0 w-4/6' src="src/assets/imgs/vectorTasksList.png"/>
          <PageProject
            Title="Task List"
            Status="Live"
            image="src/assets/imgs/taksList.png"
          >
            <div className="flex gap-2">
              <Flags ClassName="border-black" Icon={true} Title="Front End"/>
              <Flags ClassName="border-black" Icon={true} Title="mobile"/>
              <Flags ClassName="border-black" Icon={true} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-8'>Data</span>
              <span>May 2023 - Jul 2023</span>
            </div>
          </PageProject>
        </section>

        <section id="projets" className="bg-[#262626] px-60 lg:px-20 md:px-8 h-screen flex items-center">
          <img className='absolute -z-1 right-0 w-4/6' src="src/assets/imgs/VectorApi.png"/>
          <PageProject
            Title="Api Ecomerce "
            Status="Em produção"
            image="src/assets/imgs/apiEcommerce.png"
          >
            <div className="flex gap-2">
              <Flags Icon={true} Title="Back End"/>
              <Flags Icon={true} Title="Java"/>
              <Flags Icon={true} Title="mysql"/>
            </div>

            <div className='py-4'>
              <span className='mr-6'>Data</span>
              <span>Aug 2023 - current</span>
            </div>
          </PageProject>
        </section>

        <section className="bg-[#A88629] px-60 lg:px-20 md:px-8 h-screen flex items-center">
          <img className='absolute -z-1 right-0 w-3/4' src="src/assets/imgs/diamomVector.png"/>
        <PageProject
            Title="Marina Semijoias"
            Status="Live"
            image="src/assets/imgs/marianaSemiJoias.png"
          >
            <div className="flex gap-2">
              <Flags Icon={true} Title="Front End"/>
              <Flags Icon={true} Title="mobile"/>
              <Flags Icon={true} Title="design web"/>
            </div>

            <div className='py-4'>
              <span className='mr-8'>Data</span>
              <span>Jul 2022 - Aug 2023</span>
            </div>
          </PageProject>
        </section>


        <section  id="about" className="px-60 lg:px-20 md:px-8 h-screen w-screen flex items-center justify-center">
          <h1 className="font-bold text-4xl">Quer mais de</h1>
          <img  src="src/assets/imgs/nameVector.png"/>
        </section>

        <Container  id="about2" ClassName="bg-[#262626] flex-col justify-center gap-16 font-thim text-[36px] text-center">
          <p>O trabalho de excelência resulta do equilíbrio.</p>
          <p>Se quer um criativo talentoso que desenvolve soluções poderosas de forma sustentável, criativa e funcional.</p>

          <Button Route="contact">Entre em contato</Button>
      </Container>
    </div>
  )
}
