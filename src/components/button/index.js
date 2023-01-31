import "./index.scss";
export default ({ title, onClick }) => {
  return (
    <div className="custom-button" onClick={onClick}>
      {title}
    </div>
  );
};
