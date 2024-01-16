import Navbar from "../components/Navbar";
import "../styles/main.css";
import Intro from "../components/Intro";
import Shapes from "../components/Shapes";
import Footer from "../components/Footer";
import Moreinfo from "../components/Moreinfo";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Shapes />
      <Intro />
      <Moreinfo />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
