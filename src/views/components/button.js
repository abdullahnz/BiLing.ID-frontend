import { Button as Btn } from "react-bootstrap";

export const Button = ({ label, onClick, className }) => {
  return (
    <Btn onClick={onClick} className={`rounded-pill fw-bold px-5 py-4 ${className && className}`}>
      {label}
    </Btn>
  );
};

export const ButtonMd = ({ label, onClick }) => {
  return (
    <Btn
      onClick={onClick}
      className="rounded-pill fw-bold px-5 py-3"
    >{label}</Btn>
  )
}