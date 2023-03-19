import { ResultPokemon } from "@/types/dataPokemons";
import { Modal, Typography } from "@mui/material";
import FlexCol from "./styles/flexCol";
interface Props {
  seeMore: boolean;
  ChangeSeeMore: () => void;
  pokemon: ResultPokemon;
}
const ModalMorePokemon = ({ seeMore, ChangeSeeMore, pokemon }: Props) => {
  console.log(pokemon);

  return (
    <Modal
      open={seeMore}
      onClose={ChangeSeeMore}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FlexCol className="bg-white  absolute top-1/4 left-1/4 w-1/2 translate-1/2 h-1/2">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </FlexCol>
    </Modal>
  );
};
export default ModalMorePokemon;
