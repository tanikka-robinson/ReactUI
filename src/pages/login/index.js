import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./index.scss";
import logo from "../../assets/logo.svg";
import logoSignup from "../../assets/signup-vector-top.svg";
import { InputField, TabField, Button } from "../../components";

export default () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="login-container">
      <div className="logo-field">
        <img src={logo} alt="RBR" />
      </div>
      <div className="login-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup" />
        <div className="login-field-empty" />
        <div className="login-field">
          <div className="login-field-header">
            <div className="open-label">Log In</div>
            <div className="started-label">Please login to continue</div>
            <div className="login-field-header-tab-container" />
          </div>
          <div className="login-form">
            <TabField />
            <div class="input-container">
              <InputField label="Username" type="text" />
              <InputField label="Password" type="password" />
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
                <div style={{ color: "white" }}>Remember me</div>
              </div>
              <Button title="Log In" />
            </div>
          </div>
        </div>
        <div className="login-info-container">
          <div className="login-empty-area" />
          <div className="login-info-" />
        </div>
      </div>
    </div>
  );
};
