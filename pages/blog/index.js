import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

import DefaultLayout from "../../components/DefaultLayout";
import { getAllPosts } from "../api/v1/blog/getAllPosts";


export const getStaticProps = async () => {
  const posts = await new getAllPosts().execute();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }) {
  return (
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold lg:text-3xl text-2xl">
        <FaAngleRight size={20} /> Blog
      </h1>

      <p className="text-[#575757] lg:text-xl mt-4">
        Aqui escrevo minha opiniões de determinados assuntos, insights da vida,
        pensamentos aléatorios e filosoficos sobre vida, carreira, tecnologias e
        afins.
      </p>

      <section className="my-6 h-[50vh]">
        {posts.map((post) => (
          <div className="mb-6" key={post.id}>
            <h1 className=" flex font-bold lg:text-xl text-lg mb-1">
              <Link
                className=" hover:text-purple-800"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
            </h1>

            <div className="inline-flex font-bold items-center mx-2 text-[#575757] text-sm gap-1">
              <span>{post.publishAt}</span>
              <span>
                <FaAngleRight />
              </span>

              <span>{post.time + " min"}</span>

              <span>
                <FaAngleRight />
              </span>

              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-[#575757] border border-[#575757] px-[8px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
