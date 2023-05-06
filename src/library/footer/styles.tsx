import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 120px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral100};
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

export { Footer, Content, Logo, Image };
