import ContactUs from "@/components/contact/contact-form";

export default async function ContactPage({
  params,
}: {
  params: { handle: string };
}) {
  return (
    <div className="overflow-hidden bg-slate-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-purple-500 sm:text-4xl sm:leading-none">
              Contact us, <br className="hidden md:block" />
              for a quote{" "}
              <span className="text-purple-500">
                and to discuss your needs.
              </span>
            </h2>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-emerald-500 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  {`We're here to help.`}
                </h3>
                <ContactUs></ContactUs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
