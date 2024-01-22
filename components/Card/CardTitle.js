import { Card } from "@/components/ui/card";
import  {CardTitle as CardTitleUi} from "@/components/ui/card";

import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

export default function CardTitle({ title, href }) {
  return (
    <Card className=" w-max-[350px] h-[115px] flex items-center justify-center p-[1px] gap-1 hover:scale-105 transform transition-transform duration-500 ease-in-out  bg-gradient-to-b from-[#4e0670c5] via-[#922457a2] to-[#ff5e0069] ">
      <Link
        href={href}
        className="bg-background flex justify-center items-center w-full h-full rounded-md"
      >
        <CardTitleUi className="tracking-wide text-lg flex flex-row justify-center items-center gap-2">
          <FaAngleLeft />
          {title}
          <div className="flex gap-">
            <RxSlash />
            <FaAngleRight className=" -ml-2" />
          </div>
        </CardTitleUi>
      </Link>
    </Card>
  );
}
