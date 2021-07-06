import Navbar from "../Navbar";
import Header from "../Header";
import Services from "../Services";
import AboutUs from "../AboutUs";
import OurBarbers from "../OurBarbers";
import Appointments from "../Appointments";
import Footer from "../Footer";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ScrollAnimation
        duration={1}
        animateIn="bounceInLeft"
        animateOut="bounceOutRight"
      >
        <Services />
      </ScrollAnimation>
      <ScrollAnimation
        duration={1}
        animateIn="bounceInUp"
        animateOut="bounceOutRight"
      >
        <AboutUs />
      </ScrollAnimation>
      <ScrollAnimation duration={1} animateIn="bounceInRight" animateOut="">
        <OurBarbers />
      </ScrollAnimation>
      <ScrollAnimation
        duration={1}
        animateIn="bounceInUp"
        animateOut="bounceOutLeft"
      >
        <Appointments />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default App;
