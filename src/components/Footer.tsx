import React from "react";
import headerNavLinks from "@/data/headerNavLinks";
export default function Footer({
  children,
}: Readonly<{
  children: React.JSX.Element;
}>) {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo --> */}
      <footer className="w-full text-slate-500 ">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4 pr-16"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="mb-6 flex relative items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                  href="/"
                >
                  <img
                    src="https://i.postimg.cc/q7j75ZdN/PA-Master-Logo.png"
                    alt=""
                    className="object-contain h-full"
                  />
                </a>
                <p>
                  Sustainably Crafted, Uniquely Yours - Elevate Achievements
                  with Our Custom Acrylic Trophies!
                </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo"
                >
                  Links
                </h3>
                <ul>
                  {headerNavLinks.map((link) => (
                    <li key={link.title} className="mb-2 leading-6">
                      <a
                        href={link.href}
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="/payment-options"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Payment Options
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/delivery-info"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Delivery Information
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="Returns"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Returns Policy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {children}
      </footer>
      {/*    <!-- End Five Columns Footer with Logo --> */}
    </>
  );
}
