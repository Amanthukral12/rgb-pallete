import propTypes from "prop-types";
import "../styles/ColorPaletteItem.css";
import { BiCopy } from "react-icons/bi";
import { useState } from "react";
const ColorPaletteItem = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);
  const copyColor = () => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <>
      <div
        className="colorItem"
        style={{ background: rgb }}
        onClick={() => {
          copyColor();
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        <div className="hexContainer">
          <span>{copied ? "Copied!" : hex}</span>
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
