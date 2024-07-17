import { BsTwitterX } from 'react-icons/bs';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import Button from '@/components/Button';

export default function LinksMedia() {
  return (
    <div className="flex content-center justify-center items-center gap-3">
      <Button
        key="1"
        variant="outline"
        size="icon"
        route="https://www.instagram.com/rsecchim/"
        blank
      >
        <IoLogoInstagram size={24} />
      </Button>

      <Button
        key="2"
        variant="outline"
        size="icon"
        route="https://github.com/Ar3secchim"
        blank
      >
        <IoLogoGithub size={24} />
      </Button>

      <Button
        key="3"
        variant="outline"
        size="icon"
        route="https://www.linkedin.com/in/renarasecchim/"
        blank
      >
        <IoLogoLinkedin size={24} />
      </Button>

      <Button
        key="4"
        variant="outline"
        size="icon"
        route="https://twitter.com/renaradev"
        blank
      >
        <BsTwitterX size={20} />
      </Button>
    </div>
  );
}
