import "../cv.css";
import Datas from "../data.json";
export default function Skills() {
  const skills = Datas.pages.page3.content.skills;
  return (
    <div className="skillbox">
      {skills.map((skill) => {
        return (
          <div style={{ perspective: "1000px" }} className="flip-card">
            <div
              style={{ verticalAlign: "middle" }}
              className="skillboxrepeat flip-card-inner"
            >
              <div className="flip-card-front">
                <h3 style={{ fontSize: "1.5rem" }} className="skillname">
                  {skill.name}
                </h3>
              </div>
              <div
                style={{ display: "flex" }}
                className="listskills flip-card-back"
              >
                <ul style={{ listStyle: "none" }}>
                  {skill.which.map((eachwhich, index) => (
                    <li
                      style={{ fontStyle: "italic" }}
                      className="skilldoes"
                      key={index}
                    >
                      {eachwhich}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
