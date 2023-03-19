import { LazyLoadImage } from "react-lazy-load-image-component";
import FlexCol from "./styles/flexCol";
import FlexRow from "./styles/flexRow";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { ResultPokemon, Type } from "@/types/dataPokemons";
import { Button } from "@mui/material";
import { useState } from "react";
import ModalMorePokemon from "./modalMorePokemon";
import { useColorTitle } from "@/customHook/useColorPokemon";

const Target = ({ pokemon }: { pokemon: ResultPokemon }) => {
  const [seeMore, setSeeMore] = useState(false);
  const { abilities, name, height, weight, moves, sprites, types } = pokemon;
  const moves_necesary = moves.length > 3 ? moves.splice(0, 3) : moves;
  const color = useColorTitle(types);
  const ChangeSeeMore = () => {
    setSeeMore((current) => !current);
  };
  return (
    <FlexCol className="shadow-md shadow-black rounded-lg min-w-[200px] justify-between ">
      {sprites.front_default ? (
        <FlexCol className="border-b-2 border-black w-3/4 relative">
          <LazyLoadImage
            src={sprites.front_default}
            alt=""
            width={"100%"}
            height={"30"}
            effect={"opacity"}
          />
          <FlexRow className="text-xs gap-2 absolute bottom-2 right-0">
            <h2>
              <b>Heigh:</b>
              {height}
            </h2>
            <h2>
              <b>Weight:</b>
              {weight}
            </h2>
          </FlexRow>
        </FlexCol>
      ) : (
        <FlexCol className="border-b-2 border-black w-3/4 relative mt-4">
          <CatchingPokemonIcon sx={{ fontSize: "7rem" }} />
          <p className="font-bold text-xl opacity-70">No Pokemon Image</p>
          <FlexRow className="text-xs gap-2  ">
            <h2>
              <b>Heigh:</b>
              {height}
            </h2>
            <h2>
              <b>Weight:</b>
              {weight}
            </h2>
          </FlexRow>
        </FlexCol>
      )}
      <FlexCol>
        <FlexCol
          className={`gap-2 text-base md:text-xl capitalize mt-6  ${color} `}
        >
          <h3 className="font-bold">{name}</h3>
        </FlexCol>
        <FlexRow className="justify-start">
          <FlexRow className={`my-4 ${color}`}>
            {moves_necesary.map((move, i) => (
              <>
                <p className={``}>#{move.move.name}</p>
              </>
            ))}
          </FlexRow>
        </FlexRow>
      </FlexCol>
      <Button onClick={ChangeSeeMore}>Ver mas</Button>
      <ModalMorePokemon
        ChangeSeeMore={ChangeSeeMore}
        seeMore={seeMore}
        pokemon={pokemon}
      />
    </FlexCol>
  );
};
export default Target;
