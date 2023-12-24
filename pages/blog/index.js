import DefaultLayout from "../interface/components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

export default function Blog(){
  return (
    <DefaultLayout >
      <section className="my-6 lg:h-[600px] h-[500px] ">
        <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Blog
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          Aqui escrevo minha opiniões de determinados assuntos, insights da
          vida, pensamentos aléatorios e filosoficos sobre vida, carreira,
          tecnologias e afins.
        </p>

        <article className="gap-1 flex flex-col mt-8">
          <h1 className=" flex font-bold text-xl">
            <a className=" hover:text-purple-800" href="/">
              🦠 26 Principios para 26 anos
            </a>
          </h1>

          <p className="inline-flex items-center mx-6 text-[#575757] text-sm">
            15 de dezembro <FaAngleRight /> 3 min <FaAngleRight /> Life
          </p>
        </article>
      </section>
    </DefaultLayout>
  );
}