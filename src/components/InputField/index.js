import { useState } from "react";
import "./index.scss";
export default ({ label, type }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    setIsPassword(!isPassword);
  };
  return (
    <div className="input-container-element">
      <div className="label">{label}</div>
      <div className="input-element">
        <input className="input" type={isPassword ? type : "text"} />
        {type === "password" && (
          <i
            class={toggle ? "far fa-eye-slash" : "far fa-eye"}
            id="togglePassword"
            onClick={handleToggle}
          />
        )}
      </div>
    </div>
  );
};
