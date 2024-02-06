import ReactMarkdown from "react-markdown";
import Breaks from "remark-breaks";

interface Props {
  post: {
    name?: string;
    tagline?: string;
    image?: string;
    content: string;
  };
}

const AboutLayout: React.FC<Props> = ({ post }) => {
  return (
    <div className="divide-y divide-gray-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-emerald-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 font-heading">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="xl:col-span-2">
          <article className="prose max-w-none pt-8 pb-8 text-primary-700 prose-a:text-secondary hover:prose-a:text-primary-900 text-sm md:text-base">
            <ReactMarkdown remarkPlugins={[Breaks]}>
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
