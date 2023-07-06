import { SubHeader } from "../../../components/utils";

import { ListsContainer, StepList } from "./steps.component";

const Steps = ({data}) => {
  return (
    <>
      <SubHeader title={data.title} desc={data.description} />
      <ListsContainer>
        {data.items.map((step) => {
          return <StepList key={step.id} id={step.id} title={step.title} desc={step.desc} />;
        })}
      </ListsContainer>
    </>
  );
};

export default Steps;
