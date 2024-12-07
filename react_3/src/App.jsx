import { Navbar } from "./Component/navbar";
import { Konten } from "./Component/konten";
import { Konten3 } from "./Component/konten 3";
import { Konten2 } from "./Component/konten2";
import { Footer } from "./Component/footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Konten />
      <Konten3 />
      <Konten2 />
      <Footer />
    </div>
  );
};
