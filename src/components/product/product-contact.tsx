import Prose from "../prose";

export function ProductContact({ handle }: { handle: string }) {
  return (
    <div className="pt-8">
      <Prose
        className="py-2 text-sm leading-tight"
        html="Contact us for the best quote and discussion about your requirements."
      />
      <a
        href={`/contact?productHandle=${handle}`}
        className="inline-flex justify-center items-center py-3 mt-4 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
      >
        Contact Us
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
  );
}
