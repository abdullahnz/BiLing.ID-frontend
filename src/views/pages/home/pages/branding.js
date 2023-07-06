import { Col, Row, Image } from "react-bootstrap";
import { SubHeader } from "../../../components/utils";

import BrandingLeftImg from "../../../assets/img/branding-left.png"
import BrandingRightImg from "../../../assets/img/branding-right.png"

import { BrandingContainer, BrandingList, BrandingWrapper } from "./branding.component";

const Branding = ({ data }) => {
  return (
    <Row className="justify-content-between">
      <Col xs={5} className="p-0">
        <Image src={BrandingLeftImg} />
        <Image src={BrandingRightImg} className="ps-3" />
      </Col>
      <Col xs={6}>
        <SubHeader title={data.title} desc={data.description} className="text-start" />
        <BrandingContainer>
          <BrandingWrapper>
            {data.items.slice(0, data.items.length / 2).map((item, key) => {
              return <BrandingList label={item} key={key} />;
            })}
          </BrandingWrapper>
          <BrandingWrapper>
            {data.items.slice(data.items.length / 2).map((item, key) => {
              return <BrandingList label={item} key={key} />;
            })}
          </BrandingWrapper>
        </BrandingContainer>
      </Col>
    </Row>
  );
};

export default Branding;
