import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHexagonExclamation } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Reactlogo } from "../../assets/hexagon-exclamation.svg";
import "./index.scss";
export default ({ label, type, onChange, isValid }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    setIsPassword(!isPassword);
  };
  return (
    <div
      className="input-container-element"
      style={{
        border: !isValid
          ? "1px solid #EB5757"
          : "1px solid rgba(255, 255, 255, 0.4)",
      }}
    >
      <div className="label">{label}</div>
      <div className="input-element">
        <input
          className="input"
          type={isPassword ? type : "text"}
          onChange={onChange}
        />

        {type === "password" && (
          <i
            class={toggle ? "far fa-eye-slash" : "far fa-eye"}
            id="togglePassword"
            onClick={handleToggle}
          />
        )}
        {!isValid && <Reactlogo />}
      </div>
    </div>
  );
};
