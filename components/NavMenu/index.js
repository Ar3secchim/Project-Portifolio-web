"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import ListItem from "../ListItem";

export default function MenuBar() {
  const about = [
    {
      id: 1,
      title: "Sobre Mim",
      href: "/about",
      description:
        "Conheça mais sobre mim, minhas softs skills e um pouco sobre minha personalidade",
    },
    {
      id: 2,
      title: "Leitura",
      href: "/reading",
      description:
        "O que eu sei e minhas opniões são formadar pelos os livros que leio",
    },
    {
      id: 3,
      title: "Stacks",
      href: "/techs",
      description:
        "Tecnologias, ferramentas e softwares que utilizo no dia a dia de desenvolvimento",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold tracking-wide">
            Sobre
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              {about.map((about) => (
                <li  key={about.id}>
                  <ListItem
                    key={about.id}
                    title={about.title}
                    href={about.href}
                  >
                    {about.description}
                  </ListItem>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/project" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold tracking-wide">Projetos</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold tracking-wide">Blog</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="font-bold tracking-wide">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold tracking-wide">Contato</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
