import { Row, Col, Image } from "react-bootstrap";
import { NumericFormat } from "react-number-format";

import styles from "../styles/Home.module.css";

export const StatisticCardIcon = (props) => {
  return (
    <div className={styles.statistic_icon}>
      <Image src={props.icon} className="text-primary" width={45} height={45} />
    </div>
  );
};

export const StatisticDisplayFormat = ({ count }) => {
  return (
    <h1 className="fw-bold my-4" style={{ fontSize: "64px" }}>
      <NumericFormat
        value={count}
        displayType="text"
        thousandSeparator={true}
      />
    </h1>
  );
};

export const StatisticLabel = ({ label }) => {
  return <p style={{ fontSize: "18px" }}>{label}</p>;
};

export const StatisticCard = ({ icon, count, title }) => {
  return (
    <>
      <StatisticCardIcon icon={icon} />
      <StatisticDisplayFormat count={count} />
      <StatisticLabel label={title} />
    </>
  );
};

export const StatisticWrapper = ({ children }) => {
  return <Col style={{ maxWidth: "25%" }}>{children}</Col>;
};

export const StatisticContainer = ({ children }) => {
  return <Row className="mt-5 justify-content-center">{children}</Row>;
};
 