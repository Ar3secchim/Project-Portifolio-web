import Image from "next/image";
import DefaultLayout from "../components/DefaultLayout";
import UnderConstrution from "../components/RenaraDevUI/Icons/iconsSvg/underConstruction.png";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import getPosts from "../api/v1/blog/getPost";

async function getNewPosts(setPosts){
  const posts = await getPosts();
  setPosts(posts);
}

export default function Blog(){
  const [posts, setPosts] = useState([]);
  getNewPosts(setPosts);
  
  return (
    <DefaultLayout>
      <section className="my-6 lg:h-[600px] h-[500px] ">
        <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Blog
        </h1>

        <p className="text-[#575757] text-xl mt-4">
          Aqui escrevo minha opiniões de determinados assuntos, insights da
          vida, pensamentos aléatorios e filosoficos sobre vida, carreira,
          tecnologias e afins.
        </p>


        {posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <h1 className=" flex font-bold text-xl">
                <Link className=" hover:text-purple-800" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h1>

              <div className="inline-flex items-center mx-6 text-[#575757] text-sm">
                {post.date.datesplit("-").reverse().join("-")} <FaAngleRight />

                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}

        {/* <article className="gap-1 flex flex-col mt-8">
          <h1 className=" flex font-bold text-xl">
            <a className=" hover:text-purple-800" href="/">
              🦠 26 Principios para 26 anos
            </a>
          </h1>

          <p className="inline-flex items-center mx-6 text-[#575757] text-sm">
            15 de dezembro <FaAngleRight /> 3 min <FaAngleRight /> Life
          </p>
        </article>*/}
      </section> 

      {/* <div className="flex items-center justify-between gap-2  flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="md:inline-flex items-center font-bold text-4xl md:text-8xl">
            Oopss... 
          </h1>
          <h3 className="inline-flex items-center pt-4 text-2xl md:text-4xl">
            Em construção
          </h3>
        </div>

        <div className="flex-1">
          <Image src={UnderConstrution} />
        </div>
      </div> */}
    </DefaultLayout>
  );
}