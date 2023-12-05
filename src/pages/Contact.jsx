import  Container  from "../components/Container";
import apiEcommerce from '../assets/imgs/apiEcommerce.png'

export function Contact(){
  const urlDownloaded =
  'https://drive.google.com/file/d/1CCTLX4Mp3P6qzGPn7hXzmdgLVdAUd9io/view?usp=share_link'
  return(
      <Container ClassName="bg-[#141414] flex-col justify-center items-center">
        <p className="lg:mt-10 text-2xl">Let's create</p>
        <h1 className="text-xl lg:text-[72px] leading-relaxed">Bring your idea to life</h1>

        <div className="flex items-center">
          <img className='hidden md:flex lg:relative lg:-left-6 lg:-bottom-16' src={apiEcommerce}/>

          <div className="flex flex-col items-center gap-4 mt-10">
            <a href="https://github.com/Ar3secchim" target="_blank" 
             className="flex gap-2 w-max font-regular text-center text-xl border rounded-lg hover:bg-gray-300 border-gray-300 px-8 py-1">
               GitHub
            </a>

            <a href="https://www.linkedin.com/in/renarasecchim/" target="_blank" 
              className="flex gap-2 w-max font-regular text-center text-xl border rounded-lg hover:bg-gray-300 border-gray-300 px-6 py-1">
             Linkedin
            </a>

            <a
              href={urlDownloaded}
              target="_blank"
              className="flex gap-2 w-max font-regular text-center text-xl border rounded-lg border-gray-300 px-6 py-1"
              rel="noreferrer"
            >
              {' '}
              Resume{' '}
            </a>
            <p className="font-regular text-center lg:text-xl">renarasecchim@gmail.com</p>
          </div>
        </div>
      </Container>
  )
}