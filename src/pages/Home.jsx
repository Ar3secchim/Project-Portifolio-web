import { ReactComponent as ImgEmphasissds } from "../assets/imgs/img- emphasissds.svg"
import WomenWeb from "../assets/imgs/womenWeb.png"
import Project2 from "../assets/imgs/project1.png"

import { CardSkill } from "../components/CardSkill"
import { NavBar } from "../components/NavBar"
import { CardProjects } from "../components/CardProjects"
import { CardOuthersProjects } from "../components/CardOtherProjects"
import { TitleSection } from "../components/TitleSection"

export function Home() {
  const post = [
    { id: 1, title: 'HTML', percent: 60 },
    { id: 2, title: 'CSS', percent: 50 },
    { id: 3, title: 'JavaScript', percent: 30 },
  ]

  const frameworksLibrary = [
    { id: 5, title: 'React', percent: 15 },
    { id: 6, title: 'Tailwind css', percent: 25 },
    { id: 7, title: 'Git & GitHub', percent: 40 },
  ]

  const UxAndUi = [
    { id: 8, title: 'Figma', percent: 90 },
    { id: 9, title: 'AdobeXd', percent: 90 },
  ]

  return (
    <>
      <NavBar />
      <main className="container mx-auto ">
        <section className=" flex flex-col gap-8 items-center">
          <div className="text-center pt-4 ">
            <h3 className="text-lg">Hellou,</h3>
            <h1 className="effect text-[28px]"> Eu sou a <strong className=" text-purple-700 underline decoration-purple-200"> Renara Secchim</strong></h1>
          </div>

          <ImgEmphasissds width={240} />

          <div className="">
            <a href="" className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular">
              LINKEDIN
            </a>
            <a href="" className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
            rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700 font-regular">
              GITHUB
            </a>
          </div>

        </section>

        <section>
          <TitleSection title="Sobre mim" />

          <div>
            <div>
              <p className="text-justify">
                Meu nome é Renara e gosto de criar coisas que vivam no internet e ajuda as pessoas no seu dia-a-dia. meu interesse em programação, quando começou a pandemia de 2020 e percebeu o quanto as soluções estão ajudando a ajudar sociedade a passar por isso - descobriu-se que a curiosidade era dispersos para saber como funciona por trás de uma "tela" de celulares, notebooks e assim surgiu o primeiro 'Hello world' com HTML e CSS!
              </p>
              <div className="h-4"></div>
              <p className="text-justify" >
                Meu foco principal hoje é estudar cada vez mais e construir produtos
                acessível e que proporciona experiências digitais aos diferentes
                clientes.
              </p>
            </div>

            <img src={WomenWeb} />
          </div>

        </section>

        <section>
          <TitleSection title="Skills" />
          <CardSkill title="Programming Languages" post={post} />
          <CardSkill title="Frameworks & Library & Tools" post={frameworksLibrary} />
          <CardSkill title="UX / UI " post={UxAndUi} />

        </section>

        <section className="overflow-x-auto">
          <TitleSection title="Projetos realizados" />
          <CardProjects className="overflow-x-auto"
            title="Conversor de moeda"
            text="Projeto desenvolvido na Imersão da Alura - Uma escola de ensino sobre tecnologia- projeto era começar a estudar com javascript e começar a manipular dados com DOM."
            image={Project2}
            Tech ="CSS JAVACRIPT HTML"
          />

          <CardProjects
            title="Project 2"
            text="Projeto desenvolvido na Imersão da Alura - Uma escola de ensino sobre tecnologia- projeto era começar a estudar com javascript e começar a manipular dados com DOM."
            image={Project2}
            type='SECONDARY'
            Tech ="CSS JAVACRIPT HTML"
          />

          <CardProjects
            title="Project 2"
            text="Projeto desenvolvido na Imersão da Alura - Uma escola de ensino sobre tecnologia- projeto era começar a estudar com javascript e começar a manipular dados com DOM."
            image={Project2}
            Tech ="CSS JAVACRIPT HTML"
          />
        </section>

        <section className ="px-6">
          <h2>Outros projetos</h2>
          <div className="">
            <CardOuthersProjects Title="Tasks List" Content=" Um app que lista as tarefas a serem feitas no dia, podendo assim recarregar a página as tasks ainda vão está listada. Desenvolvido no Curso input da CodarMe - Bruno Bertolini." Tech="HTML CSS" />
          </div>
        </section>

        <section>
          <TitleSection title="Contato" />
          <h3>Me envie um mensagem</h3>
          <p>Tem uma pergunta ou proposta, ou apenas quer
            para dizer oi? Vá em frente.</p>

          <form className="flex flex-col">
            <input type='text' placeholder="Nome *" />
            <input tupe='email' placeholder="Email *" />
            <input tupe='text' placeholder="Assunto" />
            <input tupe='text' placeholder="Mensagem *" />
            <button type="submit" className=" bg-gray-100  shadow-lg shadow-purple-700/30 text-lg text-purple-700
              rounded-lg px-6 py-2 hover:bg-violet-300 hover:text-purple-700  mr-4 font-regular"> ENVIAR </button>
          </form>
        </section>
      </main>

      <footer></footer>
    </>
  )
}
