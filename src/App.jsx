import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainBody uploadedImage={uploadedImage} colorPalette={colorPalette} />
      </main>
    </>
  );
}

export default App;
