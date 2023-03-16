import { useRouter } from "next/router";
import FlexRow from "@/components/styles/flexRow";
import { DatosPokemons } from "@/types/dataPokemons";
import { Pagination } from "@mui/material";
import axios from "axios";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
const DataPokemons = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<DatosPokemons>();
  useEffect(() => {
    const getData = async () => {
      const getDatos = await axios.get(
        `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`
      );
      setData(getDatos.data);
    };
    getData();
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const paginas = data && Math.round(data.totalCount / 10) + 1;
  return (
    <FlexRow>
      <Pagination count={paginas} page={page} onChange={handleChange} />

      <Pagination count={paginas} page={page} onChange={handleChange} />
    </FlexRow>
  );
};

export default DataPokemons;
