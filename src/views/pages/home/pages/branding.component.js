import { Col, Row } from "react-bootstrap"
import { CheckCircleFill } from "react-bootstrap-icons";

export const BrandingContainer = ({ children }) => {
  return <Row>{children}</Row>;
};

export const BrandingWrapper = ({ children }) => {
  return <Col>{children}</Col>;
};

export const BrandingList = ({ label }) => {
  return (
    <div className="mb-3">
      <CheckCircleFill className="text-primary" size={20} />
      <span className="ms-2">{label}</span>
    </div>
  );
};
