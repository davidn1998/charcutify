import { NextFontWithVariable } from "@next/font";
import { Oswald } from "@next/font/google";

export const oswald: NextFontWithVariable = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
