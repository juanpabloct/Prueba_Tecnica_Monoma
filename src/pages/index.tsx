import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const router = useRouter();
  return (
    <div>
      <Navigation />
    </div>
  );
}
