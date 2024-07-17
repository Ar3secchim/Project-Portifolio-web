import Link from 'next/link';
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarRightCollapseFilled,
} from 'react-icons/tb';

import LinksMedia from '@/components/LinksMedia';
import MenuBar from '@/components/NavMenu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function NavBar() {
  const optionsMenu = [
    {
      id: 1,
      name: 'Sobre',
      url: 'project',
      subOptions: [
        {
          link: 'about',
          name: 'Sobre mim',
        },
        {
          link: 'techs',
          name: 'Stacks',
        },
        {
          link: 'reading',
          name: 'Leitura',
        },
      ],
    },
    {
      id: 2,
      url: 'project',
      name: 'Projeto',
      subOptions: [],
    },
    {
      id: 3,
      url: 'blog',
      name: 'Blog',
      subOptions: [],
    },
    {
      id: 3,
      url: 'contact',
      name: 'Contato',
      subOptions: [],
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

      <div className="hidden md:flex gap-2">
        <MenuBar />
      </div>

      <div className="cursor-pointer md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="icon">
              <TbLayoutSidebarRightExpandFilled size={32} />
            </Button>
          </SheetTrigger>

          <SheetContent className="py-6 justify-between flex flex-col rounded-lg">
            <div>
              <SheetHeader className="flex items-end ">
                <SheetClose>
                  <TbLayoutSidebarRightCollapseFilled size={32} />
                </SheetClose>
              </SheetHeader>

              {optionsMenu.map((option) => (
                <div className="grid py-2" key={option.id}>
                  <h3 className="font-bold text-xl pt-2">
                    <Link href={option.url} key={option.id}>
                      {option.name}
                    </Link>
                    <Separator className="mt-2" />
                  </h3>
                  {option.subOptions.map((subOption) => (
                    <Button
                      key={subOption.id}
                      variant="link"
                      className="inline text-base"
                      asChild
                    >
                      <Link className="pr-4 font-thin" href={subOption.link}>
                        {subOption.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              ))}
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
