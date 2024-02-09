import TextComponent from "../textComponent/TextComponent";
import "./card.css";
export default function Card() {
  return (
    <div className="card">
      <div className="cardBackground"></div>
      <TextComponent text="I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed." />
    </div>
  );
}
