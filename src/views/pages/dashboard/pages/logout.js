import { Image, Container, Row } from "react-bootstrap";

import SuccessIcon from "../../../assets/icon/success.svg";

import Navbar from "../../../layouts/header";
import Footer from "../../../layouts/footer"

const Logout = ( props ) => {
  return (
    <>
      <Navbar shadow={false} />
      <Container style={{ marginTop: "100px" }} className="psikotes-header">
        <Row className="mt-5">
          <div className="text-center mb-4">
            <Image src={SuccessIcon} />
            <h1 className="mt-5">Berhasil Keluar!</h1>
          </div>
        </Row>
      </Container>
      <Container style={{ marginTop: "200px" }}>
        <Footer />
      </Container>
    </>
  );
};

export default Logout;