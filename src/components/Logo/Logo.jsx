import Tilt from "react-parallax-tilt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import "./Logo.css";

const Logo = () => (
  <div className="ma4 mt0">
    <Tilt className="Tilt br2 shadow-2 w-10 h-10 flex justify-center items-center logo">
      <PsychologyIcon style={{ fontSize: "6em" }} />
    </Tilt>
  </div>
);
export default Logo;
