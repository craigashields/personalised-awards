import React from "react";

export default function Features() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center rounded bg-emerald-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-2 py-2 text-lg leading-6 text-slate-700">
              Customisable
            </h3>
            <p className="text-slate-500">
              Bring your vision to life with our fully customizable acrylic
              trophies, tailored to celebrate each unique achievement with your
              personal touch.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center rounded bg-emerald-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-2 py-2 text-lg leading-6 text-slate-700">
              Sustainable Material
            </h3>
            <p className="text-slate-500">
              Our acrylic trophies are crafted from eco-friendly, sustainable
              materials, ensuring a minimal environmental footprint while
              preserving the elegance and durability you expect.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center rounded bg-emerald-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-2 py-2 text-lg leading-6 text-slate-700">
              Personalised Support
            </h3>
            <p className="text-slate-500">
              Experience our personalized support where every client is a
              priority, ensuring a seamless, customized experience from design
              to delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
