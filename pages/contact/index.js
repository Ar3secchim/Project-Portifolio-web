import Button from "@/components/Button";
import Avatar from "@/public/Svgs/avatar.svg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { PiArrowUpRightBold } from "react-icons/pi";
import DefaultLayout from "@/components/DefaultLayout";

export default function Contact() {
  return (
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
        <FaAngleRight size={20} /> Contato
      </h1>

      <div className="flex flex-col-reverse items-center justify-center my-24 gap-6 md:flex-row">
        <div className="flex-1 flex flex-col w-full  gap-4 mt-10">
          <Button
            route="https://github.com/Ar3secchim"
            variant="outline"
            blank={true}
          >
            GitHub
            <PiArrowUpRightBold />
          </Button>

          <Button
            variant="outline"
            route="https://www.linkedin.com/in/renarasecchim/"
            blank={true}
          >
            Linkedin
            <PiArrowUpRightBold />
          </Button>
        </div>

        <Image
          alt="caricatura de renara, pessoa branca com cabelos loiros enrolados e que está com oculos "
          className="w-full md:w-1/2 pb-6 px-4 border-input bg-background shadow-sm hover:bg-accent hover:scale-105 transform transition-transform duration-700 ease-in-out  border rounded-md border-zinc-900"
          src={Avatar}
        />
      </div>
    </DefaultLayout>
  );
}
