import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: SeoulHangangM, serif;
  font-size: 1.4rem;
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: SeoulHangangM, serif;
  line-height: 1;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-family: SeoulHangangM;
  font-size: 1.1rem;
  line-height: 2.2rem;
  white-space: pre-line;
  margin-bottom: -0rem;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
  
`;
