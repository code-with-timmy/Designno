import "leaflet/dist/leaflet.css"; // Don't forget this!
import LiveMapLocation from "../features/LiveMapLocation";

function MapLocation() {
  return (
    <section className="flex flex-col gap-10 mx-auto md:w-[80%] ">
      <div className="grid grid-cols-1  md:gap-5 lg:grid-cols-3">
        <div className="z-10 md:rounded-xl overflow-hidden lg:col-span-1 lg:order-2 h-[300px]">
          <LiveMapLocation position={[43.6453, -79.5745]} />
        </div>
        <div className="bg-[#FDF3F0] flex flex-col gap-4 items-center lg:items-start lg:p-20 text-center py-10 md:rounded-xl  lg:col-span-2 lg:order-1">
          <h3 className="text-[32px] font-medium text-peach">Canada</h3>
          <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row">
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Designo Central Office</span>
              <span>3886 Wellington Street</span>
              <span>Toronto, Ontario M9C 3J5</span>
            </p>
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Contact</span>
              <span>P : +1 253-863-8967</span>
              <span>M : contact@designo.co</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:gap-5 lg:grid-cols-3">
        <div className="z-10 md:rounded-xl overflow-hidden lg:col-span-1 h-[300px]">
          <LiveMapLocation position={[-31.6291, 152.8279]} />
        </div>
        <div className="bg-[#FDF3F0] flex flex-col gap-4 items-center text-center py-10 md:rounded-xl lg:items-start lg:p-20 lg:col-span-2">
          <h3 className="text-[32px] font-medium text-peach">Australia</h3>
          <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row">
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Designo AU Office</span>
              <span>19 Balonne Street</span>
              <span>New South Wales 2443</span>
            </p>
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Contact</span>
              <span>P : (02) 6720 9092</span>
              <span>M : contact@designo.au</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:gap-5 lg:grid-cols-3 mb-20">
        <div className="z-10 md:rounded-xl overflow-hidden lg:col-span-1 h-[300px] lg:order-2">
          <LiveMapLocation position={[51.714678, -3.824547]} />
        </div>
        <div className="bg-[#FDF3F0] flex flex-col gap-4 items-center text-center py-10 md:rounded-xl lg:items-start lg:p-20 lg:col-span-2 lg:order-1">
          <h3 className="text-[32px] font-medium text-peach">United Kingdom</h3>
          <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row">
            {" "}
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Designo UK Office</span>
              <span>13 Colorado Way</span>
              <span>Rhyd-y-fro SA8 9GA</span>
            </p>
            <p className="flex flex-col gap-1.5 text-[15px] lg:text-left">
              <span className="font-bold">Contact</span>
              <span>P : 078 3115 1400</span>
              <span>M : contact@designo.uk</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapLocation;
