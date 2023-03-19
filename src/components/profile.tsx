import Image from "next/image";
import user from "../assets/profile.svg";
import FlexRow from "./styles/flexRow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Profile = () => {
  return (
    <FlexRow className="h-full items-center">
      <AccountCircleIcon sx={{ fontSize: "3rem", color: "white" }} />
    </FlexRow>
  );
};
export default Profile;
