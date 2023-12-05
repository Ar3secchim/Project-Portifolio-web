import  Container  from "../components/Container";
import { TitleSection } from "../components/TitleSection";

import aboutProcess from '../assets/imgs/AboutProcess.jpg'
import curiosity from '../assets/imgs/curiosity.png'
import knonwledge from '../assets/imgs/knonwledge.png'
import healf from '../assets/imgs/healf.png'
import fun from '../assets/imgs/fun.png'
import { ContainerRoot } from "../components/ContainerRoot";

export function About(){
  return(
    <Container ClassName="text-center h-full flex-col">
      <ContainerRoot  ClassName="flex-col ">
      <section>
        <TitleSection ClassName="text-xl lg:text-3xl py-24" title="Learner mode on"/>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img className="lg:w-1/2" src={aboutProcess} />

          <p className="text-xl lg:text-2xl">
              "Renara é um ethos. Significa paixão, cuidado, disciplina, compreensão e responsabilidade."
          </p>
        </div>

      </section>
    </ContainerRoot>

    <ContainerRoot ClassName="flex flex-col" >
         <TitleSection ClassName="lg:text-3xl my-8" title="Meus pilares"/>

         <div className="flex flex-col lg:flex-row lg:gap-4 gap-12">
          <div className="w-11/12 flex flex-col justify-center gap-4 text-center p-4 rounded-2xl border-gray-300 border-2 transition hover:scale-110">
            <img className="" src={knonwledge} />
            <p>Ninguém sabe tudo. Sempre em buscar de conhecimento.</p>
          </div>

          <div className="w-11/12 flex flex-col justify-center items-center gap-2 text-center p-4 rounded-2xl border-gray-300 border-2 transition hover:scale-110" >
            <img className="w-2/3" src={curiosity} />
            <p>Nunca pare de fazer perguntas. Constantemente em busca de conhecimento e compreensão mais profundos, o que leva a maneiras novas e estimulantes de fazer as coisas.</p>
          </div>

          <div className="w-11/12 flex flex-col justify-center items-center gap-2 text-center p-4 rounded-2xl border-gray-300 border-2 transition  hover:scale-110" >
            <img className="w-1/2" src={healf} />
            <p>A saude é um superpoder secreto.Usamos para a auto perfomace e a guardamos onde podemos.</p>
          </div>
          
          <div className="w-11/12 flex flex-col gap-2 justify-center items-center text-center col-span-3 p-4 rounded-2xl border-gray-300 border-2 transition  hover:scale-110">
            <img className="ml-2 " src={fun} />
            <p >Se vale a pena trabalhar, então será divertido. E posso me divertir onde quer que eu olhe.</p>
          </div>
         </div>

    </ContainerRoot>
      
     
      {/* <section>
         <TitleSection ClassName="text-3xl mt-14" title="Minha história"/>
      </section>   */}
      
    </Container>
  )
}