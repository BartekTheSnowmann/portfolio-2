import { useState } from "react";
import {
  Home,
  Navbar,
  Skills,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from "./components/index";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="text-white bg-deep-blue font-opensans">
      <Navigation
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Skills selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Projects selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Testimonials
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Contact selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
