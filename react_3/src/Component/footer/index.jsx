export const Footer = () => {
  return (
    <div className="bg-white p-20">
      <div className="max-w-6xl mx-auto">
        {/* Container for Travello section (aligned left) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0 text-left">
            <h1 className="text-3xl font-bold text-black">
              Travello
              <span className="bg-yellow-200 rounded-full px-2 ml-1"> </span>
            </h1>
            <p className="text-gray-500 mt-2">
              Book your trip in minute, get full <br />
              Control for much longer.
            </p>
          </div>

          {/* Container for Company, Contact, and More sections (centered) */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0 mt-8 md:mt-0">
            <div>
              <h2 className="text-xl font-bold text-black">Company</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Mobile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black">Contact</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-500">
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Affilates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black">More</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-500">
                    Airlinefees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Airline
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500">
                    Low fare tips
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center text-gray-500">
          All rights reserved@jadoo.co
        </div>
      </div>
    </div>
  );
};
