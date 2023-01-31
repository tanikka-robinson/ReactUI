import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./index.scss";
import logo from "../../assets/logo.svg";
import logoSignup from "../../assets/signup-vector-top.svg";
import { InputField, TabField, Button } from "../../components";

export default () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="signup-container">
      <div className="logo-field">
        <img src={logo} alt="RBR" />
      </div>
      <div className="signup-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup" />
        <div className="signup-field-empty" />
        <div className="signup-field">
          <div className="signup-field-header">
            <div className="open-label">Open New Account</div>
            <div className="started-label">Get started below</div>
            <div className="signup-field-header-tab-container" />
          </div>
          <div className="signup-form">
            <TabField />
            <div class="input-container">
              <InputField label="Username" type="text" />
              <InputField label="Email" type="text" />
              <InputField label="Password" type="password" />
              <InputField label="Confirm Password" type="password" />
              <div className="signup-info">
                <div className="checkmark-container">
                  <input type="checkbox" />
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
              <Button title="Sign Up" />
            </div>
          </div>
        </div>
        <div className="signup-info-container">
          <div className="signup-empty-area" />
          <div className="signup-info-" />
        </div>
      </div>
    </div>
  );
};
