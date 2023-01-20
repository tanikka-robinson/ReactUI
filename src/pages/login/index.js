import "./index.scss";
import logo from "../../assets/logo.svg";
import { TabForm } from "../../components/tabs";
import { InputForm } from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa";
import logoSignup from "../../assets/signup-vector-top.svg";
export const LoginField = () => {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div className="login-container">
      <div className="logo-field">
        <img src={logo} alt="RBR"></img>
      </div>
      <div className="login-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup"></img>
        <div className="login-field-empty"></div>
        <div className="login-field">
          <div className="login-field-header">
            <div className="open-label">Log In</div>
            <div className="started-label">Please login to continue</div>
            <div className="login-field-header-tab-container"></div>
          </div>
          <div className="login-form">
            <TabForm></TabForm>
            <div class="input-container">
              <InputForm label="Username" type="text"></InputForm>
              <InputForm label="Password" type="password"></InputForm>
              <div className="signup-info">
                <div className="checkmark-container">
                  <input type="checkbox"></input>
                  <span
                    className="checkmark"
                    onClick={() => setChecked(!checked)}
                  >
                    {checked && <FaCheck style={{ color: "white" }} />}
                  </span>
                </div>
                <div style={{ color: "white" }}>Remember me</div>
              </div>
              <Button title="Log In"></Button>
            </div>
          </div>
        </div>
        <div className="login-info-container">
          <div className="login-empty-area"></div>
          <div className="login-info-"></div>
        </div>
      </div>
    </div>
  );
};
