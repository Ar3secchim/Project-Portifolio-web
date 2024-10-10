import { FaRegCopyright } from 'react-icons/fa6';

import LinksMedia from './LinksMedia';

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="font-black flex gap-2 items-center">
        <FaRegCopyright />
        Renara Secchim
      </div>

      <div className=" flex content-center justify-center items-center gap-3">
        <LinksMedia />
      </div>
    </div>
  );
}
