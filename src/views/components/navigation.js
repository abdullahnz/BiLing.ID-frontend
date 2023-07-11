import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import { BrandApp } from "./utils";

export const Navigation = ({ children, shadow = true }) => {
  return (
    <Navbar
      expand="lg"
      style={{ height: "185px" }}
      className={`bg-white ${shadow && "shadow-1"} `}
    >
      <Container>
        <BrandApp />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center text-dark">{children}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const NavigationDropdown = ({ title, children }) => {
  return (
    <NavDropdown
      className="mx-3 text-black"
      title={title}
    >
      {children}
    </NavDropdown>
  );
};

export const NavigationDropdownItem = ({ href, text }) => {
  return <NavDropdown.Item href={href}>{text}</NavDropdown.Item>;
};

export const NavigationLink = ({ href, children }) => {
  return (
    <Nav.Link className="mx-3 text-black d-flex justify-content-center gap-2" href={href}>
      {children}
    </Nav.Link>
  );
};
