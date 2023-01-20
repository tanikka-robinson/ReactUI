import { useNavigate } from "react-router";

export const TabForm = () => {
  const navigate = useNavigate();
  const loginHandle = () => {
    navigate("/login");
  };
  const singUpHandle = () => {
    navigate("/signup");
  };
  const recoveryHandle = () => {
    navigate("/recovery");
  };
  return (
    <div className="tab-form-container">
      <div className="login-button" onClick={loginHandle}>
        Log in
      </div>
      <div className="signup-button" onClick={singUpHandle}>
        Sign Up
      </div>
      <div className="recovery-button" onClick={recoveryHandle}>
        Recovery
      </div>
    </div>
  );
};
