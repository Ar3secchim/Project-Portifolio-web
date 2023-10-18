import { Container } from "../components/Container";
import { TitleSection } from "../components/TitleSection";

import aboutProcess from '../assets/imgs/AboutProcess.jpg'

export function About(){
  return(
    <Container ClassName="text-center flex-col overscroll-auto h-full">
      <section>
        <TitleSection ClassName="text-3xl py-24" title="Learner mode on"/>

        <div className="flex gap-8 items-center">
          <img className="w-1/2" src={aboutProcess} />

          <p className="text-2xl">
              "Renara é um ethos. Significa paixão, cuidado, disciplina, compreensão e responsabilidade."
          </p>
        </div>

      </section>

      {/* <section>
         <TitleSection ClassName="text-3xl" title="Meus pilares"/>

      </section>

      <section>
         <TitleSection ClassName="text-3xl" title="Minha história"/>
         
      </section> */}

    </Container>
  )
}