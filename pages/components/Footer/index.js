import Button  from "../Button";
import { PiNavigationArrowBold } from "react-icons/pi";

import Image from "next/image";
import Insta from "../../../public/insta.svg";
import Github from "../../../public/gitHub.svg";
import Linkdln from "../../../public/linkdln.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#262626] bg-opacity-40 border-2 border-zinc-800 backdrop-blur-sm rounded-2xl p-6 flex justify-center gap-6 flex-col items-center mb-4">
      <h3 className="font-semibold text-lg">
        Conquistas excepcionais não se materializam sozinhas!
      </h3>

      <Button Route="/contact" Blank={false}>
        Mande uma mensagem
        <span className="rotate-90">
          <PiNavigationArrowBold size={20} />
        </span>
      </Button>

      <div className="flex gap-3">
        <Link href="https://www.instagram.com/rsecchim/">
          <Image priority src={Insta} alt="icons instagram" />
        </Link>
        <Link href="https://github.com/Ar3secchim">
          <Image priority src={Github} alt="icons Github" />
        </Link>
        <Link href="https://www.linkedin.com/in/renarasecchim/">
          <Image priority src={Linkdln} alt="icons Linkdln" />
        </Link>
      </div>
    </footer>
  );
}
