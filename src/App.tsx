import Slider from "./components/Carousel/carousel";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <>
      <section id="home" style={{ position: "relative" }}>
        <Header />
        <Slider />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
    </>
  );
}

export default App;
