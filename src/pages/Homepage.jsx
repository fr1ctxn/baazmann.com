import Navbar from "../components/Navbar";
import "../styles/main.css";
import Intro from "../components/Intro";
import Shapes from "../components/Shapes";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Shapes />
      <Intro />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
