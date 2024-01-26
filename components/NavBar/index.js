import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import MenuBar from "@/components/NavMenu";
import { Button } from "@/components/ui/button";
import LinksMedia from "@/components/LinksMedia";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NavBar() {
  const links = [
    {
      id: 1,
      link: "about",
      name: "Sobre",
      links: [
        {
          link: "about",
          name: "Sobre mim",
        },
        {
          link: "tech",
          name: "Stacks",
        },
        {
          link: "reading",
          name: "Leitura",
        },
      ],
    },
    {
      id: 2,
      link: "project",
      name: "Projeto",
    },
    {
      id: 3,
      link: "blog",
      name: "Blog",
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

      <div className="cursor-pointer md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="icon">
              <TbLayoutSidebarRightExpandFilled size={32} />
            </Button>
          </SheetTrigger>

          <SheetContent className="py-6">
            <SheetHeader className="flex items-end">
              <SheetClose>
                <TbLayoutSidebarRightCollapseFilled size={32} />
              </SheetClose>
            </SheetHeader>
            <div className="grid py-4">
              <h3 className="font-bold text-xl">
                Sobre
                <Separator className="mt-2" />
              </h3>
              <Button variant="link" className="inline text-base" asChild>
                <Link className="pr-4 font-light" href="/about">
                  Sobre mim
                </Link>
              </Button>
              <Button variant="link" className="inline text-base" asChild>
                <Link className="pr-4 font-light" href="/reading">
                  Lendo
                </Link>
              </Button>
              <Button variant="link" className="inline text-base" asChild>
                <Link className="pr-4 font-light" href="/techs">
                  Stacks
                </Link>
              </Button>
            </div>

            <SheetFooter>
              <LinksMedia />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
