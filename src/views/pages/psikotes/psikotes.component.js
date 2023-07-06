

export const PsikotesGuide = ({ children }) => {
  return <div className="list-unstyled">{children}</div>;
};

export const PsikotesGuideIcon = ({ id }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle"
      style={{ width: "24px", height: "24px", fontSize: "12px" , fontWeight: "600"}}
    >
      {id}
    </div>
  );
};

export const PsikotesGuideItem = ({ id, text }) => {
  return (
    <div className="mb-3 d-flex gap-2">
      <PsikotesGuideIcon id={id} />
      {text}
    </div>
  );
};
