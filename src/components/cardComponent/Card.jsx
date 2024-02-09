import TextComponent from "../textComponent/TextComponent";
import "./card.css";
export default function Card(props) {
  const { text, text2, image, textStyle, text2Style, imageStyle, cardStyle } =
    props;
  return (
    <div className="card" style={cardStyle}>
      <div className="cardBackground"></div>
      {text && <TextComponent text={text} style={textStyle} />}
      {text2 && <TextComponent text={text2} style={text2Style} />}
      {image && <img src={image} alt="image" style={imageStyle} />}
    </div>
  );
}
