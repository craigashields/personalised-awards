import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export { poppins };
