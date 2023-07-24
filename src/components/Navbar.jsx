import "../styles/Navbar.css";
BsFillImageFill;
import { BsFillImageFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="heading">RGB Pallete</h1>
      <span className="uploadButton">
        <label htmlFor="file" className="uploadText">
          <BsFillImageFill className="icon" />
          Upload Image
        </label>
        <input type="file" hidden id="file" />
      </span>
    </div>
  );
};

export default Navbar;
