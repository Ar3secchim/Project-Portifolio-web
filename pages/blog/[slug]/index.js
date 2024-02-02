import ReactMarkdown from "react-markdown";
import BlockCode from "../../../components/BlockCode";
import DefaultLayout from "../../../components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";
import { getAllPosts } from "@/pages/api/v1/blog/getAllPosts";
import { getPostForSlug } from "@/pages/api/v1/blog/getPostForSlug";

export default function BlogPost({ post }) {
  return (
    <DefaultLayout>
      <h1 className="text-2xl pt-4 pb-2 ">{post.title}</h1>
      <div className=" font-bold inline-flex pb-6 items-center text-[#575757] text-base gap-1">
        <span>{post.publishAt}</span>
        <span>
          <FaAngleRight />
        </span>

        <span>{post.time} min</span>

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

      <ReactMarkdown
        className="prose prose-invert prose-pre:bg-transparent min-w-full pb-4 text-lg font-medium"
        components={{
          code: ({ ...props }) => <BlockCode {...props} />,
          a: ({ ...props }) => <a target="_blank" {...props} />,
        }}
      >
        {post.content}
      </ReactMarkdown>
    </DefaultLayout>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const post = await new getPostForSlug().execute(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = async () => {
  const posts = await new getAllPosts().execute();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: `${post.slug}`,
      },
    };  
  });

  return {
    paths,
    fallback: "blocking",
  };
};
