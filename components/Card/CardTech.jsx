import { Card, CardContent } from '../ui/card';

export default function CardTech({ children }) {
  return (
    <Card className=" w-28 h-24 p-1 shadow-sm hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-zinc-900 ">
      <CardContent className="w-full h-full p-0 flex items-center justify-center text-xs flex-col gap-2 tracking-wider font-thin">
        {children}
      </CardContent>
    </Card>
  );
}
