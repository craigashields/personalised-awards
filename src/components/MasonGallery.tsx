"use client";
import React, { useState } from "react";
import gallery1 from "../../public/static/images/gallery/gallery1.jpg";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

type Image = {
  src: StaticImageData;
  alt: string;
};

interface Iprops {
  gallery: Image[];
}

const chunkArray = (array: Image[], size: number) => {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
};

const MasonGallery = (props: Iprops) => {
  const imageChunks = chunkArray(props.gallery, 3);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {imageChunks.map((chunk, index) => (
        <div key={index} className="grid gap-4">
          {chunk.map((image, idx) => (
            // <div key={idx}>
            <BlurImage key={idx} image={image}></BlurImage>
            // </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="overflow-hidden rounded-lg bg-gray-200">
      <Image
        src={image.src}
        alt={image.alt}
        className={cn(
          "h-full w-full rounded-lg transition duration-700 ease-in-out hover:scale-105 focus:scale-105",
          isLoading ? " blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default MasonGallery;
