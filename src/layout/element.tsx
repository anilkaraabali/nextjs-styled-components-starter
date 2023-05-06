import { Inter } from 'next/font/google';

import { Footer } from '@/library/footer/element';
import { Header } from '@/library/header/element';

import * as S from './styles';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <S.Root id='root' className={inter.className}>
      <Header />
      <S.Main>{props.children}</S.Main>
      <Footer />
    </S.Root>
  );
};
