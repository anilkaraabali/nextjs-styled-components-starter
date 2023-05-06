import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export { Title };
