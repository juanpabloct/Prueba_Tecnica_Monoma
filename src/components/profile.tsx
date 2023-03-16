import Image from "next/image";
import user from "../assets/profile.svg";
import FlexRow from "./styles/flexRow";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Profile = () => {
  return (
    <FlexRow className="h-full items-center">
      <Image
        src={user}
        alt=""
        width={45}
        color={"white"}
        className="rounded-full border-2 border-white"
      />
    </FlexRow>
  );
};
export default Profile;
