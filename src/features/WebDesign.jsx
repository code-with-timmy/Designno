import ExploreOptions from "../ui/ExploreOptions";
import Footer from "../ui/Footer";

function WebDesign() {
  return (
    <div className="flex flex-col gap-30">
      <section className=" relative overflow-hidden flex flex-col py-28 md:py-15 md:w-[80%] md:mx-auto md:rounded-xl gap-5 px-3 text-white bg-peach items-center ">
        <span className=" circle2 circle-1"></span>
        <span className="circle2 circle-2"></span>
        <span className="circle2 circle-3"></span>
        <span className="circle2 circle-4"></span>
        <span className="circle2 circle-5"></span>
        <h3 className="text-[30px] font-medium">Web Design</h3>
        <p className=" text-[15px] text-center md:w-[55%] lg:w-[35%]">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>
      <section className="w-[80%]  mx-auto gap-10 grid grid-rows-auto lg:grid-cols-3">
        <div className="flex flex-col md:flex-row lg:flex-col  bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="h-fit">
            <img
              src="/src/assets/web-design-01.png"
              className="h-full object-contain w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:justify-center gap-2.5 py-6 px-3  group hover:bg-peach text-center">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              EXPRESS
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="  h-fit">
            <img
              src="/src/assets/web-design-02.png"
              className="h-full object-contain w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2.5 md:justify-center py-6 px-3 text-center group hover:bg-peach">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              TRANSFER
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="  h-fit">
            <img
              src="/src/assets/web-design-03.png"
              className="h-full object-contain w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2.5 md:justify-center py-6 px-3 text-center group hover:bg-peach">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              PHOTON
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="h-fit">
            <img
              src="/src/assets/web-design-04.png"
              className="h-full object-contain w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2.5 md:justify-center py-6 px-3 text-center group hover:bg-peach">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              BUILDER
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Connects users with local contractors based on their location
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="  h-fit">
            <img
              src="/src/assets/web-design-05.png"
              className="h-full object-contain w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2.5 md:justify-center py-6 px-3 text-center group hover:bg-peach">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              BLOGR
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row lg:flex-col bg-[#FDF3F0] rounded-2xl overflow-hidden">
          <div className="  h-fit">
            <img
              src="/src/assets/web-design-06.png"
              className="h-full object-contain w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2.5 md:justify-center py-6 px-3 text-center group hover:bg-peach">
            <h3 className="text-peach tracking-[0.31em] text-[20px] font-medium group-hover:text-white">
              CAMP
            </h3>
            <p className="text-[16px] text-dark-grey group-hover:text-white">
              Get expert training in coding, data, design, and digital marketing
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

export default WebDesign;
