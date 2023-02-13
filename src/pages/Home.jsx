import  emailJS from "@emailjs/browser"

import { ReactComponent as ImgEmphasissds } from "../assets/imgs/img- emphasissds.svg"
import WomenWeb from "../assets/imgs/womenWeb.png"

import { CardSkill } from "../components/CardSkill"
import { NavBar } from "../components/NavBar"
import { CardProjects } from "../components/CardProjects"
import { CardOuthersProjects } from "../components/CardOtherProjects"
import { TitleSection } from "../components/TitleSection"

import { getRepos, getReposPinned } from '../hooks/useFetch'
import { useState } from "react"

export function Home() {
  const { reposPinned, setReposPinned } = getReposPinned()
  const { repos, setRepos } = getRepos()

  const post = [
    { id: Math.random(), title: 'HTML', percent: 60 },
    { id: Math.random(), title: 'CSS', percent: 50 },
    { id: Math.random(), title: 'JavaScript', percent: 40 },
  ]

  const frameworksLibrary = [
    { id: Math.random(), title: 'React', percent: 35 },
    { id: Math.random(), title: 'Tailwind css', percent: 25 },
    { id: Math.random(), title: 'Git & GitHub', percent: 40 },
    { id: Math.random(), title: 'Style Component', percent: 25 },
  ]

  const UxAndUi = [
    { id: Math.random(), title: 'Figma', percent: 80 },
    { id: Math.random(), title: 'AdobeXd', percent: 75 },
  ]

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  function sendEmail(e){
    e.preventDefault()
    if(name === ""|| email==="" || message=== ""){
      alert("preencha os campos")
      return
    }

    const templateParams= {
      from_name: name,
      message:message,
      email: email
    }
    
    emailJS.send("service_qe0y1mq","template_i3cr15t",templateParams, "UiwZKI13oo8oASXPi")
    .then((response)=>{
      console.log("email enviado", response.status, response.text)
      setEmail("")
      setName("")
      setMessage("")
    }, (error)=>{
      console.log("ERROR:",error)
    })
  }

  return (
    <>
      <NavBar />
      <main id="home" className="container mx-auto ">

        <section className=" flex flex-col gap-8 items-center">
          <div className="text-center pt-4 ">
            <h3 className="text-lg">Hellou,</h3>
            <h1 className="effect text-[28px]"> Eu sou a <strong className=" text-purple-700 underline decoration-purple-200"> Renara Secchim</strong></h1>
          </div>

          <ImgEmphasissds width={380} />

          <div>
            <a href="https://www.linkedin.com/in/renarasecchim/"
              target="_blank"
              className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular">
              LINKEDIN
            </a>

            <a href="https://github.com/Ar3secchim"
              target="_blank"
              className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
            rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700 font-regular">
              GITHUB
            </a>
          </div>

        </section>

        {/*About  */}
        <section id="About">
          <TitleSection title="Sobre mim" />

          <div className="lg:flex lg:items-center">
            <div className="flex-1" >
              <p className="text-justify lg:text-lg">
              Sou Renara Secchim, tenho 26 anos e sou formada em Arquitetura e urbanismo porém iniciando minha transição de carreira. Estudo programação e desenvolvo projetos há mais de 1 anos.

              Sou uma apaixonada na área de tecnologia, onde atualmente realizo muitos curso da área para aumentar o meu conhecimento. Me considero um pessoa dedicada, adaptativa e que não tem medo de tirar dúvidas quando necessário.
              </p>
              <div className="h-4"></div>

              <p className="text-justify lg:text-lg" >
              Estou buscando minha primeira oportunidade no mercado de trabalho que seja desafiadora na qual eu possa está sempre buscando a evolução na área, e que eu possa aplicar novos conhecimentos adquiridos. Gosto bastante de trabalhar na área de FrontEnd Web.
              </p>
            </div>

            <img className="flex-1" src={WomenWeb} />
          </div>
        </section>

        {/*Skills */}
        <section id="Skills">
          <TitleSection title="Skills" />
          <CardSkill title="Programming Languages" post={post} />
          <CardSkill title="Frameworks & Library & Tools" post={frameworksLibrary} />
          <CardSkill title="UX / UI " post={UxAndUi} />
        </section>

        {/* projects */}
        <section id="projects" className="overflow-x-auto ">
          <TitleSection title="Projetos realizados" />

          {reposPinned.map(((repos, index) =>
            <CardProjects
              key={index}
              Title={repos.repo}
              Text={repos.description}
              Image={repos.image}
              Tech={repos.language}
              GitHub={repos.link}
              Site={repos.website}
            />))
          }

        </section>
        {/* other projects */}
        <section className="">
          <h2 className="text-center text-purple-700 font-bold text-xl">Outros projetos</h2>
          <div className="flex gap-2 flex-col justify-center lg:justify-start lg:gap-6  lg:flex-row md:flex-wrap ">

            {repos.map(((reposOther, index) =>
              <CardOuthersProjects
                key={index}
                Github={reposOther.html_url}
                Title={reposOther.name}
                Content={reposOther.description}
                Tech={reposOther.language}
                Site={reposOther.homepage}
              />))
            }
              
          </div>
        </section>

        {/* Contact */}
        <section id="Contact">
          <TitleSection title="Contato" />
          <h3 className="text-center font-regular text-purple-700 text-lg m-4">Me envie um mensagem</h3>
          <p className="text-center mb-6">Tem uma pergunta ou proposta, ou apenas quer
            para dizer oi? Vá em frente.</p>

          <form className="flex flex-col items-center lg:w-full"
            onSubmit={sendEmail}>
            <input className="lg:w-3/6 p-2 my-2 outline-none border rounded-md " 
              type='text' 
              placeholder="Nome *"
              onChange={(e)=> setName(e.target.value)}  
              value={name}
            />

            <input className="lg:w-3/6 p-2 my-2 outline-none border rounded-md pl-2" 
              type='email' 
              placeholder="Email *" 
              onChange={(e)=> setEmail(e.target.value)}  
              value={email}
            />

            <input className="lg:w-3/6 p-2 my-2 mb-6 outline-none border rounded-md pl-2" 
              type='text' 
              placeholder="Mensagem *" 
              onChange={(e)=> setMessage(e.target.value)}  
              value={message}  
            />

            <button type="submit" className=" lg:w-44 bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular">
              ENVIAR
            </button>
          </form>
        </section>
      </main>

      <footer className="h-12 flex justify-center items-center">
        <p className="text-center text-sm text-gray-500">
          Designed and built by Renara Secchim
        </p>
      </footer>
    </>
  )
}
