import DefaultLayout from "../../components/DefaultLayout";
import Custom500 from "../500";
import { FaAngleRight } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getBooks } from "../api/v1/books/getBooks";
import { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton";

export default function Reading({ books, error }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books) {
      setLoading(false);
    }
  }, [books]);

  if (error) {
    return <Custom500 />;
  }

  return (
    <DefaultLayout>
      <section className="my-6">
        <h1 className="inline-flex items-center gap-2 font-bold text-2xl lg:text-3xl">
          <FaAngleRight size={20} /> Lendo
        </h1>

        <p className="text-[#575757] text-lg lg:text-xl mt-4">
          Algums livros que me ajudaram a adquirir conhecimentos.
        </p>

        <section className="my-8 flex flex-col gap-1 font-thin">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {loading ? (
              <Skeleton />
            ) : (
              books.map((book) => (
                <Card className="hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-zinc-900 border-zinc-900 flex flex-col justify-between">
                  <CardHeader className="font-bold text-lg p-2 text-center">
                    {book.title}
                  </CardHeader>

                  <CardContent className="p-2 text-sm items-center flex flex-col">
                    <img src={book.media} width={146} height={146} />
                  </CardContent>

                  <CardFooter className="p-2 flex-col gap-2 items-center">
                    <Badge className="text-xs" variant="secondary">
                      Nota: {book.nota}
                    </Badge>

                    <Badge className="text-xs" variant="outline">
                      {book.tags}
                    </Badge>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}

export const getServerSideProps = async ({ res, req }) => {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=60",
    );
    const books = await new getBooks().execute();

    return {
      props: {
        books: books,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};
