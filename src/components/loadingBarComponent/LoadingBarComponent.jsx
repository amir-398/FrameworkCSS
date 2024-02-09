import "./loadingBarComponent.css";
export default function LoadingBarComponent() {
  return (
    <div className="loadingBarContainer">
      <p>01</p>
      <div className="bar">
        <div className="loadingBar"></div>
      </div>
      <p>02</p>
    </div>
  );
}
