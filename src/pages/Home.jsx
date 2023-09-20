import { NavBar } from '../components/NavBar'

export function Home() {
  return (
    <div>
      <span className="w-0.5 h-screen bg-gray-300 absolute -mx-[4px]"> </span>
      <NavBar />

      <section id="Home" className="px-60 lg:px-20 md:px-8 flex md:justify-between  items-center h-screen bg-black bg-fixed">
        <div  className='lg:flex-1 lg:text-3xl md:text-2xl'>
          <h1>Hey!!</h1>
          <h1>Eu sou renarasecchim</h1>
          <h1> Development fullstack</h1>
        </div>

        <div className='lg:w-80 md:w-64 flex-2 flex justify-center transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >
          <img className='filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' src='src/assets/imgs/prhotoProfileO.png'/>
        </div>
      </section>

     <section  id="about" className="px-60 lg:px-20 md:px-8 h-screen flex flex-col items-center justify-between">
        <div>
          <h1 className="font-thin text-4xl py-96 md:py-80">Less to worry about...</h1>
        </div>
        <p className='py-6 text-xl'>Quem sou eu</p>
      </section>

      <section  id="about2" className="px-60 lg:px-20 md:px-8 h-screen bg-about bg-no-repeat bg-cover flex flex-col justify-center gap-16 font-bold text-2xl text-center">
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

        <section id="projets">
            
        </section>
    </div>
  )
}
