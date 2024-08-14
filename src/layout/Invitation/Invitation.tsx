import styled from '@emotion/styled';
import data from 'data.json';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Paragraph } from '@/components/Text.tsx';
import dayjs from 'dayjs';

const Invitation = () => {
  const { greeting } = data;
  const [date] = useState(new Date(2024, 8, 1)); // Corrected to September 2024: number;
  const [countdown, setCountdown] = useState<number[]>([]);

  useEffect(() => {
    const targetDate = new Date('2024-09-28T17:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      let tmpArr = [];
      tmpArr.push(days, hours, minutes, seconds);
      setCountdown(tmpArr);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 일요일 확인
  const isSunday = (date: Date) => date.getDay() === 0;

  // 월 시 분 초 반환
  const getTimeUnits = (type: number) => {
    if (type === 0) return 'DAYS';
    if (type === 1) return 'HOURS';
    if (type === 2) return 'MIN';
    if (type === 3) return 'SEC';
  };

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Bar /> {/* 바1 */}
      <Paragraph>{greeting.people1}</Paragraph>
      <Bar /> {/* 바2 */}
      <br />
      <div>
        <StyledEventDays>2024. 09. 28</StyledEventDays>
        <StyledEventText>토요일 오후 5시</StyledEventText>
      </div>
      <StyledCalendar
        value={date}
        minDate={new Date(2024, 8, 1)}
        maxDate={new Date(2024, 8, 30)}
        locale="ko-KR"
        calendarType="gregory"
        formatDay={(_locale, date) => dayjs(date).format('D')}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            if (date.getMonth() !== 8) {
              // 9월(8)이 아닐 경우
              return 'hidden'; // hidden 클래스 적용
            }
            if (isSunday(date)) {
              return 'sunday';
            }
            if (date.getDate() === 28) {
              return 'highlight'; // 특정 날짜 강조
            }
          }
        }}
      />
      <CountNumberContainer>
        {countdown.map((num, index) => (
          <>
            <CountNumberWrapper key={index}>
              <CountNumberText_Num>{num}</CountNumberText_Num>
              <CountNumberText_String>{getTimeUnits(index)}</CountNumberText_String>
            </CountNumberWrapper>
            {index !== 3 && <span>:</span>}
          </>
        ))}
      </CountNumberContainer>
      <CountNumberText_Add>
        태윤 <span className="highlight1">♥️</span> 진아의 결혼식이{' '}
        <span className="highlight2">{countdown[0]}일 </span>
        남았습니다.
      </CountNumberText_Add>
    </InvitationWrapper>
  );
};

export default Invitation;

const Bar = styled.div`
  width: 100%;
  max-width: 120px; /* 선의 최대 길이 */
  height: 1px; /* 선의 두께 */
  margin: 40px 0; /* 위아래 여백을 30px로 증가 */
  background-color: rgba(255, 105, 180, 0.6); /* 선의 색상을 핑크색으로 설정하고 투명도를 60%로 적용 */
  border-radius: 0; /* 끝을 직각으로 설정 */
`;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: SeoulHangangM;
  color: #333;
`;

const CountNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const CountNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(246, 209, 219, 0.3);
  padding: 8px;
  width: 35px;
  border-radius: 10px;
`;

const CountNumberText_Num = styled.span`
  font-size: 22px;
`;

const CountNumberText_String = styled.span`
  font-size: 11px;
  color: #666;
`;

const CountNumberText_Add = styled.p`
  font-size: 18px;
`;

const StyledEventText = styled.p`
  margin: 0;
`;

const StyledEventDays = styled.p`
  font-size: 24px;
  letter-spacing: 3px;
  margin: 0;
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    border: none; // Add border
    font-family: 'SUITE-Regular', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    max-width: 100%;
    background-color: #fff; // Change background color
    background-image: radial-gradient(circle, #f5f5f5 1px, transparent 1px); // Add dot pattern
    background-size: 28px 28px; // Size of the dot pattern
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add shadow
  }

  .react-calendar__month-view__weekdays__weekday:first-of-type {
    color: #ff1a1a;
  }

  .react-calendar__navigation {
    display: none; // Hide navigation buttons
  }

  .react-calendar__month-view__days__day {
    color: #333; // Change text color
    font-size: 18px; // Adjust font size
    font-weight: 500; // Adjust font weight
    text-align: center; // Center text
    font-family: SeoulHangangM;
  }

  .react-calendar__tile {
    max-width: 100%;
    text-align: center; // Center content
    background: none;
    padding: 15px 0; // Adjust padding
    border: none;
    transition: background-color 0.3s; // Background color transition for hover effect
  }

  .react-calendar__tile:hover {
    background-color: #f0f0f0; // Change background color on hover
  }

  .highlight {
    background-color: #e88ca6; // Highlight specific dates
    color: white;
    border-radius: 50%; // Circle shape
    padding: 10px 0;
    font-size: 18px; // Adjust font size for highlighted days
    font-weight: bold; // Make the font weight bold
    flex: 0 0 11.2857% !important;
    width: 40px;
    height: 40px;
    margin: 5px 0 0 4px;
  }

  .hidden {
    visibility: hidden; // Hide non-relevant days
  }

  .sunday {
    color: #ff1a1a; // Change text color to red for Sundays
  }

  .react-calendar__month-view__weekdays {
    font-size: 18px; // Adjust font size
    font-family: SeoulHangangM;
  }

  abbr[title] {
    text-decoration: none;
  }
`;
