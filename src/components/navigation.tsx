import Link from "next/link";
import { ReactNode } from "react";
import Profile from "./profile";
import FlexRow from "./styles/flexRow";

const Navigation = () => {
  return (
    <header className="bg-slate-700 h-14 w-full">
      <nav className="w-full flex justify-around h-full items-center">
        <FlexRow className="text-white justify-evenly gap-10">
          <Link href={"/"}>Ir a Pagina Principal</Link>
          <Link href={"/hola"}>Saludaaaaa</Link>
        </FlexRow>
        <FlexRow className="h-full flex items-center">
          <input className="focus:outline-none border-blue-700 border  h-1/2" />
        </FlexRow>
        <FlexRow className="h-full flex items-center">
          <Profile />
        </FlexRow>
      </nav>
    </header>
  );
};
export default Navigation;
