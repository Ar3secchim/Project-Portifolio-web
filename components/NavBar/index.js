import Link from "next/link";
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse } from "react-icons/tb";
import { useState } from "react";
import MenuBar from "@/components/NavMenu";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
      name: "Sobre",
    },
    {
      id: 2,
      link: "project",
      name: "Projeto",
    },
    {
      id: 3,
      link: "contact",
      name: "Contato",
    },
  ];

  return (
    <nav className="flex py-6 justify-between gap-20 flex-0 h-20 nav transition-all">
      <div className="z-20">
        <a
          className="z-20 link-underline link-underline-black"
          href="/"
          rel="noreferrer"
        >
          <h1 className="z-20 font-semibold text-2xl">renara.dev</h1>
        </a>
      </div>

      <ul className="hidden md:flex gap-2">
        <MenuBar />
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-20 pr-4 md:hidden"
      >
        {nav ? (
          <TbLayoutNavbarCollapse size={35} />
        ) : (
          <TbLayoutNavbarExpand size={35} />
        )}
      </div>

      {nav && (
        <ul className="z-10 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#141414]">
          {links.map(({ id, link, name }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-2xl">
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
