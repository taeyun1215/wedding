import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <StyledCaption1 textAlign={'center'}>{mapInfo.address1}</StyledCaption1>
      <StyledCaption2 textAlign={'center'}>{mapInfo.address2}</StyledCaption2>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const StyledCaption1 = styled(Caption)`
  font-family: SeoulHangangM;
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
  margin-bottom: -5px; // 하단에 20px의 마진 추가
`;

const StyledCaption2 = styled(Caption)`
  font-family: SeoulHangangM;
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;  
  margin-bottom: 40px; // 하단에 20px의 마진 추가
`;
