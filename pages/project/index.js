import CardProject from "../interface/components/Card/CardProject";
import DefaultLayout from "../interface/components/DefaultLayout";
import Project77 from "../interface/RenaraDevUI/Icons/iconsSvg/77Days.png";
import TasksList from "../interface/RenaraDevUI/Icons/iconsSvg/taskList.png";
import ApiEcomerce from "../interface/RenaraDevUI/Icons/iconsSvg/ApiEcomerce.png";
import MarinaSite from "../interface/RenaraDevUI/Icons/iconsSvg/marianaSite.png";
import { Flags } from "../interface/components/Flags";

export default function Project() {
  return (
    <DefaultLayout>
      <section className="gap-8 pb-8 grid lg:grid-cols-2 sm:grid-cols-1">
        <CardProject
          Data="2023 - current"
          Name="Project 77 Days"
          Discription="Um app que faz o acompanhamento de restramento de tasks (hábitos) realizados durante 77 dias."
          Href="http://"
          Img={Project77}
        >
          <Flags Title="mobile" />
          <Flags Title="nextJs" />
          <Flags Title="pwa" />
          <Flags Title="jest" />
        </CardProject>

        <CardProject
          Data="July - 2023"
          Name="Api E-commerce "
          Discription="Este é um projeto de exemplo de um aplicativo de comércio eletrônico que demonstra operações CRUD."
          Href="http://"
          Img={ApiEcomerce}
        >
          <Flags Title="java" />
          <Flags Title="rabbitMq" />
          <Flags Title="mySql" />
          <Flags Title="jUnit" />
        </CardProject>

        <CardProject
          Data="July - 2022"
          Name="Task List "
          Discription="Um app  com objetivo de aplicar conhecimentos de React usando hooks e desenvolvimento do design com styled-components."
          Href="http://"
          Img={TasksList}
        >
          <Flags Title="react" />
          <Flags Title="mobile" />
          <Flags Title="style component" />
        </CardProject>

        <CardProject
          Data="Jan - 2022"
          Name="Site Marina Jóias"
          Discription="Uma landing page desenvolvida para captação de revendedoras de joias. "
          Href="http://"
          Img={MarinaSite}
        >
          <Flags Title="css" />
          <Flags Title="web design" />
          <Flags Title="html" />
        </CardProject>
      </section>
    </DefaultLayout>
  );
}
