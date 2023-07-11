import { Button } from "../../../components/button";

export const PageContainer = ({ title, children, className }) => {
  return (
    <div className={`my-5 mx-4 ${className}`}>
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

export const ItemCardStatus = ({ isDone, label, color }) => {
  return (
    <div className="d-flex gap-2">
      <div className="fw-bold" style={{ fontSize: "17px" }}>
        Status:
      </div>
      <div className={isDone ? color.success : color.fail}>
        {isDone ? label.success : label.fail}
      </div>
    </div>
  );
};

export const ItemListIcon = (props) => {
  return (
    <div className="rounded-40 p-4" style={{ background: props.background }}>
      {props.children}
    </div>
  );
};

export const ItemListInfo = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      {props.children}
    </div>
  );
};

export const ItemListContainer = (props) => {
  return <div className="d-flex gap-4">{props.children}</div>;
};

export const ItemList = (props) => {
  let { title, children, done, settings } = props;

  if (!settings.color) {
    settings.color = {
      background: {
        success: "#EEF5FF",
        fail: "#FEF8E8",
      },
      text: {
        success: "text-primary",
        fail: "text-warning",
      },
    };
  }
  return (
    <div className="p-4 border rounded-40 d-flex align-items-center justify-content-between mb-4">
      <div className="d-flex gap-4">
        <ItemListIcon
          background={
            done ? settings.color.background.success : settings.color.background.fail
          }
        >
          <props.icon
            className={done ? settings.color.text.success : settings.color.text.fail}
          />
        </ItemListIcon>
        <ItemListInfo>
          <ItemCardTitle title={title} />
          {children}
          <ItemCardStatus isDone={done} label={settings.status} color={settings.color.text} />
        </ItemListInfo>
      </div>
      {settings.button.show && (
        <div>
          {done ? (
            <Button label={settings.button.label.success} />
          ) : (
            <Button label={settings.button.label.fail} />
          )}
        </div>
      )}
    </div>
  );
};
