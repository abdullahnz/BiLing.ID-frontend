import { Button } from "../../../components/button";

export const PageContainer = ({ title, children }) => {
  return (
    <div className="my-5 mx-4">
      <h1 className="fw-bold" style={{ fontSize: "48px" }}>
        {title}
      </h1>
      <hr className="text-muted mb-4" />
      {children}
    </div>
  );
};

export const ItemCardTitle = ({ title }) => {
  return <h4 className="mb-3">{title}</h4>;
};

export const ItemCardInfo = ({ keys, value }) => {
  return (
    <div className="d-flex gap-2">
      <div className="fw-bold" style={{ fontSize: "17px" }}>
        {keys}:
      </div>
      <div>{value}</div>
    </div>
  );
};

export const ItemCardStatus = ({ isDone }) => {
  return (
    <div className="d-flex gap-2">
      <div className="fw-bold" style={{ fontSize: "17px" }}>
        Status:
      </div>
      <div className={isDone ? "text-primary" : "text-warning"}>
        {isDone ? "Selesai" : "Belum Selesai"}
      </div>
    </div>
  );
};

export const ItemList = (props) => {
  const { title, keys, value, done } = props
  return (
    <div className="p-4 border rounded-40 d-flex align-items-center justify-content-between mb-4">
      <div className="d-flex gap-4">
        <div className="rounded-40 p-4" style={{ background: (done ? "#EEF5FF" : "#FEF8E8") }}>
          <props.icon className={ done ? "text-primary" : "text-warning" } />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <ItemCardTitle title={title} />
          <ItemCardInfo keys={keys} value={value} />
          <ItemCardStatus isDone={done} />
        </div>
      </div>
      <div>
        { done ? 
          <Button label="Lihat" /> :
          <Button label="Mulai" />  
        }
      </div>
    </div>
  );
};
