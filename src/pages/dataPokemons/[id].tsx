import Data from "@/components/data";
import Navigation from "@/components/navigation";
import FlexCol from "@/components/styles/flexCol";
import { useRouter } from "next/router";
const DataPokemons = () => {
  const { id } = useRouter().query;
  return (
    <FlexCol>
      <Navigation />
      {id && <Data id={+id} />}
    </FlexCol>
  );
};

export default DataPokemons;
