import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex py-6 justify-between tracking-wider gap-20">
      <a href="/">
        <h1 className="font-semibold text-2xl">renara.dev</h1>
      </a>

      <div className="relative z-10 max-w-max flex-1 items-center justify-center ">
        <ul className="flex gap-2 items-center font-extrabold group flex-1 list-none justify-center space-x-1">
          <li className="inline-flex h-10 w-max items-center justify-center rounded-md px-2 py-2 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none font-bold">
            <Link href="/"> Sobre</Link>
          </li>

          <li className="inline-flex h-10 w-max items-center justify-center rounded-md px-2 py-2 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none font-bold">
            <Link href="/"> Projetos </Link>
          </li>

          <li className="inline-flex h-10 w-max items-center justify-center rounded-md px-2 py-2 text-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none font-bold">
            <Link href="/">Contato </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
