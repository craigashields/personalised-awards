import React from "react";

export default function Features() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center rounded bg-emerald-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              className="h-8 w-8"
              aria-label="customisable icon"
              role="graphics-symbol"
            >
              <rect width="20" height="20" fill="none" />
              <path
                fill="currentColor"
                d="M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24c-.61.3-5.76 3.47-7.67 5.57c-.86.96-2.06 3.79-1.09 4.82c.92.98 3.96-.17 4.79-1c2.06-2.06 5.21-7.17 5.5-7.79M1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64c.93-.65 2.22-.62 3.08.29c.63.67.8 2.57-.16 3.46c-1.57 1.45-4 1.55-6.15.89"
              />
            </svg>
            {/* <svg
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
            </svg> */}
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
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              aria-label="sustainability icon"
              role="graphics-symbol"
            >
              <rect width="24" height="24" fill="none" />
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m12 17l-2 2l2 2" />
                <path d="M10 19h9a2 2 0 0 0 1.75-2.75l-.55-1M8.536 11l-.732-2.732L5.072 9" />
                <path d="m7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732L18.928 9" />
                <path d="m18.196 11.732l-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976" />
              </g>
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
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
              className="h-8 w-8"
              aria-label="Support icon"
              role="graphics-symbol"
            >
              <rect width="14" height="14" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25"
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
