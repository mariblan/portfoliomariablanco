import Datas from "../data.json";
import "../projects.css";
export default function FocusPoints() {
  const focusPoints = Datas.pages.page4.content.focusPoints;
  return (
    <div className="focuspointscnt">
      <ul className="listfocuspoints">
        {focusPoints.map((point, index) => (
          <li className="focuspoint" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
