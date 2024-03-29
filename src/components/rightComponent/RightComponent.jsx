import heart from "../../assets/img/heart.png";
import Card from "../cardComponent/Card";
import LoadingBarComponent from "../loadingBarComponent/LoadingBarComponent";
import "./rightComponent.css";
export default function RightComponent() {
  const card1Text =
    "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.";
  const card1text2 = " - Michael Jordan";
  return (
    <div className="rightContainer">
      <Card
        text={card1Text}
        text2={card1text2}
        textStyle={{ fontSize: "27px" }}
        text2Style={{ alignSelf: "flex-end", fontSize: "27px" }}
      />
      <Card
        image={heart}
        imageStyle={{
          width: "40%",
          borderRadius: "10px",
        }}
        cardStyle={{
          height: "364.88px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <LoadingBarComponent />
    </div>
  );
}
