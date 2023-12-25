import { FaAngleRight } from "react-icons/fa6";
import DefaultLayout from "../interface/components/DefaultLayout";

export default function Manual() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Soft Skills
        </h1>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Visão Geral</h2>

          <li className="inline-flex items-start gap-2 mx-2">
            <FaAngleRight className="mt-1" />
            INTJ-A Myers-Briggs: “Os protagonistas estão inspirando otimistas,
            prontamente agindo para fazer o que acham certo. Esses tipos
            calorosos e francos adoram ajudar os outros e têm a energia criativa
            para alcançar seus objetivos.”
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Extrovetida, intuitiva, sentimental, julgadora e
            turbulenda. Acho que essa descrição bem sólida.
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Pontos Fortes</h2>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Organizada
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Gosto de rotina
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Sou muito positiva e alto astral
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Tenho modo aprendiz sempre ligado
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Perseverante
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Fraquezas</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Não saber dizer não as pessoas
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Quero as coisas para ontem:
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-2 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Princípios</h2>

          <li className=" gap-1 mx-2 inline-flex">
            <FaAngleRight className="mt-1" />
            Modo Aprendiz ligado: Toda pessoa, independente da sua idade, classe
            social ou nivel de educação tem algo a ensinar indepedente do
            assunto: seja sobre a vida, relacionamento, carreira...
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            Viés para o apredizado: Começar é a melhor maneira de começar a
            progredir e começar a aprender.
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            Mentalidade de crescimento: Estou constantemente me desafiando a
            melhorar. Quando fico muito confortável, minha felicidade sofrem.
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            Mantenha a simplicidade: Às vezes temos que ir para o mato, mas não
            deveria ser o padrão. Se não for o foco, mantenha a simplicidade.
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            Aprendizagem em público: Fico mais feliz quando compartilho coisas
            que acho úteis. Ensinar alguém de alguma forma sempre é a melhor
            maneira de está sempre aprendendo.
          </li>
          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            Saúde: Não tem porque apenas ter uma mente brilhande se você não tem
            estruturas fisicas forte o suficiente para suporta e desenvolver uma
            mente forte.
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Livros Favoritos</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> 12 Regras para uma vida
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Maestria
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Citação Favorita</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            “Se não vivemos segundo o que acreditamos, terminaremos crendo e
            pensando no modo que vivemos” -- Autor desconhecido
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
}
