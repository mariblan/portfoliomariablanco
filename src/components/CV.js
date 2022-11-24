import "../cv.css";
import Datas from "../data.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./skillsmap";

export default function CV(props) {
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
          <button style={{ fontSize: "2rem" }} className="downloadbtn">
            Download
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
