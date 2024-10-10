import Image from 'next/image';
import { MdOutlinePostAdd } from 'react-icons/md';
import { PiArrowUpRightBold } from 'react-icons/pi';

import Button from '@/components/Button';
import CardTitle from '@/components/Card/CardTitle';
import DefaultLayout from '@/components/DefaultLayout';
import PerfilImg from '@/public/Imgs/perfil.png';

export default function MyApp() {
  return (
    <DefaultLayout>
      <section className="flex flex-row items-center gap-6 md:mx-14 md:my-8 lg:my-24">
        <div className="hidden md:flex">
          <Image src={PerfilImg} />
        </div>

        <div className="flex-1 items-start mt-8">
          <h1 className="font-semibold text-2xl md:text-4xl  mb-1">
            Oi! Eu sou Renara Secchim
          </h1>
          <h1 className="font-semibold text-2xl md:text-4xl mb-10">
            Developer
          </h1>
          <h3 className="font-regular text-[#575757] text-xl mb-10">
            Apaixonada por tecnologia e nas possibilidades que podemos criar
            através dela.
          </h3>

          <div className="flex gap-5">
            <Button route="/contact" blank={false}>
              Contato
              <PiArrowUpRightBold />
            </Button>

            <Button route="/blog" blank={false}>
              Posts
              <MdOutlinePostAdd size={20} />
            </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 lg:my-14">
        <CardTitle title="Projetos" href="/project" />
        <CardTitle title="Minha história" href="/about" />
        <CardTitle title="Hard Skills" href="/techs" />
        <CardTitle title="Blog" href="/blog" />
      </div>
    </DefaultLayout>
  );
}
