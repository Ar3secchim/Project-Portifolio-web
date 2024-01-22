import { FaRegCopyright } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

import Button from "@/components/Button";

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="font-black flex gap-2 items-center">
        <FaRegCopyright />
        Renara Secchim
      </div>

      <div className=" flex content-center justify-center items-center gap-3">
        <Button
          className="px-2"
          variant="outline"
          size="icon"
          route="https://www.instagram.com/rsecchim/"
        >
          <IoLogoInstagram size={24} />
        </Button>

        <Button
          variant="outline"
          size="icon"
          route="https://github.com/Ar3secchim"
        >
          <IoLogoGithub size={24} />
        </Button>

        <Button
          variant="outline"
          size="icon"
          route="https://www.linkedin.com/in/renarasecchim/"
        >
          <IoLogoLinkedin size={24} />
        </Button>

        <Button
          variant="outline"
          size="icon"
          route="https://twitter.com/renaradev"
        >
          <BsTwitterX size={22} />
        </Button>
      </div>
    </div>
  );
}
