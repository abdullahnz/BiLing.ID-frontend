import { SubHeader } from "../../../components/utils";

import { StatisticContainer, StatisticCard, StatisticWrapper } from "./statistics.component";

const Statistic = ({ data }) => {
  return (
    <>
      <SubHeader title={data.title} desc={data.description} />
      <StatisticContainer>
        {data.items.map((item, index) => {
          return (
            <StatisticWrapper key={index}>
              <StatisticCard icon={item.icon} title={item.title} count={item.count} />
            </StatisticWrapper>
          );
        })}
      </StatisticContainer>
    </>
  );
};

export default Statistic;
