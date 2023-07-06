import { Image, Col, Row } from "react-bootstrap";

import { Header } from "../../../components/utils";
import { Button } from "../../../components/button";

import { useNavigate } from "react-router-dom";

import style from "../styles/Home.module.css"
import { config } from "../../../../global/config"

const HomeLanding = () => {
  const navigate = useNavigate();
  const redirectToPsikotes = () => navigate("/psikotes");

  return (
    <Row>
      <Col className="my-5">
        <Header title={config.pages.landing.title} description={config.pages.landing.description} className={style.headerLanding} />
        <Button label={"Simulasikan Psikotes"} onClick={redirectToPsikotes} />
      </Col>
      <Col lg={3} className="position-relative d-flex mt-5">
        <Image src={"/assets/img/home-back.png"} width={342} height={540} />
        <Image src={"/assets/img/home-front.png"} width={350} height={225} className={style.absolute_image} />
      </Col>
    </Row>
  );
};

export default HomeLanding;
