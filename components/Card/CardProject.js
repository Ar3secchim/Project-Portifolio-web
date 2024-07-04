import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Flags from "../Flags";
import { Button } from "../ui/button";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export default function CardProject({
  data,
  name,
  discription,
  url,
  image,
  flags,
}) {
  return (
    <Card className=" border-0 p-6 hover:scale-105 transform transition-all duration-1000 ease-in-out hover:bg-zinc-900">
      <div className="flex justify-center">
        {image.map((img) => (
          <Image src={img} />
        ))}
      </div>

      <CardHeader>
        <CardTitle className="text-xl tex">{name}</CardTitle>
        <div className="inline-flex font-light">
          <p className="pr-2 text-sm">Data</p>
          <p className="text-sm">{data}</p>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription>{discription}</CardDescription>
        <Button variant="link" className="p-0 font-bold ">
          <Link target="_blank" href={url}>
            Saiba mais
          </Link>
          <FaAngleRight />
        </Button>
      </CardContent>

      <CardFooter className="justify-center gap-1">
        {flags.map((flag) => (
          <Flags title={flag} />
        ))}
      </CardFooter>
    </Card>
  );
}
