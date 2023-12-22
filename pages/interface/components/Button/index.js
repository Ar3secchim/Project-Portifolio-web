import Link from "next/link";

export function Button({ children, Route }) {
  return (
    <button className="border-1 border-[#262626] rounded-full font-semibold text-center text-base py-1 px-4 bg-white text-[#262626]  shadow-sm hover:scale-105 transform transition-all duration-500 ease-in-out">
      <Link className="flex items-center gap-2" href={Route}>
        {children}
      </Link>
    </button>
  );
}
