import { useState } from "react";

import "./index.scss";
import logo from "../../assets/logo.svg";
import logoSignup from "../../assets/signup-vector-top.svg";

import * as React from "react";
import * as ReactDOM from "react-dom";
import useDigitInput from "react-digit-input";

import {
  InputField,
  TabField,
  Button,
  VerifyInputField,
} from "../../components";

export default () => {
  const [value, onChange] = React.useState("");
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 4,
    value,
    onChange,
  });
  const [checked, setChecked] = useState(true);
  return (
    <div className="recovery-container">
      <div className="logo-field">
        <img src={logo} alt="RBR" />
      </div>
      <div className="recovery-field-container">
        <img src={logoSignup} alt="vector" className="logo-signup" />
        <div className="recovery-field-empty" />
        <div className="recovery-field">
          <div className="recovery-field-header">
            <div className="open-label">Enter Code</div>
            <div className="started-label">
              A 4 digit-code has been sent to ******5555
            </div>
            <div className="recovery-field-header-tab-container" />
          </div>
          <div className="recovery-form">
            <TabField />
            <div class="input-container">
              <div id="form" className="verify-input-form">
                <input
                  className="verify-input"
                  inputMode="decimal"
                  autoFocus
                  {...digits[0]}
                />
                <input
                  className="verify-input"
                  inputMode="decimal"
                  {...digits[1]}
                />
                <input
                  className="verify-input"
                  inputMode="decimal"
                  {...digits[2]}
                />
                <input
                  className="verify-input"
                  inputMode="decimal"
                  {...digits[3]}
                />
              </div>
              <div className="signup-info">
                <div style={{ color: "white" }}>
                  Didn't recieve code?{" "}
                  <a href="#" style={{ color: "#13C4D7" }}>
                    Resend
                  </a>
                </div>
              </div>
              <Button title="Next" />
            </div>
          </div>
        </div>
        <div className="recovery-info-container">
          <div className="recovery-empty-area" />
          <div className="recovery-info-" />
        </div>
      </div>
    </div>
  );
};
