import "../aboutme.css";
import Datas from "../data.json";
import maria from "../resources/maria.JPG";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutMe() {
  const title = Datas.pages.page2.content.title;
  //console.log(Datas.pages.page2.content.goodPoints);
  return (
    <div className="about-me">
      <Navbar />
      <div className="container">
        <div className="image">
          <img className="maria-d" src={maria} alt="draw of maria" />
        </div>
        <div className="info">
          <div className="text">
            <h3 className="text-title">{title}</h3>
            <Welcome />
          </div>
          <GoodPoints />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Welcome() {
  const text = Datas.pages.page2.content.text;
  return (
    <div className="p">
      {text.map((element, index) => (
        <p key={index} className="p">
          {element}
        </p>
      ))}
    </div>
  );
}

function GoodPoints() {
  const goodPoints = Datas.pages.page2.content.goodPoints;

  return (
    <>
      <div className="goodpoints">
        {goodPoints.map((goodPoint, index) => (
          <p key={index} className="goodPoint">
            {goodPoint}
          </p>
        ))}
      </div>
    </>
  );
}
