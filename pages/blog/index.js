import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

import getPosts from "../api/v1/blog/getPost";
import DefaultLayout from "../components/DefaultLayout";

export const getServerSideProps = async () => {
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
          <div className="mb-6" key={post.id}>
            <h1 className=" flex font-bold text-xl mb-1">
              <Link
                className=" hover:text-purple-800"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
            </h1>

            <div className="inline-flex items-center mx-2 text-[#575757] text-sm gap-1">
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
