import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import FlexCol from "@/components/styles/flexCol";

import Login from "@/components/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  return (
    <FlexCol className=" h-screen">
      <Navigation />
      <FlexCol className="w-full h-4/5 justify-center relative">
        <FlexCol className="w-1/2 h-full justify-center">
          <Login />
        </FlexCol>
      </FlexCol>
    </FlexCol>
  );
}
