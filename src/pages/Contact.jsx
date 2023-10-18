import { Container } from "../components/Container";

export function Contact(){
  return(
      <Container ClassName="bg-[#141414] flex-col">
        <p className="mt-10 text-2xl">Let's create</p>
        <h1 className="text-[72px]">Bring your idea to life</h1>

        <div className="flex items-center">
          <img className='relative -left-6 -bottom-16' src="src/assets/imgs/apiEcommerce.png"/>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/Ar3secchim" target="_blank" 
             className="flex gap-2 w-max font-regular text-center text-xl border rounded-lg border-gray-300 px-8 py-1">
               GitHub
            </a>

            <a href="https://www.linkedin.com/in/renarasecchim/" target="_blank" 
              className="flex gap-2 w-max font-regular text-center text-xl border rounded-lg border-gray-300 px-6 py-1">
             Linkedin
            </a>
            <p className="font-regular text-center text-xl">renarasecchim@gmail.com</p>
          </div>
        </div>
      </Container>
  )
}