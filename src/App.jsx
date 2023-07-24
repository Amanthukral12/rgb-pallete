import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import ColorThief from "colorthief";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPallete = colorThief.getPalette(img, 6);
        setUploadedImage(event.target.result);
        setColorPalette(colorPallete);
      };

      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  console.log(typeof colorPalette);

  return (
    <>
      <header>
        <Navbar uploadImage={uploadImage} />
      </header>
      <main>
        <MainBody uploadedImage={uploadedImage} colorPalette={colorPalette} />
      </main>
    </>
  );
}

export default App;
