import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.variables.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings[4]};
`;

const Logo = styled(NextLink)`
  display: flex;
`;

const Image = styled(NextImage)``;

export { Header, Content, Logo, Image };
