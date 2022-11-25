import "../cv.css";
import Datas from "../data.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./skillsmap";

export default function CV(props) {
  const downloadFile = () => {
    // using Java Script method to get PDF file
    fetch("CV-maria-blanco.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-maria-blanco.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="cvbox">
      <Navbar />
      <div className="cv">
        <h2 className="titlecv">{Datas.pages.page3.title}</h2>
        <div id="skillswrap">
          <Skills key={props.key} />
        </div>
        <div style={{ display: "flex" }} className="cvdownload">
          <h4 className="downloadelement" style={{ fontSize: "1.6rem" }}>
            Have a look at my CV!
          </h4>
          <button
            value="download"
            onClick={downloadFile}
            style={{ fontSize: "2rem" }}
            className="downloadbtn"
          >
            Download
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
