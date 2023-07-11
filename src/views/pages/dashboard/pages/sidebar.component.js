import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../../assets/icon/arrow-right.svg";
import { Button } from "react-bootstrap";

import { useState, useEffect } from "react"; 


export const SidebarHeader = ({ name, email }) => {
  return (
    <>
      <p style={{ fontSize: "18px", color: "#030303" }}>Hai</p>
      <h4>{name}</h4>
      <p>{email}</p>
    </>
  );
};

export const SidebarLink = ({ to, icon, text }) => {
  let path = window.location.pathname
  path = path.split('/');
  path = path.filter(str => str);

  if (path.length === 1 && path[0] === 'dashboard') {
    path.push('profile');
  }
  path = '/' + path.join('/');
  
  return (
    <Link
      to={to}
      className="d-flex justify-content-between align-items-center py-2 text-decoration-none hover-primary"
      style={{
        lineHeight: "27px",
        color: ((path == to) ? "#2E7DF1" : "#979797")
      }}
    >
      <div className="fw-bold d-flex gap-2 align-items-center" style={{ fontSize: "24px" }}>
        {icon}
        <span style={{ fontSize: "18px" }}>
          {text}
        </span>
      </div>
      <ArrowRight size={24} />
    </Link>
  );
};

export const SidebarButton = ({ icon, text, onClick }) => {
  return (
    <Button
      className="overlay text-danger border-0 bg-transparent py-2 p-0 d-flex justify-content-between align-items-center w-100 text-decoration-none"
      style={{ lineHeight: "27px" }}
      onClick={onClick}
    >
      <div className="fw-bold d-flex gap-2 align-items-center" style={{ fontSize: "24px" }}>
        {icon}
        <span style={{ fontSize: "18px" }}>
          {text}
        </span>
      </div>
      <ArrowRight size={24} />
    </Button>
  );
};
