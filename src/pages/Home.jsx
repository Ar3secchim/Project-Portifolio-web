import { NavBar } from '../components/NavBar'
import { TitleSection } from '../components/TitleSection'


export function Home() {
  return (
    <>
      <span className="w-0.5 h-full bg-gray-300 absolute mx-[78px]"  > </span>
      <NavBar />

      <main
        id="Home"
        className="flex w-screen h-screen mx-auto px-8 lg:px-20 pt-20 items-center"
      >
        <section className='flex-1'>
          <h1 className="text-3xl">Hey!!</h1>
          <h1 className="text-3xl">Eu sou renarasecchim</h1>
          <h1 className="text-3xl"> Development fullstack</h1>
        </section>

        <section className='flex-2 flex justify-center transition ease-in-out delay-200 hover:-translate-y-5 hover:-translate-x-2 hover:scale-1 duration-500' >
          <img className='filter grayscale-0 hover:grayscale transition-all duration-300 ease-in-out' src='src/assets/imgs/prhotoProfileO.png'/>
        </section>
      </main>
    </>
  )
}
