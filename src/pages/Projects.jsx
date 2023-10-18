import { Container } from "../components/Container";
import { Flags } from "../components/Flags";
import { CardProject } from "../components/CardProject";
import { TitleSection } from "../components/TitleSection";

import Project77 from "../assets/imgs/project77.png";
import taksList from '../assets/imgs/taksList.png'
import apiEcommerce from '../assets/imgs/apiEcommerce.png'
import mentorCycle from '../assets/imgs/mentorCyle.png'

export function Projects(){
  return(
    <Container ClassName="text-center flex-col overscroll-auto h-full">
      <TitleSection ClassName="text-3xl py-24" title="Conquistas excepcionais não se materializam de repente."/>
      
      <section className="flex flex-col gap-24">
        <CardProject
          Img ={mentorCycle}
          Title="Mentor Cycle"
          Data="Mar 2023 - current"
          Discription="O Mentor Cycle é um projeto open-source cujo objetivo é conectar pessoas na área de T.I que estão aprendendo, com profissionais com experiência de mercado, fazendo o match entre aprendiz e mentor."
        >
          <Flags Icon={true} Title="OpenSource"/>
          <Flags Icon={true} Title="Front End"/>
          <Flags Icon={true} Title="TypeScript"/>
        </CardProject>

        <CardProject
          Img ={Project77}
          Title="Project 77 Days"
          Data="Jul 2023 - current"
          Discription="Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias."
        >
          <Flags Icon={true} Title="Front End"/>
          <Flags Icon={true} Title="mobile"/>
          <Flags Icon={true} Title="design web"/>
        </CardProject>

        <CardProject
          Img ={apiEcommerce}
          Title="Api Ecomerce"
          Data="Aug 2023 - current"
          Discription="Este repositório contém o código-fonte de um projeto de aplicativo de comércio eletrônico simples que demonstra operações CRUD (Create, Read, Update, Delete) em relação a produtos, pedidos e clientes."
        >
         <Flags Icon={true} Title="Back End"/>
          <Flags Icon={true} Title="Java"/>
          <Flags Icon={true} Title="mysql"/>
        </CardProject>
        
        <CardProject
          Img ={taksList}
          Title="Task List"
          Data="May 2023 - Jul 2023"
          Discription="Um app que lista as tarefas a serem feitas no dia, podendo assim recarregar a página as tasks ainda vão está listada. Desenvolvido no Curso input da CodarMe - Bruno Bertolini."
        >
          <Flags Icon={true} Title="Front End"/>
          <Flags Icon={true} Title="mobile"/>
          <Flags Icon={true} Title="design web"/>
        </CardProject>


      </section>
    </Container>
  )
} 