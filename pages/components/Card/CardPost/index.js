import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function CardPost({Post}){
  return (
    <div  className="mb-6">
      <h1 className=" flex font-bold text-xl mb-1">
        <Link className=" hover:text-purple-800" href={`/blog/${Post.slug}`}>
          {Post.title}
        </Link>
      </h1>

      <div className="inline-flex items-center mx-2 text-[#575757] text-sm gap-1">
        <span>{Post.publishAt}</span>
        <span>
          <FaAngleRight />
        </span>

        <span>{Post.time + " min"}</span>

        <span>
          <FaAngleRight />
        </span>

        {Post.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm text-[#575757] border border-[#575757] px-[8px] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
} 