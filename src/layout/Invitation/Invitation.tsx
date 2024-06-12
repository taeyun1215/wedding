import styled from '@emotion/styled';
import data from 'data.json';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  const [date] = useState(new Date(2024, 8, 1)); // Corrected to September 2024
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-09-28T17:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setCountdown(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <StyledCalendar
        value={date}
        minDate={new Date(2024, 8, 1)}
        maxDate={new Date(2024, 8, 30)}
        locale="en-US"
        tileClassName={({ date, view }) => {
          if (view === "month") {
            if (date.getMonth() !== 8) { // 9월(8)이 아닐 경우
              return 'hidden'; // hidden 클래스 적용
            }
            if (date.getDate() === 28) {
              return 'highlight'; // 특정 날짜 강조
            }
          }
        }}
      />
      <Paragraph>{`남은 시간: ${countdown}`}</Paragraph>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    border: 1px solid #ccc; // Add border
    font-family: 'SUITE-Regular', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    max-width: 100%;
    background-color: #fff; // Change background color
    background-image: radial-gradient(circle, #f5f5f5 1px, transparent 1px); // Add dot pattern
    background-size: 28px 28px; // Size of the dot pattern
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add shadow
  }

  .react-calendar__navigation {
    display: none; // Hide navigation buttons
  }

  .react-calendar__month-view__days__day {
    color: #333; // Change text color
    font-size: 18px; // Adjust font size
    font-weight: 500; // Adjust font weight
    text-align: center; // Center text
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
    background-color: #ff6868; // Highlight specific dates
    color: white;
    border-radius: 50%; // Circle shape
    padding: 15px 0;
    font-size: 18px; // Adjust font size for highlighted days
    font-weight: bold; // Make the font weight bold
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Add shadow to highlighted days
  }

  .hidden {
    visibility: hidden; // Hide non-relevant days
  }
`;
