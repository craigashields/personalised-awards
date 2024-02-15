import React from "react";

export default function SendError() {
  return (
    <section className="container mx-auto px-10 py-16">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl lg:text-6xl text-emerald-500 text-center font-bold mb-4">
          Something went wrong
        </h1>
        <p className="text-md md:text-xl lg:text-xl text-center text-black">
          {"We're really sorry, something went wrong when sending your request"}
        </p>
        <div className="pt-6">
          <a
            href={`/`}
            className="inline-flex justify-center items-center py-3 mt-4 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
          >
            Home
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
      </div>
    </section>
  );
}
