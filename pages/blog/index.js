import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

import getPosts from "../api/v1/blog/getPost";
import DefaultLayout from "../components/DefaultLayout";
import CardPost from "../components/Card/CardPost"

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({posts}) {
  return (
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
        <FaAngleRight size={20} /> Blog
      </h1>

      <p className="text-[#575757] text-xl mt-4">
        Aqui escrevo minha opiniões de determinados assuntos, insights da vida,
        pensamentos aléatorios e filosoficos sobre vida, carreira, tecnologias e
        afins.
      </p>

      <section className="my-6 h-[50vh]">
        {posts.map((post) => (
          <CardPost Post={post} />
        ))}
      </section>
    </DefaultLayout>
  );
}
