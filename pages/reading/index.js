import DefaultLayout from "../components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

export default function Reading() {
  return (
    <DefaultLayout>
      <section className="my-6">
        <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Lendo
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          O que eu sei e minhas opniões foram influenciadas pelos
          livros que estão abaixo.
        </p>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Autoconhecimeto</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Hábitos Atômicos
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Porquê nós dormimos
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Comece pelo o porquê
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-xl font-semibold">Programação</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Código limpo
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Não me faça a pensar
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Entendendo algoritmos
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
}