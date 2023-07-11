import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Stats from "./pages/statistics";
import Branding from "./pages/branding";
import Steps from "./pages/steps";
import HomeLanding from "./pages/landing";
import Testimoni from "./pages/testimoni";
import FrequentlyAskedQuestion from "./pages/faq";

import Cookies from "js-cookie";
import { config } from "../../../global/config";

const Home = (props) => {
  return (
    <Fragment>
      <Header shadow={false} />
      <Container>
        <HomeLanding />
      </Container>
      <Container style={{ marginTop: "150px" }} className="text-center">
        <Stats data={config.pages.stats} />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <Branding data={config.pages.branding} />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <Steps data={config.pages.steps} />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <Testimoni />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <FrequentlyAskedQuestion />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Home;
