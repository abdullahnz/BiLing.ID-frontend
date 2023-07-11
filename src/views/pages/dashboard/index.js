import { Col, Container, Row } from "react-bootstrap";
import { FormControl } from "../../components/form";
import { Navigation, NavigationLink } from "../../components/navigation";
import { ChatLeftFill, BellFill } from "react-bootstrap-icons";
import DashboardSidebar from "./pages/sidebar";
import Footer from "../../layouts/footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { formatDate } from "./pages/profile.component";
import { toast } from "react-toastify";
import { updateEmail, updatePassword, updateUser } from "../../../services/api/auth";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const searchHandler = (event) => {
    console.log("Search: " + event.target.value);
  }

  const parseUserFromCookies = () => {
    return JSON.parse(Cookies.get('user') || "false" );
  }

  const [user, setUser] = useState({});

  const getUserData = () => {
    const user = parseUserFromCookies();
    if (!user) {
      return navigate("/login");
    }
    setUser(() => {
      return {
        ...user,
        date_of_birth: formatDate(user.date_of_birth)
      }
    });
  }

  useEffect(() => {
    getUserData();
  }, [])

  const updateProfileHandler = async (formData) => {
    const response = await updateUser(formData);
    if (response.errors || response.status === "error") {
      toast.warning(response.message)
      return false
    }
    getUserData();
    toast.success(response.data.message)
    return true
  };

  const updateEmailHandler = async (formData) => {
    const response = await updateEmail(formData);
    console.log(response)
    if (response.errors || response.status === "error") {
      toast.warning(response.message)
      return false
    }
    getUserData();
    toast.success(response.data.message)
    return true
  }

  const updatePasswordHandler = async (formData) => {
    const response = await updatePassword(formData);
    if (response.errors || response.status === "error") {
      toast.warning(response.message)
      return false
    }
    getUserData();

    console.log(response)
    toast.success(response.data.message)
    return true
  }

  return (
    <div style={{backgroundColor: "#F5F8FA"}}>
      <Navigation {...props}>
        <NavigationLink href="#">
          <FormControl name="search" onChange={searchHandler} type="text" placeholder="Cari Psikolog" className={"m-0 p-4 rounded-pill"} />
        </NavigationLink>
        <NavigationLink href="#">
          <BellFill size={24} />
        </NavigationLink>
        <NavigationLink href="#">
          <ChatLeftFill size={20} />
        </NavigationLink>
      </Navigation>

      {/* Dashboard */}

      <Container style={{ marginTop: "50px" }}>
        <Row>
          <DashboardSidebar user={user} />
          <Col
            className="bg-white shadow-1"
            style={{ borderRadius: "40px", marginLeft: "50px" }}
          >
            <props.page 
              user={user} 
              updateProfileHandler={updateProfileHandler} 
              updateEmailHandler={updateEmailHandler}
              updatePasswordHandler={updatePasswordHandler}
            />
          </Col>
        </Row>
      </Container>

      <div className="bg-white py-5 mt-5">
        <Container style={{ marginBottom: "-100px" }}>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
