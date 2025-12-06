import Footer from "../ui/Footer";
import Locations from "../ui/Locations";

function AboutUs() {
  return (
    <section className="flex flex-col gap-10 mx-auto md:w-[80%]">
      <div className="grid grid-cols-1 md:rounded-2xl overflow-hidden lg:grid-cols-3">
        <div className="w-full h-[400px] max-sm:h-fit lg:h-full overflow-hidden lg:col-span-1 lg:order-2">
          <img src="/about-us-01.png" alt="" className="w-full h-full" />
        </div>
        <div className=" relative overflow-hidden bg-peach flex flex-col justify-center text-center text-white py-20 px-4 gap-4 lg:col-span-2 lg:order-1 ">
          <span className="big-circle"></span>
          <h3 className="font-medium text-[32px]">About us</h3>
          <p className="text-[16px] font-light lg:w-[70%] lg:text-left mx-auto">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:rounded-2xl overflow-hidden lg:grid-cols-3">
        <div className="w-full h-[400px] max-sm:h-fit overflow-hidden  lg:col-span-1 lg:order-1 lg:h-full">
          <img src="/about-us-02.png" alt="" className="w-full h-full" />
        </div>
        <div className="bg-[#FDF3F0] flex flex-col justify-center text-center text-dark-grey py-20 px-4 gap-4 lg:col-span-2 lg:order-2 ">
          <h3 className="font-medium text-[32px] text-peach">
            World-class talent
          </h3>
          <p className="text-[16px] font-light lg:w-[70%] lg:text-left mx-auto">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-[16px] font-light lg:w-[70%] lg:text-left mx-auto">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <Locations />
      <div className="grid grid-cols-1 md:rounded-2xl overflow-hidden lg:grid-cols-3 mb-30">
        <div className="w-full h-[400px] max-sm:h-fit lg:h-full  overflow-hidden lg:col-span-1 lg:order-2">
          <img src="/about-us-03.png" alt="" className="w-full h-full" />
        </div>
        <div className="bg-[#FDF3F0] flex flex-col justify-center text-center text-dark-grey py-20 px-4 gap-4  lg:col-span-2 lg:order-1  ">
          <h3 className="font-medium text-[32px] text-peach">The real deal</h3>
          <p className="text-[16px] font-light  lg:w-[70%] lg:text-left mx-auto">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[16px] font-light lg:w-[70%] lg:text-left mx-auto">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
