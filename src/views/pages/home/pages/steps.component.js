import { Col, Row, Card } from "react-bootstrap"; 
import styles from "../styles/Home.module.css"

export const StepListIcon = ({ id }) => {
  return (
    <div className={`mt-1 mb-4 text-primary fs-4 ${styles.step_list_icon}`}>{id}</div>
  );
};

export const StepListTitle = ({ title }) => {
  return (
    <h4 className="mb-3">{title}</h4>
  )
}

export const StepListDescription = ({ desc }) => {
  return (
    <p className={styles.step_list_desc}>{desc}</p>
  )
}

export const StepListContainer = ({ children }) => {
  return (
    <Card
        className="rounded-0 rounded-bottom-5 shadow-sm mb-5 px-3 py-3"
        style={{
          border: "none",
          borderTop: "10px solid #2E7DF1",
        }}
      >{ children }</Card>
  )
}

export const StepList = (props) => {
  return (
    <Col xs={4}>
      <StepListContainer>
        <StepListIcon id={props.id} />
        <StepListTitle title={props.title} />
        <StepListDescription desc={props.desc} />
      </StepListContainer>
    </Col>
  );
};

export const ListsContainer = ({ children }) => {
  return <Row className="mt-5 justify-content-center">{children}</Row>;
};