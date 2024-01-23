import DefaultLayout from "../../components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";
import { getBooks } from "../api/v1/books/getBooks";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const getStaticProps = async () => {
  const post = new getBooks();
  const books = await post.getAllBooks();

  return {
    props: {
      books,
    },
  };
};

export default function Reading({ books }) {
  return (
    <DefaultLayout>
      <section className="my-6">
        <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Lendo
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          O que eu sei e minhas opniões foram influenciadas pelos livros que
          estão abaixo.
        </p>

        <section className="my-8 flex flex-col gap-1 font-thin">
          <div className="grid lg:grid-cols-4 gap-4 ">
            {books.map((book) => (
              <Card
                key={book.id}
                className="hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-zinc-900 border-zinc-900 flex flex-col justify-between"
              >
                <CardHeader className="font-bold text-lg p-2 text-center">
                  {book.title}
                </CardHeader>

                <CardContent className="p-2 text-sm">
                  <div className="tracking-wider"> Autor: {book.autor} </div>
                </CardContent>

                <CardFooter className="p-2 flex-col gap-2 items-start">
                  <Badge className="text-xs" variant="secondary">
                    Nota: {book.nota}
                  </Badge>

                  <Badge className="text-xs" variant="outline">
                    {book.tags}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
