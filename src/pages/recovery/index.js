import "./index.scss";
import logo from "../../assets/logo.svg";
import { TabForm } from "../../components/tabs";
import { InputForm } from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa";
import logoSignup from "../../assets/signup-vector-top.svg";
export const RecoveryField = () => {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div className="recovery-container">
      <div className="logo-field">
        <img src={logo} alt="RBR"></img>
      </div>
      <div className="recovery-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup"></img>
        <div className="recovery-field-empty"></div>
        <div className="recovery-field">
          <div className="recovery-field-header">
            <div className="open-label">Enter Code</div>
            <div className="started-label">
              A 4 digit-code has been sent to ******5555
            </div>
            <div className="recovery-field-header-tab-container"></div>
          </div>
          <div className="recovery-form">
            <TabForm></TabForm>
            <div class="input-container">
              <InputForm label="Username" type="text"></InputForm>
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
        <div className="recovery-info-container">
          <div className="recovery-empty-area"></div>
          <div className="recovery-info-"></div>
        </div>
      </div>
    </div>
  );
};
