import Slider from "./components/Carousel/carousel";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { useState } from "react";
import './App.css';
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
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

      <section>
        <div className="App">
          <button onClick={showModal}>Show Modal</button>
          {isModalVisible && (
            <div className="modal-backdrop" onClick={hideModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>Modal Title</h2>
                <p>This is the modal content.</p>
                <button onClick={hideModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
