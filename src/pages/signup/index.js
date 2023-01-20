import "./index.scss";
import logo from "../../assets/logo.svg";
import { TabForm } from "../../components/tabs";
import { InputForm } from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa";
import logoSignup from "../../assets/signup-vector-top.svg";
export const SignupField = () => {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div className="signup-container">
      <div className="logo-field">
        <img src={logo} alt="RBR"></img>
      </div>
      <div className="signup-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup"></img>
        <div className="signup-field-empty"></div>
        <div className="signup-field">
          <div className="signup-field-header">
            <div className="open-label">Open New Account</div>
            <div className="started-label">Get started below</div>
            <div className="signup-field-header-tab-container"></div>
          </div>
          <div className="signup-form">
            <TabForm></TabForm>
            <div class="input-container">
              <InputForm label="Username" type="text"></InputForm>
              <InputForm label="Email" type="text"></InputForm>
              <InputForm label="Password" type="password"></InputForm>
              <InputForm label="Confirm Password" type="password"></InputForm>
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
                <div style={{ color: "white" }}>
                  by continuing you are agreeing to RBR<br></br>
                  <a href="#" style={{ color: "#13C4D7" }}>
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#" style={{ color: "#13C4D7" }}>
                    Privacy Policy
                  </a>
                </div>
              </div>
              <Button title="Sign Up"></Button>
            </div>
          </div>
        </div>
        <div className="signup-info-container">
          <div className="signup-empty-area"></div>
          <div className="signup-info-"></div>
        </div>
      </div>
    </div>
  );
};
