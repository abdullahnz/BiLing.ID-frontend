import { FormGroup } from "react-bootstrap";

import { FormLabel } from "../../../components/form";
import { Button } from "../../../components/button";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

import { useState } from "react";
import {
  FormControl,
  FormPassword
} from "../../../components/form"; 

export const ProfileEditEmail = (props) => {
  const [user, setUser] = useState({
    oldEmail: props.user.email,
    email: '',
    password: '',
  }); 

  const formHandler = (event) => {
    setUser((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
      };
    });
  };

  const saveHandler = () => {
    props.updateEmailHandler(user)
    props.hide()
  }

  return (
    <>
      <ProfileGroup label="Email Lama">
        <FormControl name="email" type="text" value={user.oldEmail} disabled />
      </ProfileGroup>
      <ProfileGroup label="Email Baru">
        <FormControl
          name="email"
          type="text"
          placeholder="Masukkan email baru"
          onChange={formHandler}
        />
      </ProfileGroup>
      <ProfileGroup label="Kata Sandi">
        <FormPassword
          name="password"
          type="text"
          placeholder="Masukkan kata sandi minimal 8 karakter"
          onChange={formHandler}
        />
      </ProfileGroup>
      <div className="text-end">
        <Button
          label="Batal"
          className="bg-white border-primary text-primary me-3"
          onClick={props.hide}
        />
        <Button label="Simpan" onClick={saveHandler} />
      </div>
    </>
  );
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr).toLocaleDateString('id-ID', {
    timeZone: "asia/jakarta"
  })
  const [day, month, year] = date.split('/')
  return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const ProfileEditPassword = (props) => { 

  const [password, setPassword] = useState({
    password: '',
    password_confirmation: '',
  });

  const formHandler = (event) => {
    setPassword((password) => {
      return {
        ...password,
        [event.target.name]: event.target.value,
      };
    });
  };

  const saveHandler = () => {
    props.updatePasswordHandler(password) 
    props.hide()
  }

  return (
    <>
      <ProfileGroup label="Kata Sandi Lama">
        <FormControl
          name="password"
          type="password"
          value="**********"
          disabled
        />
      </ProfileGroup>
      <ProfileGroup label="Kata Sandi Baru">
        <FormPassword
          name="password"
          type="text"
          placeholder="Masukkan kata sandi baru minimal 8 karakter"
          onChange={formHandler}
        />
      </ProfileGroup>
      <ProfileGroup label="Konfirmasi Kata Sandi Baru">
        <FormPassword
          name="password_confirmation"
          type="text"
          placeholder="Harus sama dengan kata sandi baru"
          onChange={formHandler}
        />
      </ProfileGroup>
      <div className="text-end">
        <Button
          label="Batal"
          className="bg-white border-primary text-primary me-3"
          onClick={props.hide}

        />
        <Button label="Simpan" onClick={saveHandler} />
      </div>
    </>
  );
};


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
