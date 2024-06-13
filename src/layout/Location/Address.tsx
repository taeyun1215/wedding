import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, subtitle, desc1, desc2 } = item;
        const getColor = (descNumber: number) => {
          if (title === "지하철") {
            return descNumber === 1 ? "Gold" : "SeaGreen";
          } else if (title === "버스") {
            return descNumber === 1 ? "DodgerBlue" : "Tomato";
          } else if (title === "주차안내") {
            return descNumber === 1 ? "MediumPurple" : undefined;  
          }
          return "gray";  
        };

        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            {subtitle && <PointSubTitle>{subtitle}</PointSubTitle>}
            {desc1 && <DescriptionWithCircle1 color={getColor(1)}>{desc1}</DescriptionWithCircle1>}
            {desc2 && <DescriptionWithCircle2 color={getColor(2)}>{desc2}</DescriptionWithCircle2>}
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const PointSubTitle = styled.h2`
  font-size: 15px;
  color: #333;
  margin: 10px 0 -13px;
`;

const DescriptionWithCircle1 = styled(Caption)`
  position: relative;
  padding-left: 20px;
  margin-bottom: -10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

const DescriptionWithCircle2 = styled(Caption)`
  position: relative;
  padding-left: 20px;
  margin-bottom: px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;