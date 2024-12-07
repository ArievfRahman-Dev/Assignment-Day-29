import logo from "./../../assets/k1.png";
import logo1 from "./../../assets/k2.png";
import logo2 from "./../../assets/k3.png";
import logo3 from "./../../assets/w4.png";
import logo4 from "./../../assets/w3.png";
import "./style.css";
export const Konten2 = () => {
  return (
    <div class="scroll-container">
      <div class="scroll-wrapper">
        <img src={logo} alt="Axon Airlines logo" class="h-12 md:h-16 lg:h-20" />
        <img src={logo1} alt="Jetstar logo" class="h-12 md:h-16 lg:h-20" />
        <div class="bg-white shadow-lg rounded-lg p-2">
          <img src={logo2} alt="Expedia logo" class="h-12 md:h-16 lg:h-20" />
        </div>
        <img src={logo3} alt="Qantas logo" class="h-12 md:h-16 lg:h-20" />
        <img src={logo4} alt="Alitalia logo" class="h-12 md:h-16 lg:h-20" />

        <img src={logo} alt="Axon Airlines logo" class="h-12 md:h-16 lg:h-20" />
        <img src={logo1} alt="Jetstar logo" class="h-12 md:h-16 lg:h-20" />
        <div class="bg-white shadow-lg rounded-lg p-2">
          <img src={logo2} alt="Expedia logo" class="h-12 md:h-16 lg:h-20" />
        </div>
        <img src={logo3} alt="Qantas logo" class="h-12 md:h-16 lg:h-20" />
        <img src={logo4} alt="Alitalia logo" class="h-12 md:h-16 lg:h-20" />
      </div>
    </div>
  );
};
