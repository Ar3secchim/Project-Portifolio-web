import CardTech from "../components/Card/CardTech";
import DefaultLayout from "../components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

import Docker from "../../public/docker.svg";
import NodeJs from "../../public/nodeJs.svg";
import Java from "../../public/java.svg";
import Rabbitmq from "../../public/rabbitmq.svg";
import Github from "../../public/github.svg";
import Figma from "../../public/figma.svg";
import Express from "../../public/express.svg";
import Nextjs from "../../public/nextjs.svg";
import Javascript from "../../public/javascript.svg";
import Css from "../../public/css.svg";
import Html from "../../public/html.svg";
import Tailwind from "../../public/tailwindcss.svg";
import Junit from "../../public/Junit.svg";
import Spring from "../../public/spring.svg";
import MySql from "../../public/mysql.svg";
import Redis from "../../public/redis.svg";
import Jest from "../../public/jest.svg";

export default function Techs() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="my-6 inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Hard skills
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          Tecnologias, ferramentas e softwares que utilizo:
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="grid">
            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Back End</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech Icon={NodeJs} Xp="4" />
                <CardTech Icon={Java} Xp="12" />
              </div>
            </div>

            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Ferramentas</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech Icon={Docker} Xp="4" />
                <CardTech Icon={Rabbitmq} Xp="4" />
                <CardTech Icon={Figma} Xp="10" />
                <CardTech Icon={Github} Xp="12" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Front End</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech Icon={Javascript} Xp="40" />
                <CardTech Icon={Html} Xp="40" />
                <CardTech Icon={Css} Xp="40" />
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="font-bold text-lg">Banco de Dados</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <CardTech Icon={MySql} Xp="40" />
                <CardTech Icon={Redis} Xp="40" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="my-4">
            <h1 className="font-bold text-lg">Frameworks</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <CardTech Icon={Express} Xp="40" />
            <CardTech Icon={Nextjs} Xp="40" />
            <CardTech Icon={Tailwind} Xp="40" />
            <CardTech Icon={Spring} Xp="40" />
            <CardTech Icon={Junit} Xp="40" />
            <CardTech Icon={Docker} Xp="40" />
            <CardTech Icon={Jest} Xp="40" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
