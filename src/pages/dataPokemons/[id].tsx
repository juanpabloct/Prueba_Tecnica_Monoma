import Data from "@/components/data";
import Navigation from "@/components/navigation";
import FlexCol from "@/components/styles/flexCol";
import { useAccesUser } from "@/customHook/useAccesUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
const DataPokemons = () => {
  const router = useRouter();
  const { query, push } = router;
  const { id } = query;
  const { session } = useAccesUser();
  useEffect(() => {
    !session && push("/");
  }, [id, push, session]);
  return (
    <FlexCol>
      <Navigation />
      {id && <Data id={+id} />}
    </FlexCol>
  );
};

export default DataPokemons;
