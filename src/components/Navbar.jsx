import propTypes from "prop-types";
import "../styles/Navbar.css";
import { BsFillImageFill } from "react-icons/bs";
const Navbar = ({ uploadImage }) => {
  return (
    <div className="navbar">
      <h1 className="heading">RGB Pallete</h1>
      <span className="uploadButton">
        <label htmlFor="file" className="uploadText">
          <BsFillImageFill className="icon" />
          Upload Image
        </label>
        <input type="file" hidden id="file" onChange={uploadImage} />
      </span>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  uploadImage: propTypes.func,
};
