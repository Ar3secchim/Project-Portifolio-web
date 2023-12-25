import DefaultLayout from "../components/DefaultLayout";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import ApiEcomerce from "../components/RenaraDevUI/Icons/iconsSvg/ApiEcomerce.png";
import Button from "../components/Button";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function Contact(){
  return (
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
        <FaAngleRight size={20} /> Contato
      </h1>

      <div className="flex items-center my-24">
        <Image
          className="hidden md:flex lg:w-2/4"
          src={ApiEcomerce}
        />

        <div className="flex flex-col items-center gap-4 mt-10">
          <Button Route="https://github.com/Ar3secchim">
            GitHub
            <PiArrowUpRightBold />
          </Button>

          <Button Route="https://www.linkedin.com/in/renarasecchim/">
            Linkedin
            <PiArrowUpRightBold />
          </Button>

          <p className="font-regular text-center lg:text-xl">
            renarasecchim@gmail.com
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}