import { Button, Row, Form, Image } from "react-bootstrap";
import {
  FormDefault,
  FormGoogleButton,
  FormPassword,
  FormRedirect,
  FormContainer,
} from "../../components/form";
import { SubHeader, Lines, BrandApp } from "../../components/utils";
import { useEffect, useState } from "react";
import RegisterImage from "../../assets/img/register-image.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: null,
    email: null,
    password: null,
    confirmPassword: null
  })
  const [acceptTerms, setAcceptTerms] = useState(false)

  const formDataChangeHandler = (event) => { 
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  const acceptTermsHandler = (event) => {
    setAcceptTerms(() => event.target.checked)
  }

  const registerSubmitHandler = () => {
    if (!acceptTerms) {
      alert("HARUS TERIMA SYARAT DAN KETENTUAN")
    } else {
      alert("REGISTER BERHASIL")
    }
  }

  // useEffect(() => {
  //   console.log(formData)
  //   console.log(acceptTerms)
  // }, [formData, acceptTerms])

  return (
    <Row className="m-0 vh-100">
      <FormContainer className="bg-primary">
        <BrandApp color="white" />
        <Image src={RegisterImage} style={{ marginTop: "120px" }} />
      </FormContainer>
      <FormContainer>
        <SubHeader
          title="Selamat Datang di BiLing.ID"
          redirectToLogin
          desc={[
            "Sudah punya akun? ",
            <FormRedirect to="/login" text="Masuk Disini!" key={1} />,
          ]}
          className="text-start"
        />
        <div className="text-center">
          <FormGoogleButton label="Buat Akun dengan Google" />
          <Lines>atau</Lines>
        </div>

        <Form>
          <FormDefault
            name="fullname"
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkapmu"
            onChange={formDataChangeHandler}
          />
          <FormDefault
            name="email"
            type="email"
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
          <FormPassword
            name="passwordConfirm"
            label="Konfirmasi Kata Sandi"
            placeholder="Harus sama dengan kata sandi"
            onChange={formDataChangeHandler}
          />
        </Form>

        <Form.Check
          name="acceptTerms"
          onChange={acceptTermsHandler}
          type="checkbox"
          label={[
            "Terima ",
            <FormRedirect to="#syarat" text="syarat" className="fw-normal" key={1} />,
            " dan ",
            <FormRedirect to="#ketentuan" text="ketentuan" key={2} />,
          ]}
        />
        <div className="mt-3 text-end">
          <Button
            variant="primary"
            className="px-5 py-3 rounded-pill fw-bold"
            style={{ fontSize: "12px" }}
            onClick={registerSubmitHandler}
          > Buat Akun </Button>
        </div>
      </FormContainer>
    </Row>
  );
};

export default Register;
