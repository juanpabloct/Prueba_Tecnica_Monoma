import Data from "@/components/data";
import Navigation from "@/components/navigation";
import FlexCol from "@/components/styles/flexCol";
import FlexRow from "@/components/styles/flexRow";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
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
