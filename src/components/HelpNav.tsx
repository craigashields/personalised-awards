import React, { useEffect, useState } from "react";
import { helpLinks } from "@/data/navLinks";
import ModalLink from "./ModalLink";
import { getPostData } from "@/app/lib/post-utils";

interface PostData {
  props: {
    post: {
      content: string;
      slug: string;
      // Add any other properties that are part of postData
    };
  };
  revalidate: number;
}

export default async function HelpNav() {
  async function fetchPosts(): Promise<PostData[]> {
    const postsData = await Promise.all(
      helpLinks.map(async (link) => {
        const postData = await getPostData(`${link.contentSlug}`);
        return {
          props: {
            post: {
              ...postData,
              //content: postData.content,
            },
          },
          // regenerate after every 600s(10mins)
          revalidate: 600,
        };
      })
    );
    return postsData;
  }

  const posts: PostData[] = await fetchPosts();
  return (
    <nav
      className="col-span-2 md:col-span-4 lg:col-span-2"
      aria-labelledby="footer-docs-5-logo"
    >
      <h3
        className="mb-6 text-base font-medium text-slate-700"
        id="footer-docs-5-logo"
      >
        Help
      </h3>
      <ul>
        {posts.map((item, index) => (
          <li key={index} className="mb-2 leading-6">
            <ModalLink post={item.props.post}></ModalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
