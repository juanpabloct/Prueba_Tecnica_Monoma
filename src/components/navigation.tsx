import Link from "next/link";
import Profile from "./profile";
import FlexRow from "./styles/flexRow";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import HomeIcon from "@mui/icons-material/Home";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "@/reducers/userAcces";
import { useRouter } from "next/dist/client/router";
import { useAccesUser } from "@/customHook/useAccesUser";
const Navigation = () => {
  const { session } = useAccesUser();
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget && setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-slate-700 h-14 w-full flex items-center justify-center">
      <nav className="w-4/5 flex justify-between h-full items-center">
        <FlexRow className="text-white justify-evenly gap-10 items-center">
          <Link href={"/"} className="items-center flex">
            <HomeIcon fontSize="medium" />
            Login
          </Link>
          <Link href={session ? "/dataPokemons/0" : ""}>
            <CatchingPokemonIcon /> Pokemons
          </Link>
        </FlexRow>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Profile />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                dispatch(setData(null));
                router.push("/");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
