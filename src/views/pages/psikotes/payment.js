import Navbar from "../../layouts/header";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Header } from "../../components/utils";
import Footer from "../../layouts/footer";

import style from "./styles/payment.module.css";

import Gopay from "../../assets/payment-method/image 3.png";
import Dana from "../../assets/payment-method/image 4.png";
import ShoopePay from "../../assets/payment-method/image 6.png";
import Qris from "../../assets/payment-method/image 24.png";
import ExampleQR from "../../assets/img/example-qr.png";
import SuccessIcon from "../../assets/icon/success.svg";

import { useState } from "react";
import { Button } from "../../components/button";

import {
  PaymentMethodContainer,
  PaymentMethod,
  PaymentMethodItems,
  PaymentDetail,
  PaymentElement,
  PaymentDetailContainer,
  StepProgressBar,
} from "./payment.component";

const PaymentMethodList = ({ onClick }) => {
  return (
    <PaymentMethodContainer title={"Pilih metode pembayaran"}>
      <Col xs={8}>
        <PaymentMethod
          title="Transfer Bank"
          desc="Menerima pembayaran dari semua bank"
        ></PaymentMethod>
        <PaymentMethod
          title="Transfer melalui Virtual Account"
          desc="Hanya menerima pembayaran dari Bank yang sama"
        ></PaymentMethod>

        <PaymentMethod
          title="Dompet elektronik"
          desc="Gopay, Dana, ShopeePay, & QRIS"
        >
          <PaymentMethodItems
            icon={Gopay}
            text={"Bayar melalui Gopay"}
            isActive={true}
            onClick={() => alert(1)}
          />
          <PaymentMethodItems
            icon={Dana}
            text={"Bayar melalui Dana"}
            isActive={false}
            onClick={() => alert(2)}
          />
          <PaymentMethodItems
            icon={ShoopePay}
            text={"Bayar melalui ShoopePay"}
            isActive={false}
            onClick={() => alert(3)}
          />
          <PaymentMethodItems
            icon={Qris}
            text={"Bayar melalui QRIS"}
            isActive={false}
            onClick={() => alert(3)}
          />
        </PaymentMethod>

        <PaymentMethod
          title="Minimarket"
          desc="Alfamart & Indomaret"
        ></PaymentMethod>

        <PaymentMethod
          title="Kartu Kredit/Debit"
          desc="Visa & Mastercard"
        ></PaymentMethod>

        <div className="text-end">
          <Button label="Bayar Sekarang" onClick={onClick} />
        </div>
      </Col>

      <Col>
        <PaymentDetail title="Psikotes" />
      </Col>
    </PaymentMethodContainer>
  );
};

const PaymentMethodConfirm = ({ changePaymentMethod }) => {
  return (
    <PaymentMethodContainer title={"Konfirmasi metode pembayaran"}>
      <Col xs={4}>
        <PaymentDetailContainer title="Detail pembayaran">
          <PaymentElement
            title={"Kode pesanan"}
            desc={"#123456789 a/n Arla Sifhana Putri"}
          />
          <PaymentElement title={"Harga"} desc={"Rp. 50.000"} />
          <PaymentElement title={"Kode pesanan"}>
            <PaymentMethodItems icon={Gopay} />
          </PaymentElement>
          <Button label="Ubah Metode Pembayaran" onClick={changePaymentMethod} />
        </PaymentDetailContainer>
      </Col>
      <Col>
        <PaymentDetailContainer title="Batas pembayaran">
          <div className="d-flex gap-3 mb-3 mt-4">
            <h3 className={style.paymentDuration}>00</h3>
            <h3 style={{ lineHeight: "60px" }} className="fw-bold">
              :
            </h3>
            <h3 className={style.paymentDuration}>14</h3>
            <h3 style={{ lineHeight: "60px" }} className="fw-bold">
              :
            </h3>
            <h3 className={style.paymentDuration}>59</h3>
          </div>
          <p>
            Segera lakukan pembayaran. Pembayaran akan dibatalkan jika melewati
            batas waktu yang telah ditentukan
          </p>
        </PaymentDetailContainer>

        <PaymentDetailContainer title="Kode pembayaran">
          <Image src={ExampleQR} />
          <p>Scan kode QR</p>
        </PaymentDetailContainer>
      </Col>
    </PaymentMethodContainer>
  );
};

const PaymentSuccess = () => {
  return (
    <Row className="mt-5">
      <div className="text-center mb-4">
        <Image src={SuccessIcon} />
        <h1 className="mb-4">Pembayaran berhasil!</h1>
        <p className="mx-auto">
          Pembayaran telah sukses dilakukan. Kamu bisa kembali ke halaman
          psikotes atau langsung mengerjakan psikotesnya.
        </p>
      </div>
      <div className="text-center">
        <Button
          label="Kembali"
          className="me-3 text-primary bg-white border-0 shadow-1"
        />
        <Button label="Halaman Tes" />
      </div>
    </Row>
  );
};

const Payment = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar shadow={false} />

      <Container style={{ marginTop: "100px" }} className="psikotes-header">
        <Header title={"Pembayaran Psikotes"} className={"text-center mb-5"} />

        <StepProgressBar
          start={progress}
          steps={[
            "Metode pembayaran",
            "Konfirmasi pembayaran",
            "Pembayaran selesai",
          ]}
        />

        {progress === 0 && <PaymentMethodList onClick={() => setProgress(1)} />}
        {progress === 1 && <PaymentMethodConfirm changePaymentMethod={() => setProgress(0)} />}
        {progress === 2 && <PaymentSuccess />}
      </Container>
      <Container style={{ marginTop: "200px" }}>
        <Footer />
      </Container>
    </>
  );
};

export default Payment;
