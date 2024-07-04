import Link from "next/link";

export default function ListItem({ key, title, href, children }) {
  return (
    <Link
      key={key}
      href={href}
      className="group inline-flex  border border-background itens-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:border-secondary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
    >
      <span className="flex flex-col ">
        <p className="font-bold tracking-wide">{title}</p>
        <p className="font-thin tracking-wide">{children}</p>
      </span>
    </Link>
  );
}
