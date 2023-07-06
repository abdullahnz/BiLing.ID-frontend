import { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  Image,
  Col,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";


export const FormContainer = ({ className, children }) => {
  const containerStyles = {
    paddingTop: "70px",
    maxWidth: "556px",
  };
  return (
    <Col className={className}>
      <Container style={containerStyles}>{children}</Container>
    </Col>
  );
};

export const FormRedirect = ({ to, className, style, text, id }) => {
  return (
    <Link
      key={id}
      to={to}
      className={`text-decoration-none text-primary ${className}`}
      style={style}
    >
      {text}
    </Link>
  );
};

export const FormButton = (props) => { 
  return (
    <Button
      variant="primary"
      className="px-5 py-3 rounded-pill fw-bold"
      style={{ fontSize: "12px" }}
      {...props}
    >
      {props.label}
    </Button>
  );
};

export const FormLabel = ({ children, className }) => {
  return (
    <Form.Label className={`fw-bold mb-3 ${className}`} style={{ fontSize: "18px" }}>
      {children}
    </Form.Label>
  );
}

export const FormInfo = ({ children, className }) => {
  return (
    <p className={`mb-3 ${className}`}>{children}</p>
  )
}

export const FormControl = ({ name, type, value, onChange, style = {}, placeholder = "" }) => {
  return (
    <Form.Control
      className="px-4 py-3 rounded-pill"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value} 
      style={style}
      onChange={onChange}
    />
  )
}

export const FormDefault = ({ name, label, help, placeholder, onChange, type = "text", className = "" }) => {
  return (
    <Form.Group className="mb-3">
      { label && <FormLabel>{label}</FormLabel> }
      { help && <FormInfo text={help} /> }
      <FormControl name={name} onChange={onChange} type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export const FormRadio = ({ name, label, selections }) => {
  return (
    <Form.Group className="mb-3">
      <FormLabel>{label}</FormLabel>
      {selections.map((selection, key) => {
        return (
          <Form.Check
            className="mb-2"
            type="radio"
            key={key}
            name={name}
            label={selection}
          />
        );
      })}
    </Form.Group>
  );
};

export const FormPassword = ({ name, label, placeholder, className, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleDisplayPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };

  return (
    <Form.Group className="mb-3">
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <FormControl
          name={name}
          className="px-4 py-3 rounded-pill position-relative"
          style={{ zIndex: "0" }}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
        />
        {showPassword ? (
          <EyeFill
            className="position-absolute top-50 end-0 translate-middle-y me-4 text-black-50"
            style={{ zIndex: "1", cursor: "pointer" }}
            onClick={handleDisplayPassword}
            size={24}
          />
        ) : (
          <EyeSlashFill
            className="position-absolute top-50 end-0 translate-middle-y me-4 text-black-50"
            style={{ zIndex: "1", cursor: "pointer" }}
            onClick={handleDisplayPassword}
            size={24}
          />
        )}

        <EyeSlashFill
          className="position-absolute top-50 end-0 translate-middle-y me-4 text-black-50"
          style={{ zIndex: "1" }}
          onClick={handleDisplayPassword}
          size={24}
        />
      </InputGroup>
    </Form.Group>
  );
};

export const FormGoogleButton = ({ label }) => {
  return (
    <Button variant="white" className="shadow-1 rounded-pill mt-3 px-5 py-3">
      <Image src="/assets/icon/google.png" className="me-3" />
      {label}
    </Button>
  );
};