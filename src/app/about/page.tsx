import { notFound } from "next/navigation";
import React from "react";
import AboutLayout from "@/components/Layouts/AboutLayout";
import { getPostData } from "../lib/post-utils";

export const metadata = {
  title: "About",
  description: "Learn about Personalised Awards and our drive for excellence.",
};

const About = async () => {
  const slug = "about"; //context.params;
  const postData = await getPostData(slug);
  const aboutProps = {
    props: {
      post: {
        ...postData,
        //content: postData.content,
      },
    },
    // regenerate after every 600s(10mins)
    revalidate: 600,
  };

  return (
    <>
      <section className="container mx-auto px-10 py-16">
        <AboutLayout post={aboutProps.props.post}></AboutLayout>
        <div className="pt-8">
          <a
            href={`/contact`}
            className="inline-flex justify-center items-center py-3 mt-4 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
          >
            Contact Us
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
