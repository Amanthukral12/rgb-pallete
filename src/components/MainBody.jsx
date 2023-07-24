import "../styles/MainBody.css";
const MainBody = ({ uploadedImage, colorPalette }) => {
  return (
    <div className="mainBody">
      <button className="github">⭐ Star on Github</button>
      <section className="imageContainer">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded Image" />
        ) : (
          <div>
            <h2>Image goes here</h2>
          </div>
        )}
      </section>

      {colorPalette && <section>Color Pallete Section</section>}
    </div>
  );
};

export default MainBody;
