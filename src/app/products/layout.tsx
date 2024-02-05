import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubFooter from "@/components/SubFooter";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="mx-auto py-10 px-4 lg:py-16 flex max-w-screen-2xl flex-col gap-8 text-black md:flex-row ">
        <div className="order-first w-full flex-none md:max-w-[125px]"></div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]"></div>
      </div>
    </Suspense>
  );
}
