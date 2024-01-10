import DefaultLayout from "../components/DefaultLayout";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import Avatar from "../../public/avatar.svg";
import Button from "../components/Button";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function Contact() {
  return (
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
        <FaAngleRight size={20} /> Contato
      </h1>

      <div className="flex items-center justify-center my-24 gap-6">
        <div className="flex-1 flex flex-col  gap-4 mt-10">
          <Button Route="https://github.com/Ar3secchim" Blank={true}>
            GitHub
            <PiArrowUpRightBold />
          </Button>

          <Button
            Route="https://www.linkedin.com/in/renarasecchim/"
            Blank={true}
          >
            Linkedin
            <PiArrowUpRightBold />
          </Button>

          <p className="font-regular lg:text-xl">
            renarasecchim@gmail.com
          </p>
        </div>

        <Image
          className="hidden md:flex lg:w-1/2 pb-6 px-4 bg-[#262626] bg-opacity-40 border-2 rounded-2xl border-zinc-800"
          src={Avatar}
        />
      </div>
    </DefaultLayout>
  );
}
