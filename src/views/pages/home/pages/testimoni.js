import { Col, Row } from "react-bootstrap";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import { useRef } from "react";
import { SubHeader } from "../../../components/utils";
import styles from "../styles/Home.module.css";

import { TestimoniContainer, TestimoniCard } from "./testimoni.component";

const Testimoni = () => {
  const horizontalScrollRef = useRef(0);

  const scroll = (offset) => {
    horizontalScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div id="testimoni">
      <TestimoniContainer scrollRef={horizontalScrollRef}>
        <Col xs={4}>
          <SubHeader
            title={"Cerita dari mereka yang telah konseling"}
            desc={
              "Cerita inspiratif dari para pengguna layanan kami yang sudah merasakan manfaatnya"
            }
            className={styles.testimoni_header}
          />
        </Col>
        <Col>
          <TestimoniCard
            name={"Ucep Surender"}
            age={20}
            img={"/assets/img/ucep.png"}
            text={
              "Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya. Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil."
            }
          />
        </Col>
        <Col>
          <TestimoniCard
            name={"Ucep Surender"}
            age={20}
            img={"/assets/img/ucep.png"}
            text={
              "Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya. Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil."
            }
          />
        </Col>
        <Col>
          <TestimoniCard
            name={"Ucep Surender"}
            age={20}
            img={"/assets/img/ucep.png"}
            text={
              "Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya. Lakukan simulasi tes psikologi terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil."
            }
          />
        </Col>
      </TestimoniContainer>

      <Row>
        <div className={`text-center ${styles.testimoni_scroll_icon}`}>
          <CaretLeftFill onClick={() => scroll(-300)} />
          <CaretRightFill onClick={() => scroll(300)} />
        </div>
      </Row>
    </div>
  );
};

export default Testimoni;
