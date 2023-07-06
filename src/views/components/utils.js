import { Link } from "react-router-dom";
import { config } from "../../global/config";

export const BrandApp = ({ color }) => {
  return (
    <Link
      to="/"
      className={`text-decoration-none h2 text-${
        color !== undefined ? color : "primary"
      }`}
    >{config.app.name}</Link>
  );
};


export const Header = (props) => {
  return (
    <div className={props.className}>
      <h1 className="fw-bold">{props.title}</h1>
      <p className="text-grey">{props.description}</p>
    </div>
  );
};

export const SubHeader = ({ title, desc, className = "text-center" }) => {
  return (
    <div className={className}>
      <h2 className="mb-4">{title}</h2>
      <p className="mb-3">{desc}</p>
    </div>
  );
};

export const Lines = ({ children }) => {
  return <div className="centered-line my-4">{children}</div>;
};
