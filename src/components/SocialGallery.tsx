import React from "react";

interface Iprops {
  gallery: string[];
}

const SocialGallery = (props: Iprops) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/Y2NqjQgc/gallery-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/W1z29Kyj/gallery-10.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/2yCYnXWs/gallery-11.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/BbCqyGsZ/gallery-12.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/nLQnxmZP/gallery-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/85MkR606/gallery-13.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/763DGy51/gallery-5.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/TwMf3P3Y/gallery-7.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/x8Qft1wF/gallery-2.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/bN3y9833/gallery-9.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/JzFRSxwX/gallery-6.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 focus:scale-105"
            src="https://i.postimg.cc/02Q4wq3Y/gallery-15.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SocialGallery;
