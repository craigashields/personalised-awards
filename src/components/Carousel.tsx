"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import TestimonialCard from "./TestimonialCard";

interface Iprops {
  testimonials: {
    name: string;
    from: string;
    testimonial: string;
    rating: number;
  }[];
}

const TestimonialCarousel = (props: Iprops) => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 3000,
      autoplay: 3000,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-slate-700",
        },
      } as any,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      <div className="glide-08 relative w-full">
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
            {props.testimonials.map((testimonial) => (
              <li key={testimonial.from}>
                <div className="h-full w-full">
                  <TestimonialCard
                    key={testimonial.name}
                    testimonal={testimonial}
                  ></TestimonialCard>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="-mt-6 flex w-full items-center justify-center gap-2"
            data-glide-el="controls[nav]"
          >
            <button
              className="group p-4"
              data-glide-dir="=0"
              aria-label="goto slide 1"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=1"
              aria-label="goto slide 2"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=2"
              aria-label="goto slide 3"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
