import { Row, Image, Card } from "react-bootstrap";

export const TestimoniCardText = ({ text }) => {
  return (
    <Card.Body>
      <Card.Text
        style={{
          lineHeight: "35px",
        }}
      >
        {text}
      </Card.Text>
    </Card.Body>
  );
};

export const TestimoniCardProfile = ({ name, age, img }) => {
  return (
    <Card.Body className="d-flex align-items-center gap-3">
      <Image src={img} />
      <div>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text>{age} tahun</Card.Text>
      </div>
    </Card.Body>
  );
};

export const TestimoniCardContainer = ({ children }) => {
  return (
    <Card
      className="rounded-5 position-relative p-3"
      style={{
        width: "475px",
        height: "345px",
      }}
    >
      {children}
    </Card>
  );
};

export const TestimoniCard = (props) => {
  return (
    <TestimoniCardContainer>
      <TestimoniCardText text={props.text} />
      <TestimoniCardProfile name={props.name} age={props.age} img={props.img} />
    </TestimoniCardContainer>
  );
};

export const TestimoniContainer = ({ children, scrollRef }) => {
  return (
    <Row
      className="mb-3 flex-nowrap align-items-center overflow-hidden"
      ref={scrollRef}
      style={{
        transition: "width 0.6s ease",
      }}
    >
      {children}
    </Row>
  );
};
