import "./index.css";
import logo from "../../assets/logo.svg";
import vectorBottom from "../../assets/splash-vector-bottom.svg";
import vectorTop from "../../assets/splash-vector-top.svg";
export const Splash = () => {
  return (
    <div className="splash">
      <img src={logo} alt="RBR" className="logo"></img>
      <img
        src={vectorBottom}
        alt="vector-bottom"
        className="splash-vector-bottom"
      ></img>
      <img src={vectorTop} alt="vector-top" className="splash-vector-top"></img>
    </div>
  );
};
