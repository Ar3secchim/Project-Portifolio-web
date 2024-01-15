import getPosts, { getPostForSlug } from "../../api/v1/blog/getPost";

import ReactMarkdown from "react-markdown";
import BlockCode from "../../components/BlockCode";
import DefaultLayout from "../../components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

export const getStaticProps = async (context) => {
  const { params } = context;
  const post = await getPostForSlug(params.slug);

  return {
    props: {
      Post: post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: `${post.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default function BlogPost({ Post }) {
  return (
    <DefaultLayout>
      <h1 className="text-2xl pt-4 pb-2 ">{Post.title}</h1>
      <div className="inline-flex pb-6 items-center text-[#575757] text-base gap-1">
        <span>{Post.publishAt}</span>
        <span>
          <FaAngleRight />
        </span>

        <span>{Post.time} min</span>

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

      <ReactMarkdown
        className="prose prose-invert prose-pre:bg-transparent min-w-full pb-4"
        components={{
          code: ({ ...props }) => <BlockCode {...props} />,
          a: ({...props}) => <a target="_blank" {...props} /> ,
        }}
      >
        {Post.content}
      </ReactMarkdown>
    </DefaultLayout>
  );
}

