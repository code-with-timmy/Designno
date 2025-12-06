import ExploreOptions from "../ui/ExploreOptions";
import Footer from "../ui/Footer";

function AppDesign() {
  return (
    <div className="flex flex-col gap-30">
      <section className="relative overflow-hidden flex flex-col py-28 md:py-15 md:w-[80%] md:mx-auto md:rounded-xl gap-5 px-3 z-10 text-white bg-peach items-center circle-grad">
        <span className=" circle2 circle-1"></span>
        <span className="circle2 circle-2"></span>
        <span className="circle2 circle-3"></span>
        <span className="circle2 circle-4"></span>
        <span className="circle2 circle-5"></span>
        <h3 className="text-[30px] font-medium">App Design</h3>
        <p className=" text-[15px] text-center ">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </section>
      <section className="w-[80%] mx-auto gap-10 grid grid-rows-auto lg:grid-cols-3">
        <div className="flex flex-col md:flex-row lg:flex-col bg-[#FDF3F0]   rounded-2xl overflow-hidden">
          <div className="bg-[#2E3947] h-fit ">
            <img
              src="/src/assets/app-design-01.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:justify-center gap-2.5 py-6 px-3 text-center group hover:bg-peach ">
            <h3 className="text-peach group-hover:text-white tracking-[0.31em] text-[20px] font-medium">
              AIRFILTER
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className=" bg-[#34B7A2] h-fit">
            <img
              src="/src/assets/app-design-02.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:justify-center gap-2.5 py-6 px-3 text-center group hover:bg-peach ">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              EYECAM
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className=" bg-[#3F2F83] fit">
            <img
              src="/src/assets/app-design-03.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:justify-center gap-2.5 py-6 px-3 text-center group hover:bg-peach ">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              FACEIT
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className=" bg-[#40125A] h-fit">
            <img
              src="/src/assets/app-design-04.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:justify-center gap-2.5 py-6 px-3 text-center group hover:bg-peach ">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              TODO
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="bg-[#853A4D] h-fit">
            <img
              src="/src/assets/app-design-05.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center h-full md:justify-center gap-2.5 py-6 px-3 text-center group hover:bg-peach ">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              LOOPSTUDIOS
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto mb-30">
        <ExploreOptions />
      </section>
    </div>
  );
}

export default AppDesign;
