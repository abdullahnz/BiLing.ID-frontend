import { Row, Form, Image } from "react-bootstrap";
import { SubHeader, BrandApp } from "../../components/utils"; 
import {
    FormDefault,
    FormButton, 
    FormContainer,
  } from "../../components/form";
import { useEffect, useState } from "react";
import RegisterImage from "../../assets/img/register-image.png";


const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const emailChangeHandler = (event) => {
    setEmail(() => event.target.value )
  }

  const submitEmailHandler = () => {
    alert("SUBMIT EMAIL: " + email)
  }

  // useEffect(() => {
  //   alert("SUBMIT EMAIL:" + email)
  // }, [email])

  return (
    <>
      <Row className="m-0 vh-100">
        <FormContainer className="bg-primary">
          <BrandApp color="white" />
          <Image src={RegisterImage} style={{ marginTop: "120px" }} />
        </FormContainer>
        <FormContainer>
          <SubHeader
            title="Lupa Kata Sandi?" 
            desc="Masukkan alamat email yang terkait dengan akunmu"
            className="text-start"
          />
          
          <Form>
            <FormDefault
              name="email"
              label="Alamat Email"
              placeholder="Masukkan alamat emailmu"
              onChange={emailChangeHandler} 
            />
          </Form>
          <div className="mt-3 text-end">
            <FormButton onClick={submitEmailHandler} label="Kirim" />
          </div>
        </FormContainer>
      </Row>
    </>
  );
};

export default ForgotPassword;
