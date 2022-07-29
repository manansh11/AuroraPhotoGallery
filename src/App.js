import "./styles.css";
import React, { useState } from "react";
import aurora1 from "./assets/pic1.jpg";
import aurora2 from "./assets/pic2.jpg";
import aurora3 from "./assets/pic3.jpg";
import aurora4 from "./assets/pic4.jpg";
import aurora5 from "./assets/pic5.jpg";
import aurora6 from "./assets/pic6.jpg";

const images = [aurora1, aurora2, aurora3, aurora4, aurora5, aurora6];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading in images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [numberPictureLoaded, setNumberPictureLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImageIndex((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumberPictureLoaded((numLoaded) => {
      return numLoaded + 1;
    });
  };

  return (
    <section>
      <header>
        <h1>Aurora</h1>
        <h2>
          A photo library <br /> by Manansh Shukla
        </h2>
      </header>
      <figure>
        {numberPictureLoaded < images.length && (
          <Loading
            calculatedWidth={(numberPictureLoaded / images.length) * 100}
          />
        )}

        <figcaption>
          {currentImageIndex + 1} / {images.length}
        </figcaption>
        {images.map((imageUrl, index) => (
          <img
            alt=""
            key={imageUrl}
            src={imageUrl}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImageIndex === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
