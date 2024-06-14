import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg';
import { MdMusicNote } from 'react-icons/md';
import { useState, useRef } from 'react';

const Main = () => {
  const { greeting } = data;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);  // 팝업 보이기 상태 추가
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleModalResponse = (response: boolean) => {
    setShowModal(false); 
    if (response) {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <Wrapper>
      {showModal && (
        <Modal>
          <ModalContent>
            <p>노래가 나옵니다. 재생해도 괜찮을까요?</p>
            <Button onClick={() => handleModalResponse(true)}>예</Button>
            <Button onClick={() => handleModalResponse(false)}>아니오</Button>
          </ModalContent>
        </Modal>
      )}
      <div>
        <MusicButton onClick={togglePlay}>
          <MdMusicNote size="24px" color={isPlaying ? '#1E90FF' : '#2F2120'} />
        </MusicButton>
        <audio ref={audioRef} src="/one_life.mp3" />
      </div>
      <WeddingDate>{greeting.weddingDate}</WeddingDate>
      <WeddingWeek>{greeting.weddingWeek}</WeddingWeek>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </Wrapper>
  );
};

export default Main;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff4e6;  // Soft peach background
  padding: 20px 40px;
  border-radius: 15px;  // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  // Soft shadow
  text-align: center;
  font-family: 'SeoulHangangM';  // Custom font
  color: #000000; 
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 10px;
  background-color: #f9d6e4;  // Light pink
  color: #000000;  
  border: none;
  border-radius: 20px;  // Very rounded corners
  cursor: pointer;
  font-family: 'SeoulHangangM';  // Ensure font consistency
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);  // Subtle shadow for depth
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f3a6c0;  // Darker pink on hover
    transform: translateY(-2px);  // Slight lift effect
  }

  &:focus {
    outline: none;  // Remove focus outline
    background-color: #ee90af;  // Even darker for focus state
  }
`;

const MusicButton = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #2F2120;
`;

const Wrapper = styled.div`
  position: relative; 
  width: 100%;
  max-width: 450px;
`;

const WeddingDate = styled.p`
  font-family: SeoulHangangM;
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
  font-family: SeoulHangangM;
  position: absolute;
  top: 10%; 
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
  font-family: SeoulHangangM;
  font-size: 1.5rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-family: SeoulHangangM;
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
