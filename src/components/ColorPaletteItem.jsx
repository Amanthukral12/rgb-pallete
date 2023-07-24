import propTypes from "prop-types";
import "../styles/ColorPaletteItem.css";
import { BiCopy } from "react-icons/bi";
const ColorPaletteItem = ({ rgb, hex }) => {
  return (
    <>
      <div className="colorItem" style={{ background: rgb }}>
        <div className="hexContainer">
          <span>{hex}</span>
          <BiCopy className="icon" />
        </div>
      </div>
    </>
  );
};

export default ColorPaletteItem;

ColorPaletteItem.propTypes = {
  rgb: propTypes.string,
  hex: propTypes.string,
};
