import CardTech from "../interface/components/Card/CardTech";
import DefaultLayout from "../interface/components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

import Docker from "../interface/RenaraDevUI/Icons/iconsSvg/docker.svg";
import NodeJs from "../interface/RenaraDevUI/Icons/iconsSvg/nodeJs.svg";
import Java from "../interface/RenaraDevUI/Icons/iconsSvg/java.svg";
import Rabbitmq from "../interface/RenaraDevUI/Icons/iconsSvg/rabbitmq.svg";
import Github from "../interface/RenaraDevUI/Icons/iconsSvg/github.svg";
import Figma from "../interface/RenaraDevUI/Icons/iconsSvg/figma.svg";
import Express from "../interface/RenaraDevUI/Icons/iconsSvg/express.svg";
import Nextjs from "../interface/RenaraDevUI/Icons/iconsSvg/nextjs.svg";
import Javascript from "../interface/RenaraDevUI/Icons/iconsSvg/javascript.svg";
import Css from "../interface/RenaraDevUI/Icons/iconsSvg/css.svg";
import Html from "../interface/RenaraDevUI/Icons/iconsSvg/html.svg";
import Tailwind from "../interface/RenaraDevUI/Icons/iconsSvg/tailwindcss.svg";
import Junit from "../interface/RenaraDevUI/Icons/iconsSvg/Junit.svg";
import Spring from "../interface/RenaraDevUI/Icons/iconsSvg/spring.svg";
import MySql from "../interface/RenaraDevUI/Icons/iconsSvg/mysql.svg";
import Redis from "../interface/RenaraDevUI/Icons/iconsSvg/redis.svg";
import Jest from "../interface/RenaraDevUI/Icons/iconsSvg/jest.svg";

export default function Techs() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="my-6 inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Techs
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          Todas as tecnologias, ferramentas e softwares que ultilizo no momento
          e as que estou estudando no momento de uma mais focada para adquirir
          dominio.
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
