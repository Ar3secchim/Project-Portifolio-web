import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

import DefaultLayout from '@/components/DefaultLayout';
import { Card } from '@/components/ui/card';

export default function Manual() {
  return (
    <DefaultLayout>
      <section className="tracking-wider ">
        <h1 className="inline-flex items-center gap-2 font-bold text-2xl lg:text-3xl">
          <FaAngleRight size={20} /> Soft Skills
        </h1>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">
            Teste 16 personalities
          </h2>

          <li className="flex items-start gap-2 mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <Link
                href="/reading"
                className="inline-flex rounded-md px-1  transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none
              underline decoration-[#652380] underline-offset-4 "
              >
                INTJ-A Myers-Briggs:
              </Link>
              “Os protagonistas estão inspirando otimistas, prontamente agindo
              para fazer o que acham certo. Esses tipos calorosos e francos
              adoram ajudar os outros e têm a energia criativa para alcançar
              seus objetivos.”
            </div>
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Extrovetida, intuitiva, sentimental, julgadora e
            turbulenda. Acho que essa descrição bem sólida.
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin ">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">
            Pontos Fortes
          </h2>
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
          <h2 className="mb-4 ttext-lg md:text-xl font-semibold">Fraquezas</h2>

          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight /> Não saber dizer não as pessoas
          </li>
          <li className="inline-flex gap-1 items-center mx-2">
            <FaAngleRight />
            Quero as coisas para ontem
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-2 font-thin">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">Princípios</h2>

          <li className=" gap-1 mx-2 inline-flex">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold">
                Modo aprendiz sempre ligado:
              </span>
              toda pessoa, independente da sua idade, classe social ou nivel de
              educação tem algo a ensinar indepedente do assunto. Seja sobre a
              vida, relacionamento, carreira...
            </div>
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold"> Viés para o apredizado:</span>{' '}
              “Feito é melhor que perfeito”. Até mesmo um erro é uma
              oportunidade de aprendizado.
            </div>
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold">Mentalidade de crescimento:</span>
              Estou constantemente me desafiando a melhorar. A idéia é ser 1%
              melhor todo dia. (aperfeiçoamento contínuo)
            </div>
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold"> Mantenha a simplicidade:</span>{' '}
              tornar as coisas simples, seja no pessoal ou no profissional.
            </div>
          </li>

          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold">Compartilhar aprendizados:</span>
              fico feliz ao ensinar para alguém algo de que tenho conhecimento.
              Acredito que essa é a melhor maneira de estar sempre aprendendo.
            </div>
          </li>
          <li className="inline-flex gap-1  mx-2">
            <FaAngleRight className="mt-1" />
            <div>
              <span className="font-semibold"> Saúde:</span> é básico cuidar da
              saúde física, emocional e espiritual para ter um alto desempenho
              no âmbito profissional e pessoal.
            </div>
          </li>
        </ul>

        <ul className="my-8 flex flex-col gap-1 font-thin">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">
            Citação Favorita
          </h2>

          <Card className="p-4 bg-primary-foreground">
            “Se não vivemos segundo o que acreditamos, terminaremos crendo e
            pensando no modo que vivemos” -- Autor desconhecido
          </Card>
        </ul>
      </section>
    </DefaultLayout>
  );
}
