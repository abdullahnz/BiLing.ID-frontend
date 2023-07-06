import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  GeoAltFill
} from "react-bootstrap-icons";

import PaymentImage3 from "../assets/payment-method/image 3.png"
import PaymentImage4 from "../assets/payment-method/image 4.png"
import PaymentImage6 from "../assets/payment-method/image 6.png"
import PaymentImage7 from "../assets/payment-method/image 7.png"
import PaymentImage9 from "../assets/payment-method/image 9.png"
import PaymentImage10 from "../assets/payment-method/image 10.png"
import PaymentImage11 from "../assets/payment-method/image 11.png"
import PaymentImage12 from "../assets/payment-method/image 12.png"
import PaymentImage13 from "../assets/payment-method/image 13.png"
import PaymentImage14 from "../assets/payment-method/image 14.png"
import PaymentImage16 from "../assets/payment-method/image 16.png"
import PaymentImage17 from "../assets/payment-method/image 17.png"
import PaymentImage18 from "../assets/payment-method/image 18.png"
import { BrandApp } from "../components/utils";

const FooterLists = ({ title, children }) => {
  return (
    <Col>
      <h5 className="mb-4">{title}</h5>
      {children}
    </Col>
  );
}

const FooterLink = ({ label, to }) => {
  return (
    <Link to={to} className="text-decoration-none text-dark row ms-0 my-3">{label}</Link>
  )
}

const FooterInfo = ({ text }) => {
  return (
    <p style={{ maxWidth: "315px" }} className="mt-3">
      {text}
    </p>
  )
}

const FooterCopyright = () => {
  return (
    <div className="d-flex justify-content-between">
      <p style={{fontSize: "18px"}}>&copy; BiLing.ID. All Rights Reserved</p>
      <p style={{fontSize: "18px"}}><GeoAltFill size={24} /> Bandung, Indonesia</p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <Row>
        <Col xs={4}>
          <BrandApp />
          <FooterInfo text={"Kamu mendapatkan bantuan, menjadi lebih baik, dan pantas untuk bahagia."} />
        </Col>
        <FooterLists title={"Layanan"}>
          <FooterLink to="#a" label={"Simulasi psikotes"} />
          <FooterLink to="#b" label={"Psikotes"} />
          <FooterLink to="#c" label={"Konseling"} />
        </FooterLists>

        <FooterLists title={"Pelajari"}>
          <FooterLink to="#a" label={"Panduan konseling"} />
          <FooterLink to="#b" label={"FAQ"} />
        </FooterLists>

        <FooterLists title={"Metode Pembayaran"}>
          <Image src={PaymentImage3} className="mx-2 mb-4" />
          <Image src={PaymentImage4} className="mx-2 mb-4" />
          <Image src={PaymentImage6} className="mx-2 mb-4" />
          <Image src={PaymentImage7} className="mx-2 mb-4" />
          <Image src={PaymentImage9} className="mx-2 mb-4" />
          <Image src={PaymentImage10} className="mx-2 mb-4" />
          <Image src={PaymentImage11} className="mx-2 mb-4" />
          <Image src={PaymentImage12} className="mx-2 mb-4" />
          <Image src={PaymentImage13} className="mx-2 mb-4" />
          <Image src={PaymentImage14} className="mx-2 mb-4" />
          <Image src={PaymentImage16} className="mx-2 mb-4" />
          <Image src={PaymentImage17} className="mx-2 mb-4" />
          <Image src={PaymentImage18} className="mx-2 mb-4" />
        </FooterLists>
        
      </Row>
      <Row className="my-5 pt-5">
        <FooterCopyright />
      </Row>
    </>
  );
};

export default Footer;
