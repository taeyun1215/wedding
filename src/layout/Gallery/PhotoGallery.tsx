import { useState } from 'react';
import styled from '@emotion/styled';
import images from '@/layout/Gallery/Images';
import { IoClose } from 'react-icons/io5';
import { BsPaperclip } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnMove = (direction: 'left' | 'right') => {
    const newIndex =
      direction === 'right'
        ? Math.min(currentIndex + 1, images.length - 1)
        : Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <GalleryContainer>
        <GalleryText>Moment of love</GalleryText>
        <ClipIcon color="#3D3D3D" />
        <GalleryWrap>
          <InnerWrap style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((v, index) => (
              <img
                key={index}
                src={v.source}
                alt={v.alt}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
          </InnerWrap>
        </GalleryWrap>
        <CarouselWrap>
          <HiOutlineArrowSmallLeft
            fontSize={24}
            cursor={'pointer'}
            color="#3D3D3D"
            visibility={currentIndex === 0 ? 'hidden' : 'visible'}
            onClick={() => handleOnMove('left')}
          />
          <GalleryText>{`${currentIndex + 1} / ${images.length}`}</GalleryText>
          <HiOutlineArrowSmallRight
            fontSize={24}
            cursor={'pointer'}
            color="#3D3D3D"
            visibility={currentIndex === images.length - 1 ? 'hidden' : 'visible'}
            onClick={() => handleOnMove('right')}
          />
        </CarouselWrap>
      </GalleryContainer>
      {isOpen && (
        <ZoomImageContainer>
          <ZoomImageWrap>
            <ZoomIconClose onClick={() => setIsOpen(false)} />
            <ZoomIconArrowLeft
              onClick={() => handleOnMove('left')}
              visibility={currentIndex === 0 ? 'hidden' : 'visible'}
            />
            <InnerWrap
              style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'none' }}>
              {images.map((v, index) => (
                <img key={index} src={v.source} alt={v.alt} width={'100%'} />
              ))}
            </InnerWrap>
            <ZoomIconArrowRight
              onClick={() => handleOnMove('right')}
              visibility={currentIndex === images.length - 1 ? 'hidden' : 'visible'}
            />
          </ZoomImageWrap>
        </ZoomImageContainer>
      )}
    </>
  );
};

export default PhotoGallery;

const GalleryContainer = styled.div`
  position: relative;
  background-color: rgba(246, 209, 219, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
`;

const GalleryWrap = styled.div`
  overflow: hidden;
  min-width: 280px;
`;

const InnerWrap = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const GalleryText = styled.p`
  font-family: SeoulHangangM, serif;
  margin: 0;
`;

const CarouselWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ClipIcon = styled(BsPaperclip)`
  position: absolute;
  font-size: 32px;
  top: 0;
  left: 20px;
`;

const ZoomImageContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ZoomImageWrap = styled.div`
  display: flex;
  max-width: 500px;
  overflow: hidden;
  position: relative;
`;

const ZoomIconArrowLeft = styled(IoIosArrowBack)`
  position: absolute;
  left: 0;
  top: 50%;
  color: #363636;
  font-size: 32px;
  z-index: 10;
`;

const ZoomIconArrowRight = styled(IoIosArrowForward)`
  position: absolute;
  right: 0;
  top: 50%;
  color: #363636;
  font-size: 32px;
  z-index: 10;
`;

const ZoomIconClose = styled(IoClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #363636;
  font-size: 32px;
  z-index: 10;
`;