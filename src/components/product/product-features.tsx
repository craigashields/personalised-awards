export function ProductFeatures({ features }: { features: string[] }) {
  {
    return (
      <ul className="">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-4 px-4 py-3">
            <div className="flex items-center self-center">
              <div className="relative flex flex-wrap items-center">
                <input
                  className="peer h-4 w-4 appearance-none rounded border-2  bg-emerald-500 transition-colors border-emerald-500 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none "
                  type="checkbox"
                  value=""
                  disabled
                  id="id-a01"
                />
              </div>
            </div>

            <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
              <label
                className="cursor-pointer text-sm md:text-base lg:text-base text-slate-700"
                htmlFor="id-a01"
              >
                {feature}
              </label>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
