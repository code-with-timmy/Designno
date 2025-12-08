import Header from "../ui/Header";

import phone from "../assets/phone.svg";
import ExploreOptions from "../ui/ExploreOptions";
import Features from "../ui/Features";
import Footer from "../ui/Footer";

function HomePage() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col gap-40 max-sm:gap-20 max-sm:w-full w-[80%] mx-auto">
        <div className="relative  bg-peach md:rounded-md w-full square-with-circle overflow-hidden pt-10">
          <div className="flex items-center max-md:flex-col md:flex-col lg:flex-row justify-between w-[80%] gap-5 h-full mx-auto">
            <div className="flex gap-10 max-sm:gap-4   flex-col lg:w-[50%] max-md:w-[90%] md:w-[90%] max-sm:mt-5">
              <h2 className="text-white font-medium text-[48px] max-sm:text-[25px] max-md:text-center md:text-center lg:text-left leading-12 max-sm:leading-7">
                Award-winning custom designs and digital branding solutions
              </h2>
              <p className="text-white text-[16px] max-sm:text-[12px] max-md:text-center md:text-center lg:text-left">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <button className="bg-white text-[15px] max-sm:text-[11px] max-md:self-center md:self-center lg:self-start  rounded-[10px] p-4 max-sm:p-2 w-fit">
                LEARN MORE
              </button>
            </div>
            <div className="lg:self-end max-md:self-center md:self-center ">
              <img src={phone} alt="" />
            </div>
          </div>
        </div>

        <ExploreOptions />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
