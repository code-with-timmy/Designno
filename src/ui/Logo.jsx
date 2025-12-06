import { useNavigate } from "react-router-dom";
import Oval from "../assets/Oval.svg";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2.5" onClick={() => navigate("/")}>
      <img src={Oval} alt="" />
      <h1 className="text-dark-grey text-[18px] font-semibold tracking-[0.2em]">
        DESIGNO
      </h1>
    </div>
  );
}

export default Logo;
