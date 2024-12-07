import logo from "./../../assets/f3.jpg";
import logo1 from "./../../assets/logook.jpg";
import logo2 from "./../../assets/europaa.jpg";
export const Konten3 = () => {
  return (
    <div className="container mx-auto p-12">
      <div className="text-center mb-12">
        <p className="text-gray-500">Top Selling</p>
        <h1 className="text-4xl font-bold text-gray-800">Top Destinations</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={logo}
            alt="Colosseum in Rome, Italy"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Rome, Italy
              </h2>
              <p className="text-gray-600">$5.42k</p>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={logo1}
            alt="Big Ben in London, UK"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                London, UK
              </h2>
              <p className="text-gray-600">$4.2k</p>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <p>12 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={logo2}
            alt="Cathedral in Europe"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Full Europe
              </h2>
              <p className="text-gray-600">$15k</p>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <p>28 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
