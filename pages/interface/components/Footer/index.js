import Button  from "../Button";
import { PiNavigationArrowBold } from "react-icons/pi";

import Image from "next/image";
import Insta from "../../RenaraDevUI/Icons/iconsSvg/insta.svg";
import Github from "../../RenaraDevUI/Icons/iconsSvg/gitHub.svg";
import Linkdln from "../../RenaraDevUI/Icons/iconsSvg/linkdln.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#262626] bg-opacity-40 border-2 border-zinc-800 backdrop-blur-sm rounded-2xl p-6 flex justify-center gap-6 flex-col items-center mb-4">
      <h3 className="font-semibold text-lg">
        Conquistas excepcionais não se materializam sozinhas!
      </h3>

      <Button Route="/">
        Mande uma mensagem
        <span className="rotate-90">
          <PiNavigationArrowBold size={20} />
        </span>
      </Button>

      <div className="flex gap-3">
        <Link href="/">
          <Image priority src={Insta} alt="icons instagram" />
        </Link>
        <Link href="/">
          <Image priority src={Github} alt="icons Github" />
        </Link>
        <Link href="/">
          <Image priority src={Linkdln} alt="icons Linkdln" />
        </Link>
      </div>
    </footer>
  );
}
