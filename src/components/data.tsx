import FlexRow from "@/components/styles/flexRow";
import { ResultPokeapi, ResultPokemon, Type } from "@/types/dataPokemons";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import FlexCol from "./styles/flexCol";
import Grid from "./styles/grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Target from "./target";

const Data = ({ id }: { id: number }) => {
  const router = useRouter();

  const [page, setPage] = useState(id);
  const [data, setData] = useState<ResultPokeapi>();
  useEffect(() => {
    const getData = async () => {
      const getDatos = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
      );
      setData(getDatos.data);
    };
    getData();
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    router.push(`/dataPokemons/${page}`);
  };
  const paginas = useMemo(() => data && Math.round(data.count / 10), [data]);

  const [pokemons, setPokemons] = useState<ResultPokemon[]>([]);
  useEffect(() => {
    const getPokemon = async () => {
      setPokemons([]);
      data?.results.map(async (item) => {
        const pokemon: ResultPokemon = await (await axios.get(item.url)).data;
        setPokemons((current) => [...current, pokemon]);
      });
    };
    getPokemon();
  }, [data, page]);
  return (
    <FlexCol className="flex-col w-full">
      <Pagination count={paginas} page={page} onChange={handleChange} />
      <Grid className="w-1/2 md:w-3/4 gap-x-8 gap-y-20 my-2 ">
        {pokemons.map((pokemon, i) => (
          <Target pokemon={pokemon} key={i} />
        ))}
      </Grid>
      <Pagination count={paginas} page={page} onChange={handleChange} />
    </FlexCol>
  );
};

export default Data;
