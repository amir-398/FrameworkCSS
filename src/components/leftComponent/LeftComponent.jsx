import star from "../../assets/img/Star.svg";
import BirthdayEllipse from "../birthdayEllipse/BirthdayEllipse";
import TextComponent from "../textComponent/TextComponent";
import "./leftComponent.css";
export default function LeftComponent() {
  return (
    <div className="leftContainer">
      <BirthdayEllipse />
      <TextComponent text="Amir Meberbeche" style={{ fontSize: "95px" }} />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
}
