import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 20px 0 0;
  padding-right: ${({ theme }) => theme.spacings[6]};
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  vertical-align: top;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

const Description = styled.span`
  display: inline-block;
  text-align: left;
`;

export { Container, Title, Description };
