import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

import Button from "@/components/Button";

export default function LinksMedia() {
  return (
    <div className="flex content-center justify-center items-center gap-3">
      <Button
        key="1"
        variant="outline"
        size="icon"
        route="https://www.instagram.com/rsecchim/"
        blank={true}
      >
        <IoLogoInstagram size={24} />
      </Button>

      <Button
        key="2"
        variant="outline"
        size="icon"
        route="https://github.com/Ar3secchim"
        blank={true}
      >
        <IoLogoGithub size={24} />
      </Button>

      <Button
        key="3"
        variant="outline"
        size="icon"
        route="https://www.linkedin.com/in/renarasecchim/"
        blank={true}
      >
        <IoLogoLinkedin size={24} />
      </Button>

      <Button
        key="4"
        variant="outline"
        size="icon"
        route="https://twitter.com/renaradev"
        blank={true}
      >
        <BsTwitterX size={20} />
      </Button>
    </div>
  );
}
