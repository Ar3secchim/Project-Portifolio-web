import Image from "next/image";
import DefaultLayout from "../interface/components/DefaultLayout";
import PerfilImg from "../interface/RenaraDevUI/Icons/iconsSvg/perfil.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <DefaultLayout>
      <section className="flex mb-20">
        <div className="flex-1">
          <Image src={PerfilImg} />
        </div>

        <div className="flex flex-col gap-6 flex-1 font-extralight text-justify tracking-wide ">
          <p>Oi! 👋 </p>

          <p>
            A tecnologia me permite ajudar as pessoas! Através do meu trabalho
            posso facilitar o cotidiano das pessoas para que estas possam
            desempenhar melhor seu trabalho ou ter mais tempo com a família.
          </p>

          <p>
            Antigamente para pagar uma conta era necessário ir ao banco,
            enfrentar uma fila, e hoje graças a evolução da tecnologia podemos
            fazer isso em qualquer local apenas com um celular com internet.
          </p>

          <p>
            Durante a pandemia vi várias pessoas necessitando do auxílio
            emergencial e não sabendo como manusear o aplicativo do banco. Nesse
            momento o meu propósito criou forma: descobri uma inquietante
            vontade de mostrar a todos que a tecnologia não é um bicho de 7
            cabeças e é possível sim ser acessível a todos. É por esse motivo
            que meus olhos brilham de entusiasmo diariamente ao estudar esse
            mundo de tecnologias para ir gradativamente aumentando meus
            conhecimentos e ir mudando o mundo.
          </p>

          <p>
            Atuo no desenvolvimento de softwares quebrando problemas complexos
            em algo simples, acessível e útil.
          </p>

          <p className="text-balance">
            Dedico também o meu tempo
            <Link
              href="/reading"
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none
              underline decoration-[#652380] underline-offset-4"
            >
              lendo,
            </Link>
            <Link
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
              focus:outline-none underline decoration-[#652380] underline-offset-4"
              href="/techs"
            >
              estudando,
            </Link>
            <Link
              className="rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
              focus:outline-none underline decoration-[#652380] underline-offset-4"
              href="/blog"
            >
              escrevendo,
            </Link>
            praticando esportes e claro com a família.
          </p>

          <p>
            Criei um overview. Ele captura alguns dos meus pontos fortes, fracos
            e princípios.
          </p>

          <span>
            <Link
              href="/manual"
              className="inline-flex items-center gap-2 font-bold rounded-md px-1 py-1 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 
            focus:outline-none underline underline-offset-4 decoration-[#652380]"
            >
              Mais sobre mim <FaArrowRight />
            </Link>
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
