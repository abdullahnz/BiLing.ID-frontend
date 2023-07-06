import { Col, Container, Row } from "react-bootstrap";
import { FormDefault } from "../../components/form";
import { Navigation, NavigationLink } from "../../components/navigation";
import { ChatLeftFill, BellFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-right.svg";
import { ReactComponent as User } from "../../assets/icon/user.svg";
import { ReactComponent as Note } from "../../assets/icon/note.svg";
import { ReactComponent as Calendar } from "../../assets/icon/calendar.svg";
import { ReactComponent as ClipboardTick } from "../../assets/icon/clipboard-tick.svg";
import { ReactComponent as Setting } from "../../assets/icon/setting.svg";
import { ReactComponent as Logout } from "../../assets/icon/logout.svg";

import DashboardProfile from "./pages/profile";
import DashboardSidebar from "./pages/sidebar";

import { useState } from "react";
import Footer from "../../layouts/footer";

const Dashboard = (props) => {
  document.body.style.backgroundColor = "#F5F8FA";

  const [currentData, setCurrentData] = useState({
    fullname: "Arla Sifhana Putri",
    email: "arlasifhanap@gmail.com",
    phone: "081234567890",
    dateBirth: "2003-12-31",
    gender: "Perempuan",
    password: "***********",
  });

  return (
    <>
      <Navigation {...props}>
        <NavigationLink href="#">
          <FormDefault type="text" placeholder="Cari Psikolog" />
        </NavigationLink>
        <NavigationLink href="#">
          <BellFill />
        </NavigationLink>
        <NavigationLink href="#">
          <ChatLeftFill />
        </NavigationLink>
      </Navigation>

      {/* Dashboard */}

      <Container style={{ marginTop: "50px" }}>
        <Row>
          <DashboardSidebar
            fullname={currentData.fullname}
            email={currentData.email}
          />
          <Col
            className="bg-white shadow-1"
            style={{ borderRadius: "40px", marginLeft: "50px" }}
          >
            {props.page}
          </Col>
        </Row>
      </Container>

      <div className="bg-white py-5 mt-5">
        <Container style={{ marginBottom: "-100px" }}>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
