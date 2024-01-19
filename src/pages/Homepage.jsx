import Navbar from "../components/Navbar";
import "../styles/main.css";
import Intro from "../components/Intro";
import Shapes from "../components/Shapes";
import Footer from "../components/Footer";
import Moreinfo from "../components/Moreinfo";

import Motion from "../components/Motion";
import WorksIn from "../components/WorksIn";
import FormContact from "../components/FormContact";
import Homecards from "../components/Homecards";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Shapes />
      <Motion />
      <Intro />
      <Moreinfo />
      <WorksIn />
      <FormContact />
      <Footer />
    </div>
  );
}

export default Homepage;
