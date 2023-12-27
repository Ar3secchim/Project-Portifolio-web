import Image from "next/image";
import PerfilImg from "./components/RenaraDevUI/Icons/iconsSvg/perfil.png";
import DefaultLayout from "./components/DefaultLayout";
import Card from "./components/Card/CardTitle";
import Button  from "./components/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import { MdOutlinePostAdd } from "react-icons/md";

export default function MyApp() {
  return (
    <DefaultLayout>
      <section className="flex items-center gap-6 md:mx-14 md:my-8">
        <div className="hidden md:flex">
          <Image src={PerfilImg} />
        </div>

        <div className="flex-1 items-start mt-8">
          <h1 className="font-semibold text-4xl mb-1">
            Oi! Eu sou Renara Secchim
          </h1>
          <h1 className="font-semibold text-4xl mb-10">FullStack Developer</h1>
          <h3 className="font-regular text-[#575757] text-xl mb-10">
            Apaixonada por tecnologia e nas possibilidades que podemos criar
            através dela.
          </h3>

          <div className="flex gap-5">
            <Button Route="/contact">
              Contato
              <PiArrowUpRightBold />
            </Button>

            <Button Route="/blog">
              Posts
              <MdOutlinePostAdd size={20} />
            </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <Card Route="/project" Title="Projetos" />
        <Card Route="/blog" Title="Blog" />
        <Card Route="/about" Title="Minha história" />
        <Card Route="/techs" Title="Hard Skills" />
      </div>
    </DefaultLayout>
  );
}
