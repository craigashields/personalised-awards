import { notFound } from "next/navigation";
import React from "react";
import AboutLayout from "@/components/Layouts/AboutLayout";
import { getPostData } from "../lib/post-utils";

// export const getStaticProps: GetStaticProps = async (
//     context: GetStaticPropsContext
//   ) => {
//     // @ts-ignore
//     const slug = "about"; //context.params;
//     const postData = getPostData(slug);
//     return {
//       props: {
//         post: postData,
//       },
//       // regenerate after every 600s(10mins)
//       revalidate: 600,
//     };
//   };

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
      </section>
    </>
  );
};

export default About;
