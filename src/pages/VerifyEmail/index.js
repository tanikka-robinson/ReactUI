import logo from "../../assets/verify-email.svg";
import "./index.scss";
export default () => {
  return (
    <div className="verify-email-container">
      <img src={logo} alt="verify-email" className="logo" />
      <div className="verify-label">Verify your email</div>
      <div className="email-address">
        A confirmation link was sent to:<br></br>
        art@thompson.com
      </div>
      <div className="resend-email">Resend email</div>
    </div>
  );
};
