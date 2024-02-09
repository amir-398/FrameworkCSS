import TextComponent from "../textComponent/TextComponent";
import "./header.css";
export default function Header() {
  const textStyle = {
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: "48px",
    letterSpacing: "0.045em",
    textAlign: "left",
  };
  return (
    <div className="header">
      <TextComponent text="CITATION ET ANNIVERSAIRES" style={textStyle} />
      <TextComponent text="MERCREDI 08 MARS 2023" style={textStyle} />
    </div>
  );
}
