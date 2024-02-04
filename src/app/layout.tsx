import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/data/siteMetadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import SubFooter from "@/components/SubFooter";
import { poppins } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${inter.className} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body id="top" className="bg-white text-black antialiased">
        <TopBar />
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer>
          <SubFooter></SubFooter>
        </Footer>
      </body>
    </html>
  );
}
