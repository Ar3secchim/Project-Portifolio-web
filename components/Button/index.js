import { Button as ButtonUi } from "@/components/ui/button";
import Link from "next/link";

export default function Button({ children, route, blank, variant, size}) {
  return (
    <ButtonUi
      variant={variant}
      asChild
      className="shadow-sm hover:scale-105 transform transition-all duration-500 easein-out"
      size={size}
    >
      <Link
        className="flex items-center gap-2"
        href={route}
        target={blank ? "_blank" : ""}
      >
        {children}
      </Link>
    </ButtonUi>
  );
}
