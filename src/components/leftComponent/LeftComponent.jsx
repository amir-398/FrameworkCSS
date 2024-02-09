import BirthdayEllipse from "../birthdayEllipse/BirthdayEllipse";
import TextComponent from "../textComponent/TextComponent";
import "./leftComponent.css";
export default function LeftComponent() {
  return (
    <div className="leftContainer">
      <BirthdayEllipse />
      <TextComponent text="Amir Meberbeche" style={{ fontSize: "95px" }} />
    </div>
  );
}
