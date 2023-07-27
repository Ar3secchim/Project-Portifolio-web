import emailJS from '@emailjs/browser'
import { useState } from 'react'

import { ReactComponent as ImgEmphasissds } from '../assets/imgs/img- emphasissds.svg'
import WomenWeb from '../assets/imgs/womenWeb.png'

import { CardOuthersProjects } from '../components/CardOtherProjects'
import { CardProjects } from '../components/CardProjects'
import { CardSkill } from '../components/CardSkill'

import { NavBar } from '../components/NavBar'
import { TitleSection } from '../components/TitleSection'

import { UxAndUi, frameworksLibrary, language } from '../dataBase/dataBase'
import { getRepos, getReposPinned } from '../hooks/useFetch'

export function Home() {
  const { reposPinned } = getReposPinned()
  const { repos } = getRepos()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    if (name === '' || email === '' || message === '') {
      alert('Preencha os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailJS
      .send(
        'service_qe0y1mq',
        'template_i3cr15t',
        templateParams,
        'UiwZKI13oo8oASXPi',
      )
      .then(
        (response) => {
          setEmail('')
          setName('')
          setMessage('')
        },
        (error) => {
          console.log('ERROR:', error)
        },
      )
  }

  return (
    <>
      <NavBar />
      <main
        id="Home"
        className="container mx-auto px-8 overflow-x-hidden lg:px-20 pt-20"
      >
        <section className="flex flex-col gap-8 items-center justify-around lg:flex-row">
          <ImgEmphasissds width={320} className="lg:flex-2" />
          <div className="text-center pt-4 lg:flex-1 lg:flex lg:flex-col lg:items-center">
            <h3 className="text-xl">Hellou,</h3>
            <h1 className="text-xl effect text-[28px]">
              Eu sou a <span> </span>
              <strong className="text-xl lg:text-lg text-purple-700 underline decoration-purple-200">
                Renara Secchim !
              </strong>
            </h1>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/renarasecchim/"
                target="_blank"
                className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular"
                rel="noreferrer"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/Ar3secchim"
                target="_blank"
                className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
            rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700 font-regular"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
          </div>
        </section>

        {/* About  */}
        <section id="About" className="mt-4">
          <TitleSection title="Sobre mim" />

          <div className="lg:flex lg:items-center">
            <div className="flex-1">
              <p className="text-justify  lg:text-base xl:text-lg">
                Sou a Renara, tenho 26 anos, sou o tipo de pessoa que sempre
                está seu modo aprendiz ligado, sou brincalhona e alto astral e
                aonde chego contágio o lugar com alegria. Sou um arquiteta que
                se encontrou na área de tecnologia, por causa de uma decepção na
                área de arquitetura. Sempre quis ajudar o máximo de pessoas com
                a minhas soluções, porém a arquitetura me trouxe um decepção
                imensa além de me deixar muito perdida no meu propósito. Hoje eu
                reconheço quem sou, o que eu quero, pois a tecnologia me
                proporcionou esse autoconhecimento, além de me fazer sentir
                realizada. Sou uma apaixonada na área de tecnologia, onde
                atualmente realizo muitos curso da área para aumentar o meu
                conhecimento. Me considero um pessoa dedicada, adaptativa e que
                não tem medo de tirar dúvidas quando necessário.
              </p>
              <div className="h-4"></div>

              <p className="text-justify lg:text-base xl:text-lg">
                Estou buscando minha primeira oportunidade no mercado de
                trabalho que seja desafiadora na qual eu possa está sempre
                buscando a evolução na área, e que eu possa aplicar novos
                conhecimentos adquiridos. Gosto bastante de trabalhar na área de
                FrontEnd Web.
              </p>
            </div>

            <img
              className="hidden w-4 lg:flex lg:w-80 xl:flex-1 md:hidden"
              alt="Ilustração de uma menina sentada com o notebook em cima das pernas"
              src={WomenWeb}
            />
          </div>
        </section>

        {/* Skills */}
        <section className=" flex flex-col gap-2">
          <TitleSection title="Skills" />
          <CardSkill title="Programming Languages" post={language} />
          <CardSkill
            title="Frameworks & Library & Tools"
            post={frameworksLibrary}
          />
          <CardSkill title="UX / UI " post={UxAndUi} />
        </section>

        {/* projects */}
        <section id="projects" className="overflow-x-auto ">
          <TitleSection title="Projetos realizados" />

          {reposPinned.map((repos) => (
            <CardProjects
              key={repos.id}
              Title={repos.name}
              Text={repos.description}
              Site={repos.homepage}
              GitHub={repos.html_url}
              Stacks={repos.topics}
              Image={`https://opengraph.githubassets.com/1/Ar3secchim/${repos.name}`}
            />
          ))}
        </section>
        {/* other projects */}
        <section>
          <TitleSection title="Outros projetos" />
          <div className="flex gap-6 flex-wrap">
            {repos.map((reposOther) => (
              <CardOuthersProjects
                key={reposOther.id}
                Github={reposOther.html_url}
                Title={reposOther.name}
                Content={reposOther.description}
                Site={reposOther.html_url}
                Stacks={reposOther.topics}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="Contact">
          <TitleSection title="Contato" />
          <h3 className="text-center font-regular text-purple-700 text-lg m-4">
            Me envie um mensagem
          </h3>
          <p className="text-center mb-6">
            Tem uma pergunta ou proposta, ou apenas quer para dizer oi? Vá em
            frente.
          </p>

          <form
            className="flex flex-col items-center lg:w-full mb-4"
            onSubmit={sendEmail}
          >
            <input
              className="lg:w-3/6 p-2 my-2 outline-none border rounded-md "
              type="text"
              placeholder="Nome *"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="lg:w-3/6 p-2 my-2 outline-none border rounded-md pl-2"
              type="email"
              placeholder="Email *"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              className="lg:w-3/6 p-2 my-2 mb-6 outline-none border rounded-md pl-2"
              type="text"
              placeholder="Mensagem *"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button
              type="submit"
              className=" lg:w-44 bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular"
            >
              ENVIAR
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-4 h-12 flex justify-center items-center">
        <p className="text-center text-sm text-gray-500">
          Designed and built by Renara Secchim
        </p>
      </footer>
    </>
  )
}
