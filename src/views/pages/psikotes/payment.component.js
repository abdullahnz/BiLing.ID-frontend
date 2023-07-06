import { Col, Row, Image, Form } from "react-bootstrap"; 

import style from "./styles/payment.module.css";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
 
import { useState } from "react"; 
import { FormButton, FormDefault } from "../../components/form";

export const StepProgressBar = ({ start = 0, steps }) => {
  return (
    <div className={style.stepLine}>
      {steps.map((step, key) => {
        return (
          <div
            key={key}
            className={key <= start ? style.stepBarActive : style.stepBar}
          >
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export const PaymentMethodItems = ({ icon, text, isActive, onClick }) => {
  return (
    <Col xs={3} className={isActive && "fw-bold"} onClick={onClick}>
      <div
        className={
          isActive ? style.paymentMethodItemActive : style.paymentMethodItem
        }
      >
        <Image src={icon} height={30} />
      </div>
      <div className={style.paymentMethodInfo}>{text}</div>
    </Col>
  );
};

export const PaymentMethod = ({ title, desc, children }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div className={style.paymentMethod} onClick={handleClick}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{title}</h5>
          <span>{desc}</span>
        </div>
        {showItems ? <CaretUpFill /> : <CaretDownFill />}
      </div>
      <Row className={`mt-5 ${!showItems && "d-none"}`}>{children}</Row>
    </div>
  );
};

export const PaymentDetailContainer = ({ title, children }) => {
  return (
    <div className={style.paymentDetail}>
      <h4 className="mb-4">{title}</h4>
      {children}
    </div>
  );
};

export const PaymentDetail = (props) => {
  return (
    <PaymentDetailContainer title={props.title}>
      <div className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>Rp. 50.000</span>
      </div>
      <hr style={{ background: "#EEE", color: "#eee", height: "1px" }} />
      <div className="d-flex justify-content-between mb-5">
        <span>Total pembayaran</span>
        <span className="fw-bold text-primary">Rp. 50.000</span>
      </div>
      <p>Masukkan Kode Promo untuk mendapatkan potongan harga</p>
      <Form className="text-end">
        <FormDefault placeholder={"Kode promo"} name={"promo"} />
        <FormButton label={"Gunakan"} style={{ fontSize: "16px" }} />
      </Form>
    </PaymentDetailContainer>
  );
};

export const PaymentElement = ({ title, desc, children }) => {
  return (
    <>
      <h5>{title}</h5>
      {desc && <p>{desc}</p>}
      {children}
    </>
  );
};

export const PaymentMethodContainer = ({ title, children }) => {
  return (
    <Row>
      <h4 className="mt-5 mb-4">{title}</h4>
      { children }
    </Row>
  )
}
 
