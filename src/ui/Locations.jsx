import { useNavigate } from "react-router-dom";
import location1 from "../assets/location1.svg";
import location2svg from "../assets/location2svg.svg";
import location3 from "../assets/location3.svg";

function Locations() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-12 items-center py-20">
      <div className="flex flex-col items-center gap-4">
        <img src={location1} alt="" />
        <h3 className="text-[20px] font-medium">CANADA</h3>
        <button
          onClick={() => navigate("/locations")}
          className="bg-peach text-white font-light
         p-3 rounded-md text-[15px] hover:bg-[#FFAD9B] hover:text-white cursor-pointer"
        >
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={location2svg} alt="" />
        <h3 className="text-[20px] font-medium">AUSTRALIA</h3>
        <button
          onClick={() => navigate("/locations")}
          className="bg-peach text-white font-light
         p-3 rounded-md text-[15px] hover:bg-[#FFAD9B] hover:text-white cursor-pointer"
        >
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={location3} alt="" />
        <h3 className="text-[20px] font-medium">UNITED KINGDOM</h3>
        <button
          onClick={() => navigate("/locations")}
          className="bg-peach text-white font-light
         p-3 rounded-md text-[15px] hover:bg-[#FFAD9B] hover:text-white cursor-pointer"
        >
          SEE LOCATION
        </button>
      </div>
    </div>
  );
}

export default Locations;
