import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
}

const AccountWrap = ({ name, relation, bank, account, kakaopayAccount }: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => alert('계좌번호가 복사되었습니다.😉😉'),
      () => alert('계좌번호 복사에 실패했습니다.🥲🥲'),
    );
  };

  return (
    <Wrapper>
      <Info>
        <NameRelation>
          <Relation>{relation}</Relation>
          <Name>{name}</Name>
        </NameRelation>
        {kakaopayAccount && (
          <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <KakaopayImg src={kakaopay} alt="kakaopay" />
          </AccountButton>
        )}
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" width={15} height={15} />
          <StyledCopyText>복사</StyledCopyText>
        </CopyButton>
      </Details>
    </Wrapper>
  );
};

const StyledCopyText = styled.span`
  color: '#333';
  font-family: 'SUITE-Regular';
`;

const Wrapper = styled.div`
  font-family: 'SUITE-Regular';
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const NameRelation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; // 이 간격을 조정하면 '신랑'과 '이태윤' 사이의 거리가 변합니다.
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // 추가된 속성
  margin: 5px 0;
`;
const Relation = styled.span`
  color: #44484d;
`;
const Name = styled.span`
  font-size: 1rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div``;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 2px 6px;
  min-width: 55px;
`;

const AccountButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: #ffeb00;
  min-width: 55px;
`;

const KakaopayImg = styled.img`
  width: 50px;
`;

export default AccountWrap;
