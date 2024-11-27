import Slider from "./components/Carousel/carousel";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import './App.css';
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <section id="home" style={{ position: "relative" }}>
        <Header />
        <Slider />
      </section>
      <section id="test">
        <AboutUs />
      </section>
      <section id="aboutDevSamaj">
        <ContactUs />
      </section>
      <section id="contact">
        <Footer />
      </section>

    </>
  );
}

export default App;
