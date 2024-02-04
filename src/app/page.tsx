import BestSellers from "@/components/BestSellers";
import TestimonialCarousel from "@/components/Carousel";
import Features from "@/components/Features";
import Gallery from "@/components/SocialGallery";
import testimonials from "@/data/testimonials";
import gallery from "@/data/gallery";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <section className="container border-b px-10 md:px-28 lg:px-28 xl:px-32 2xl:px-36 py-20 m-auto">
        <Features></Features>
      </section>
      <BestSellers></BestSellers>
      <section className="container border-b px-10 md:px-28 lg:px-28 xl:px-32 2xl:px-36 py-12 m-auto overflow-hidden rounded-xl bg-wuiSlate-50 p-4 pb-12 sm:p-16 sm:pb-16 [&>*]:w-full">
        <p className="text-center text-emerald-500 pb-16 font-bold font-poppins text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          {`Don't take our word for it!`}
        </p>
        <TestimonialCarousel testimonials={testimonials}></TestimonialCarousel>
      </section>
      <section className="container-none py-10 px-20 md:px-28 lg:px-28 xl:px-32 2xl:px-36 m-auto pb-16">
        <p className="text-center text-black pb-2 font-semibold font-poppins text-md md:text-lg lg:text-xl xl:text-1xl 2xl:text-2xl">
          Share your memories
        </p>
        <p className="text-center text-emerald-500 pb-16 font-bold font-poppins text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          #personalisedawards
        </p>
        <Gallery gallery={gallery}></Gallery>
      </section>
    </main>
  );
}
