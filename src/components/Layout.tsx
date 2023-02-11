import { oswald } from "@/fonts";
import { ReactNode } from "react";
import { Meta } from "./Meta";
import { NavBar } from "./NavBar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={`flex min-h-screen flex-col ${oswald.variable} font-sans`}>
      <Meta />
      <main className="container mx-auto flex flex-1 flex-col px-8">
        <NavBar />
        {children}
      </main>
    </div>
  );
};
