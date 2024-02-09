import Svgtext from "../../assets/img/Group.svg";
import "./birthdayEllipse.css";
export default function BirthdayEllipse() {
  return (
    <div className="birthdayEllipseContainer">
      <div className="ellipse">
        <img src={Svgtext} alt="Svgtext" />
      </div>
    </div>
  );
}
