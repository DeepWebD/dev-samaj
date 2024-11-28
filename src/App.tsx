import Slider from "./components/Carousel/carousel";
import Header from "./components/Header/Header";
import AboutDevSamaj from "./components/AboutDevSamaj/AboutDevSamaj";
import ContactUs from "./components/ContactUs/ContactUs";
import './App.css';
import Footer from "./components/Footer/Footer";
import Images from "./components/Images/Images";
function App() {

  return (
    <>
      <section id="home" >
        <Header />
        <Slider />
      </section>
      <section id="devSamaj">
        <AboutDevSamaj />
      </section>
      <section id="images">
        <Images />
      </section>

      <section id="footer">
        <Footer />
      </section>
    

    </>
  );
}

export default App;
