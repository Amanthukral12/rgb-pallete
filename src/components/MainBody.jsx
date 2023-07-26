import "../styles/MainBody.css";
import propTypes from "prop-types";
import ColorPaletteItem from "./ColorPaletteItem";

const MainBody = ({ uploadedImage, colorPalette }) => {
  const convertToHex = (color) => {
    let hex = Number(color).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  return (
    <div className="mainBody">
      <a
        href="https://github.com/Amanthukral12/rgb-pallete.git"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        ⭐ Star on Github
      </a>
      <section className="imageContainer">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded Image" />
        ) : (
          <div>
            <h2>Image goes here</h2>
          </div>
        )}
      </section>

      {colorPalette && (
        <section>
          <div className="colors">
            {colorPalette.map((color, index) => {
              const rgb = `rgb(${color.join(",")})`;
              const hex = `#${convertToHex(color[0])}${convertToHex(
                color[1]
              )}${convertToHex(color[2])}`;
              return <ColorPaletteItem key={index} rgb={rgb} hex={hex} />;
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default MainBody;

MainBody.propTypes = {
  uploadedImage: propTypes.string,
  colorPalette: propTypes.array,
};
