import { Row, Form, Image } from "react-bootstrap";
import {
  FormDefault,
  FormButton,
  FormPassword,
  FormRedirect,
  FormGoogleButton,
  FormContainer,
} from "../../components/form";
import { BrandApp, Lines, SubHeader } from "../../components/utils";
import RegisterImage from "../../assets/img/register-image.png";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  })

  const formDataChangeHandler = (event) => { 
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  const submitLoginHandler = () => {
    alert("LOGIN")
  }

  return (
    <>
      <Row className="m-0 vh-100">
        <FormContainer className="bg-primary">
          <BrandApp color="white" />
          <Image src={RegisterImage} style={{ marginTop: "120px" }} />
        </FormContainer>
        <FormContainer>
          <SubHeader
            title="Selamat Datang di BiLing.ID"
            desc={[
              "Belum punya akun? ",
              <FormRedirect to="/register" text="Daftar Disini!" key={1} />,
            ]}
            className="text-start"
          />
          <div className="text-center">
            <FormGoogleButton label="Masuk dengan Google" />
            <Lines>atau</Lines>
          </div>
          <Form>
            <FormDefault
              name="email"
              label="Alamat Email"
              placeholder="Masukkan alamat emailmu"
              onChange={formDataChangeHandler} 
            />
            <FormPassword
              name="password"
              label="Kata Sandi"
              placeholder="Masukkan kata sandi minimal 8 karakter"
              onChange={formDataChangeHandler} 
            />
          </Form>
          <div className="mt-3 text-end">
            <FormRedirect
              to="/forgot-password"
              text="Lupa kata sandi?"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="mt-3 text-end">
            <FormButton onClick={submitLoginHandler} label="Masuk" />
          </div>
        </FormContainer>
      </Row>
    </>
  );
};

export default Login;
