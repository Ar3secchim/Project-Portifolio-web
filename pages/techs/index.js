import DefaultLayout from "@/components/DefaultLayout";
import CardTech from "@/components/Card/CardTech";
import { FaAngleRight } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoDocker } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { SiRabbitmq } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { LiaJava } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io5";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiJest } from "react-icons/si";

export default function Techs() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="my-6 inline-flex items-center gap-2 font-bold text-2xl lg:text-3xl">
          <FaAngleRight size={20} /> Hard skills
        </h1>

        <p className="text-[#575757] text-lg md:text-xl md:mt-4">
          Tecnologias, ferramentas e softwares que utilizo:
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="grid">
            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Back End</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech>
                  <FaNodeJs size={40} />
                  NodeJs
                </CardTech>
                <CardTech>
                  <LiaJava size={48} />
                  Java
                </CardTech>
              </div>
            </div>

            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Ferramentas</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech>
                  <IoLogoGithub size={40} />
                  GitHub
                </CardTech>
                <CardTech>
                  <IoLogoDocker size={40} />
                  Docker
                </CardTech>
                <CardTech>
                  <FaFigma size={40} />
                  Figma
                </CardTech>
                <CardTech>
                  <SiRabbitmq size={40} />
                  Rabbitmq
                </CardTech>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="my-4 ">
                <h1 className="font-bold text-lg">Front End</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech>
                  <IoLogoJavascript size={40} />
                  Javascript
                </CardTech>
                <CardTech>
                  <TfiHtml5 size={40} />
                  Html5
                </CardTech>
                <CardTech>
                  <FaCss3Alt size={40} />
                  Css3
                </CardTech>
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Banco de Dados</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech>
                  <SiMysql size={48} />
                  Mysql
                </CardTech>
                <CardTech>
                  <SiRedis size={40} />
                  Redis
                </CardTech>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="my-4">
            <h1 className="font-bold text-lg">Frameworks</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <CardTech>
              <SiExpress size={40} />
              Express
            </CardTech>
            <CardTech>
              <TbBrandNextjs size={40} />
              Nextjs
            </CardTech>
            <CardTech>
              <SiTailwindcss size={40} />
              Tailwindcss
            </CardTech>
            <CardTech>
              <SiSpring size={40} />
              Spring Boot
            </CardTech>
            <CardTech>
              <SiJunit5 size={40} />
              Junit5
            </CardTech>
            <CardTech>
              <SiJest size={40} />
              Jest
            </CardTech>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
