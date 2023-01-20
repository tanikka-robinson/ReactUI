import { useState } from "react";
import "./index.scss";
export const InputForm = ({ label, type }) => {
  const [ispassword, setIsPassword] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    setIsPassword(!ispassword);
  };
  return (
    <div className="input-container-element">
      <div className="label">{label}</div>
      <div className="input-element">
        <input className="input" type={ispassword ? type : "text"}></input>
        {type === "password" && (
          <i
            class={toggle ? "far fa-eye-slash" : "far fa-eye"}
            id="togglePassword"
            onClick={handleToggle}
          ></i>
        )}
      </div>
    </div>
  );
};
