import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../../assets/icon/arrow-right.svg";

export const SidebarHeader = ({ name, email }) => {
  return (
    <>
      <p style={{ fontSize: "18px", color: "#030303" }}>Hai</p>
      <h4>{name}</h4>
      <p>{email}</p>
    </>
  );
};

export const SidebarLink = ({ to, icon, text, active }) => {
  return (
    <Link
      to={to}
      className="d-flex justify-content-between align-items-center my-3 text-decoration-none"
      style={{
        lineHeight: "27px",
        color:
          active !== undefined ? ((active == to) ? "#2E7DF1" : "#979797") : "#FF4444",
      }}
    >
      <div className="fw-bold" style={{ fontSize: "24px" }}>
        {icon}
        <span className="ms-2" style={{ fontSize: "18px" }}>
          {text}
        </span>
      </div>
      <ArrowRight size={24} />
    </Link>
  );
};
