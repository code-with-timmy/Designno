import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCurrentPath } from "../hooks/useCurrentPath";

function ExploreOptions() {
  const { currentSelectedOption } = useCurrentPath();
  return (
    <section className="explor h-full my-auto gap-10 grid lg:grid-cols-2 max-sm:grid-cols-1 md:grid-rows-2 auto-rows-[250px] text-white">
      <div
        className={`h-full w-full bg-[url('/src/assets/webDesign.png')] bg-cover ${
          currentSelectedOption !== "app-design" &&
          currentSelectedOption !== "graphic-design"
            ? "md:row-span-2"
            : ""
        }  rounded-[10px] ${
          currentSelectedOption === "web-design" && "hidden"
        }`}
      >
        <div className="bg-[#000000]/[49.69%] rounded-[10px]  w-full h-full">
          <div className="flex flex-col gap-5 rounded-[10px]  text-white justify-center items-center h-full">
            <h3 className="text-white font-medium text-[40px] max-sm:text-[30px]">
              WEB DESIGN
            </h3>
            <Link
              to="/web-design"
              className="text-[15px] max-sm:text-[12px] flex items-center gap-1"
            >
              <span className="tracking-[0.31em]">VIEW PROJECT</span>
              <MdOutlineChevronRight className="text-[#E7816B] font-bold text-lg" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`h-full w-full bg-[url('/src/assets/appDesign.png')] bg-cover rounded-[10px] ${
          currentSelectedOption === "app-design" && "hidden"
        }`}
      >
        <div className="bg-[#000000]/[49.69%] rounded-[10px]  w-full h-full">
          <div className="flex flex-col gap-5 rounded-[10px]  text-white justify-center items-center h-full">
            <h3 className="text-white font-medium text-[40px] max-sm:text-[30px]">
              APP DESIGN
            </h3>
            <Link
              to="/app-design"
              className="text-[15px] max-sm:text-[12px] flex items-center gap-1"
            >
              <span className="tracking-[0.31em]">VIEW PROJECT</span>
              <MdOutlineChevronRight className="text-[#E7816B] font-bold text-lg" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`h-full w-full bg-[url('/src/assets/graphicDesign.png')] bg-cover rounded-[10px] ${
          currentSelectedOption === "graphic-design" && "hidden"
        }`}
      >
        <div className="bg-[#000000]/[49.69%] rounded-[10px]  w-full h-full">
          <div className="flex flex-col gap-5 rounded-[10px]  text-white justify-center items-center h-full">
            <h3 className="text-white font-medium text-[40px] max-sm:text-[30px]">
              GRAPHIC DESIGN
            </h3>
            <Link
              to="/graphic-design"
              className="text-[15px] max-sm:text-[12px] flex items-center gap-1"
            >
              <span className="tracking-[0.31em]">VIEW PROJECT</span>
              <MdOutlineChevronRight className="text-[#E7816B] font-bold text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreOptions;
