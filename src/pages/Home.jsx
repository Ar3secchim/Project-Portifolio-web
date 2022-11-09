import { ReactComponent as ImgEmphasissds } from "../assets/imgs/img- emphasissds.svg"
import WomenWeb from "../assets/imgs/womenWeb.png"

import { CardSkill } from "../components/CardSkill"
import { NavBar } from "../components/NavBar"
// import { Skills } from "../components/Skills"

export function Home() {
  const post = [
    {id: 1, title: 'HTML', percent: 60 },
    {id: 2, title: 'CSS', percent: 50 },
    {id: 3, title: 'JavaScript', percent: 30 },
  ]

  const frameworksLibrary = [
    {id: 5, title: 'React', percent: 15 },
    {id: 6, title: 'Tailwind css', percent: 25 },
    {id: 7, title: 'Git & GitHub', percent: 40 },
  ]

  const UxAndUi = [
    {id: 8, title: 'Figma', percent: 90 },
    {id: 9, title: 'AdobeXd', percent: 90 },
  ]

  return (
    <>
      <NavBar />
      <main>
        <section className=" container flex">
          <div>
            <h3 className="text-lg">Hellou,</h3>
            <h1 className="text-xl"> Eu sou a Renara Secchim</h1>
          </div>
          <ImgEmphasissds width={240} />
        </section>

        <section>
          <div>
            <h1>About</h1>
          </div>

          <div>
            <div>
              <p>
                Olá, eu sou a Renata. Oi! Meu nome é Renara e gosto de criar coisas que vivam no internet e ajuda as pessoas no seu dia-a-dia. meu interesse em programação, quando começou a pandemia de 2020 e percebeu o quanto as soluções estão ajudando a ajudar
                sociedade a passar por isso - descobriu-se que a curiosidade era dispersos para saber como funciona por trás de uma "tela" de celulares, notebooks e assim surgiu o primeiro 'Hello world' com HTML e CSS!
              </p>
              <p>
                Meu foco principal hoje é estudar cada vez mais e construir produtos
                acessível e que proporciona experiências digitais aos diferentes
                clientes.
              </p>
            </div>

            <img src={WomenWeb} />
          </div>

        </section>
        
        <section>
          <h1>Skill</h1>
          <CardSkill title="Programming Languages" post={post}/>
          <CardSkill title="Frameworks & Library & Tools" post={frameworksLibrary}/>
          <CardSkill title="UX / UI " post={UxAndUi}/>

        </section>
      </main>

    </>
  )
}
