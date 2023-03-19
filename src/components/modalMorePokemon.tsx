import { useColorTitle } from "@/customHook/useColorPokemon";
import { ResultPokemon } from "@/types/dataPokemons";
import { Button, Modal, Typography } from "@mui/material";
import FlexCol from "./styles/flexCol";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FlexRow from "./styles/flexRow";
import Subtitle from "./subtitles";

interface Props {
  seeMore: boolean;
  ChangeSeeMore: () => void;
  pokemon: ResultPokemon;
}
const ModalMorePokemon = ({ seeMore, ChangeSeeMore, pokemon }: Props) => {
  console.log(pokemon);
  const { abilities, name, height, weight, moves, sprites, types } = pokemon;
  const moves_necesary = moves.length > 3 ? moves.splice(0, 3) : moves;
  const color = useColorTitle(types);

  return (
    <Modal
      sx={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
      open={seeMore}
      onClose={ChangeSeeMore}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FlexCol className="bg-white w-2/3   rounded-md">
        <FlexCol className="min-w-[200px] h-full w-full pb-10 justify-start ">
          {sprites.front_default ? (
            <FlexCol className="border-b-2  w-3/4 relative">
              <div className="w-2/5">
                <LazyLoadImage
                  style={{ display: "flex", justifyContent: "center" }}
                  src={sprites.front_default}
                  alt=""
                  width={"100%"}
                  height={"50"}
                  effect={"opacity"}
                />
              </div>
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
              <hr />
            </FlexCol>
            <FlexRow className="gap-10 flex-wrap">
              <FlexCol className="items-start ">
                <Subtitle color={color ?? ""} title={"Movements"} />
                <FlexCol className={` ${color}`}>
                  {moves_necesary.map((move, i) => (
                    <li className={`list-item`} key={i}>
                      {move.move.name}
                    </li>
                  ))}
                </FlexCol>
              </FlexCol>
              <FlexCol className={` ${color} items-start`}>
                <Subtitle color={color ?? ""} title={"Abilities"} />
                {abilities.map((skill, i) => {
                  return <li key={i}>{skill.ability.name}</li>;
                })}
              </FlexCol>
              <FlexCol className={` ${color} items-start`}>
                <Subtitle color={color ?? ""} title={"Types"} />
                <FlexCol>
                  {types.map((type, i) => (
                    <li key={i}>{type.type.name}</li>
                  ))}
                </FlexCol>
              </FlexCol>
            </FlexRow>
          </FlexCol>
        </FlexCol>
      </FlexCol>
    </Modal>
  );
};
export default ModalMorePokemon;
