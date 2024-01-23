import { Card } from "@/components/ui/card";
import  {CardTitle as CardTitleUi} from "@/components/ui/card";

import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

export default function CardTitle({ title, href }) {
  return (
    <Card className="w-max-[350px] h-[114px] flex items-center justify-center p-[1px]  hover:scale-105 transform transition-transform duration-700 ease-in-out bg-gradient-to-b from-[#4e0670c5] via-[#922457a2] to-[#ff5e0069]  ">
      <Link
        href={href}
        className="bg-background flex justify-center items-center w-full h-full rounded-md"
      >
        <CardTitleUi className="lg:gap-2 tracking-wide lg:text-lg flex flex-row justify-center items-center ">
          <FaAngleLeft />
          {title}
          <div className="flex ">
            <RxSlash />
            <FaAngleRight className=" -ml-2" />
          </div>
        </CardTitleUi>
      </Link>
    </Card>
  );
}
