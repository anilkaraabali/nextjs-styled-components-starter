import styled from 'styled-components';

const Root = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.variables.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings[1]} ${({ theme }) => theme.spacings[4]};
`;

export { Root, Main };
