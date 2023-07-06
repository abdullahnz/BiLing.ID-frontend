import { FormGroup } from "react-bootstrap";

import { FormLabel } from "../../../components/form";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

import { useState } from "react";

export const ProfileAddition = ({ children }) => {
  return <div className="my-5">{children}</div>;
};

export const ProfileAdditionDropdown = ({ label, status, children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center rounded-pill py-3 px-4 my-4"
        style={{ cursor: "pointer", backgroundColor: "#FCFCFC" }}
        onClick={handleShow}
      >
        <div className="fw-bold" style={{ fontSize: "18px" }}>
          {label}
        </div>
        <div className="d-flex align-items-center">
          <div
            className="px-4 py-2 rounded-pill fw-bold mx-2"
            style={{
              fontSize: "14px",
              backgroundColor: "#FFEFEF",
              color: "#F44",
            }}
          >
            {status}
          </div>
          {show ? (
            <CaretUpFill size={20} className="mx-2" />
          ) : (
            <CaretDownFill size={20} className="mx-2" />
          )}
        </div>
      </div>
      {show && children}
    </>
  );
};

export const ProfileGroup = ({ label, children }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <FormGroup className="mb-3">
        <FormLabel>{label}</FormLabel>
        {children}
      </FormGroup>
    </div>
  );
};
