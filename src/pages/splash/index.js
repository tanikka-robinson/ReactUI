import "./index.scss";
import logo from "../../assets/logo.svg";
import vectorTop from "../../assets/splash-vector-top.svg";
import vectorBottom from "../../assets/splash-vector-bottom.svg";

export default () => {
  return (
    <div className="splash">
      <img src={logo} alt="RBR" className="logo" />
      <img
        src={vectorBottom}
        alt="vector-bottom"
        className="splash-vector-bottom"
      />
      <img src={vectorTop} alt="vector-top" className="splash-vector-top" />
    </div>
  );
};
