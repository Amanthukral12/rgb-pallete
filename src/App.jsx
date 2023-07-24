import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainBody />
      </main>
    </>
  );
}

export default App;
