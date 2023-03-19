import Link from "next/link";
import Profile from "./profile";
import FlexRow from "./styles/flexRow";

import HomeIcon from "@mui/icons-material/Home";
const Navigation = () => {
  return (
    <header className="bg-slate-700 h-14 w-full flex items-center justify-center">
      <nav className="w-4/5 flex justify-between h-full items-center">
        <FlexRow className="text-white justify-evenly gap-10 items-center">
          <Link href={"/"} className="items-center flex">
            <HomeIcon fontSize="medium" />
            Home
          </Link>
        </FlexRow>
        <FlexRow className="h-full flex items-center">
          <Profile />
        </FlexRow>
      </nav>
    </header>
  );
};
export default Navigation;
