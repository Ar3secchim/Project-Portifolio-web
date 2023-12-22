import Image from "next/image";
import DefaultLayout from "../interface/components/DefaultLayout";
import PerfilImg from "../interface/components/RenaraDevUI/Icons/iconsSvg/perfil.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <DefaultLayout>
      <section className="flex mb-20">
        <div className="flex-1">
          <Image src={PerfilImg} />
        </div>

        <div className="flex flex-col gap-6 flex-1 font-extralight text-justify">
          <p>Oi, sou Renara 👋 (mudar)</p>

          <p>
            Como iniciante na área da tecnologia, sou movida por uma fome
            insaciável de resolver problemas através da tecnologia.
          </p>

          <p>
            O meu objetivo é propor, de forma criativa e acessível, soluções
            para resolver problemas das pessoas. Esse é objetivo que tenho com a
            tecnologia, além de realizar um sonho que me motivou realizar
            transição de carreira, que é mostrar para as pessoas que a
            tecnologia veio para facilitar nossas vidas e que a tecnologia pode
            e deve ser acessivél á todos.
          </p>

          <p>
            É por esse motivo que os meus olhos brilham de entusiasmo e me
            mantém constantemente motivada.
          </p>

          <p>
            Atuo no desenvolvimento de aplicações. Isso significa quebrar
            problemas complexos, construir coisas úteis e experimentar novas
            ideias. Se eu não estiver trabalhando em um projeto, você pode me
            encontrar
            <Link
              href="/reading"
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none
              underline decoration-[#652380] underline-offset-4
              "
            >
              lendo
            </Link>
            ,
            <Link
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
              focus:outline-none underline decoration-[#652380] underline-offset-4"
              href="/techs"
            >
              estudando
            </Link>
            ou
            <Link
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
              focus:outline-none underline decoration-[#652380] underline-offset-4"
              href="/blog"
            >
              escrevendo
            </Link>
            algo novo.
          </p>

          <p>
            Criei um overview. Ele captura alguns dos meus pontos fortes, fracos
            e princípios que pretendo seguir.
          </p>

          <span>
            <Link href="/manual" className="inline-flex items-center gap-2 font-bold rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
            focus:outline-none underline underline-offset-4 decoration-[#652380]">
              Mais sobre mim <FaArrowRight />
            </Link>
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
