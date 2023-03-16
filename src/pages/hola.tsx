import Navigation from "@/components/navigation";
import { useRouter } from "next/router";

const Hola = () => {
  const route = useRouter();
  return <Navigation />;
};
export default Hola;
