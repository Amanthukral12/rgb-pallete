import propTypes from "prop-types";
import "../styles/ColorPaletteItem.css";
import { BiCopy } from "react-icons/bi";
import { useState } from "react";
const ColorPaletteItem = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);
  const copyColor = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };
  return (
    <>
      <div className="colorItem" style={{ background: rgb }}>
        <div
          className="hexContainer"
          onClick={(e) => {
            copyColor(e);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
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
