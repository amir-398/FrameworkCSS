import LeftComponent from "../components/leftComponent/LeftComponent";
import RightComponent from "../components/rightComponent/RightComponent";
import "./home.css";
export default function Home() {
  return (
    <div className="homeContainer">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}
