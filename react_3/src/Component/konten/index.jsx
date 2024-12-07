import logo from "./../../assets/konten1.png";
import logo1 from "./../../assets/konten1.png";
import logo2 from "./../../assets/konten3.png";
import logo3 from "./../../assets/konten4.png";

export const Konten = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase tracking-widest">Category</p>
        <h1 className="text-4xl font-bold text-gray-900">
          We Offer Best Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 relative">
          <img src={logo} alt="Satellite dish illustration" className="mb-4" />
          <h2 className="text-lg font-bold text-gray-900">
            Calculated Weather
          </h2>
          <p className="text-gray-500">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 relative">
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-red-500 rounded-full"></div>
          <img src={logo1} alt="Microphone illustration" className="mb-4" />
          <h2 className="text-lg font-bold text-gray-900">Best Flight</h2>
          <p className="text-gray-500">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 relative">
          <img src={logo2} alt="Microphone illustration" className="mb-4" />
          <h2 className="text-lg font-bold text-gray-900">Local Events</h2>
          <p className="text-gray-500">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 relative">
          <img src={logo3} alt="Gear illustration" className="mb-4" />
          <h2 className="text-lg font-bold text-gray-900">Customization</h2>
          <p className="text-gray-500">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
};
