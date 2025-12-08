import passi from "../assets/passi.svg";
import resour from "../assets/resour.svg";
import friend from "../assets/friend.svg";

function Features() {
  return (
    <section className="grid lg:grid-cols-3 max-md:grid-cols-1 md:grid-cols-1 gap-10 mb-20">
      <div className="flex lg:flex-col max-sm:flex-col max-md:flex-row md:flex-row items-center gap-2.5 max-sm:gap-5">
        <img src={passi} alt="" className="h-37 w-37" />
        <div className="flex flex-col max-sm:text-center md:items-center gap-3">
          <h2 className="text-dark-grey font-medium text-[20px]  tracking-[6px]">
            PASSIONATE
          </h2>
          <p className="text-dark-grey text-[16px] max-sm:w-[90%] max-sm:text-center max-sm:mx-auto text-center">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col max-sm:flex-col max-md:flex-row md:flex-row max-sm:text-center items-center gap-2.5 max-sm:gap-5">
        <img src={resour} alt="" className="h-37 w-37" />
        <div className="flex flex-col md:items-center gap-3">
          <h2 className="text-dark-grey font-medium text-[20px]  tracking-[6px]">
            RESOURCEFUL
          </h2>
          <p className="text-dark-grey text-[16px] max-sm:w-[90%] max-sm:text-center max-sm:mx-auto text-center">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-col max-sm:flex-col max-md:flex-row md:flex-row max-sm:text-center items-center gap-2.5 max-sm:gap-5">
        <img src={friend} alt="" className="h-37 w-37" />
        <div className="flex flex-col md:items-center gap-3">
          <h2 className="text-dark-grey font-medium text-[20px]  tracking-[6px]">
            FRIENDLY
          </h2>
          <p className="text-dark-grey text-[16px] max-sm:w-[90%] max-sm:text-center max-sm:mx-auto text-center">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
