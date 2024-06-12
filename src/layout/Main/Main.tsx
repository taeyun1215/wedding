import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <Wrapper>
      <WeddingDate>{greeting.weddingDate}</WeddingDate>
      <WeddingWeek>{greeting.weddingWeek}</WeddingWeek>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  position: relative; 
  width: 100%;
  max-width: 450px;
`;

const WeddingDate = styled.p`
  position: absolute;
  top: 5%;
  left: 50%; 
  transform: translateX(-50%); 
  font-size: 1.7rem;
  font-weight: 400;
  color: #2F2120;
  line-height: 100%;
  white-space: pre-line;
  margin: 0;
  z-index: 05;  
`;

const WeddingWeek = styled.p`
  position: absolute;
  top: 11%; 
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: 300;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  margin-top: 0;
  z-index: 10;
`;

const MainImg = styled.img`
  border-radius: 0px 0px 0 0;  // 상단 모서리의 둥근 테두리
  width: 100%;  // 이미지 너비를 부모 컨테이너에 맞춤
  max-width: 600px;  // 최대 너비 증가
  padding-top: 0px;  // 상단 패딩
  margin: auto;  // 자동 마진으로 중앙 정렬
  display: block;  // 블록 레벨 요소로 설정
`;

const MainTitle = styled.p`
  font-size: 1.5rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
