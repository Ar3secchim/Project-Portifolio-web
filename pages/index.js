import Image from "next/image";
import PerfilImg from "./interface/components/RenaraDevUI/Icons/iconsSvg/perfil.png";
import DefaultLayout from "./interface/components/DefaultLayout";
import Card from "./interface/components/Card";
import { Button } from "./interface/components/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import { MdOutlinePostAdd } from "react-icons/md";

export default function MyApp() {
  return (
    <DefaultLayout>
      <section className="flex items-center gap-6 mx-14 mt-20 mb-12 ">
        <div className="flex-1">
          <Image src={PerfilImg} />
        </div>

        <div className="flex-1 items-start mt-8 mb-12">
          <h1 className="font-semibold text-4xl mb-1">
            Hey, I’m Renara Secchim
          </h1>
          <h1 className="font-semibold text-4xl mb-10">FullSatck Developer</h1>
          <h3 className="font-regular text-[#575757] text-2xl mb-10">
            Dando vida à ideias.
          </h3>

          <div className="flex gap-5">
            <Button Route="/">
              Contato
              <PiArrowUpRightBold />
            </Button>

            <Button Route="/">
              Posts
              <MdOutlinePostAdd size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <Card Route="/project" Title="Projetos" />
        <Card Route="/blog" Title="Blog" />
        <Card Route="/about" Title="Minha história" />
        <Card Route="/techs" Title="Tecnologias" />
      </section>
    </DefaultLayout>
  );
}
