import  Container  from "../components/Container";
import { Flags } from "../components/Flags";
import { CardProject } from "../components/CardProject";
import { TitleSection } from "../components/TitleSection";

import Project77 from "../assets/imgs/project77.png";
import taksList from '../assets/imgs/taksList.png'
import buyForeignCurrency from '../assets/imgs/buyForeignCurrency.jpg'
import apiEcommerce from '../assets/imgs/apiEcommerce.png'
import mentorCycle from '../assets/imgs/mentorCyle.png'
import { ContainerRoot } from "../components/ContainerRoot";

export function Projects(){
  return(
    <Container ClassName="text-center  h-full">
      <ContainerRoot ClassName="flex-col overscroll-auto">

        <TitleSection ClassName="text-xl lg:text-3xl py-24" title="Conquistas excepcionais não se materializam de repente."/>
        
        <section className="md:grid md:grid-cols-2 flex flex-col gap-8">
          <CardProject
            Img ={mentorCycle}
            Title="Mentor Cycle"
            Data="Mar 2023 - current"
            Discription="O Mentor Cycle é um projeto open-source cujo objetivo é conectar pessoas na área de T.I que estão aprendendo, com profissionais com experiência de mercado, fazendo o match entre aprendiz e mentor."
            Href="https://github.com/Ar3secchim//mentor-cycle-fe"
          >
            <div className="flex gap-2">
              <Flags Icon={false} Title="OpenSource"/>
              <Flags Icon={false} Title="Front End"/>
              <Flags Icon={false} Title="TypeScript"/>
            </div>
          </CardProject>

          <CardProject
            Img ={Project77}
            Title="Project 77 Days"
            Data="Jul 2023 - current"
            Discription="Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias."
            Href="https://github.com/Ar3secchim/project-77-days"
          >
            <div className="flex gap-2">
              <Flags Icon={false} Title="Front End"/>
              <Flags Icon={false} Title="mobile"/>
              <Flags Icon={false} Title="design web"/>
            </div>
          </CardProject>

          <CardProject
            Img ={apiEcommerce}
            Title="Api Ecomerce"
            Data="Aug 2023 - current"
            Discription="Este repositório contém o código-fonte de um projeto de aplicativo de comércio eletrônico simples que demonstra operações CRUD (Create, Read, Update, Delete) em relação a produtos, pedidos e clientes."
            Href="https://github.com/Ar3secchim/crud-Ecommerce-App"
          >
            <div className="flex gap-2">
              <Flags Icon={false} Title="Spring Boot"/>
              <Flags Icon={false} Title="Java"/>
              <Flags Icon={false} Title="mysql"/>
            </div>
          </CardProject>

          <CardProject
            Img ={buyForeignCurrency}
            Title="Buy Foreign Currency"
            Data="Oct 2023 - current"
            Discription="Este projeto Java tem o objetivo de permitir que os usuários realizem ordens de compra de moedas estrangeiras de forma eficiente e conveniente, consumindo a API externa https://docs.awesomeapi.com.br/api-de-moedas para obter as taxas de câmbio."
            Href="https://github.com/Ar3secchim//buy-foreign-currency"
          >
          
            <div className="flex gap-2">
              <Flags Icon={false} Title="Spring Boot"/>
              <Flags Icon={false} Title="Java"/>
              <Flags Icon={false} Title="H2Dialect"/>
            </div>
          </CardProject>
          
          <CardProject
            Img ={taksList}
            Title="Task List"
            Data="May 2023 - Jul 2023"
            Discription="Um app que lista as tarefas a serem feitas no dia, podendo assim recarregar a página as tasks ainda vão está listada. Desenvolvido no Curso input da CodarMe - Bruno Bertolini."
            Href="https://github.com/Ar3secchim/tasks-list-react"
          >
            <Flags Icon={false} Title="Front End"/>
            <Flags Icon={false} Title="mobile"/>
            <Flags Icon={false} Title="design web"/>
          </CardProject>

        </section>
      </ContainerRoot>
    </Container>
  )
} 