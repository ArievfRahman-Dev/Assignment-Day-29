import logo from "../../assets/lego.png";
export const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-6 py-4 lg:px-24">
        <div className="text-2xl font-bold">
          <span className="text-black">Travello</span>
        </div>
        <nav className="flex space-x-14 text-gray-600">
          <a href="#" className="hover:text-black">
            Destinations
          </a>
          <a href="#" className="hover:text-black">
            Hotels
          </a>
          <a href="#" className="hover:text-black">
            Flights
          </a>
          <a href="#" className="hover:text-black">
            Bookings
          </a>
          <a href="#" className="hover:text-black">
            Login
          </a>
          <button className=" hover:bg-gray-100">Sign up</button>
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-between px-6 lg:px-24">
        <div className="max-w-lg">
          <h2 className="text-orange-500 font-bold">
            BEST DESTINATIONS AROUND THE WORLD
          </h2>
          <h1 className="hero-title text-6xl font-bold text-gray-900 mt-4">
            Travel, enjoy <br /> and live a new <br /> and full life
          </h1>
          <p className="text-gray-600 mt-4">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
              Find out more
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <i className="fas fa-play-circle text-red-500 text-2xl"></i>
              <span>Play Demo</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={logo}
            alt="Woman with backpack sitting on a suitcase holding a phone"
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};
