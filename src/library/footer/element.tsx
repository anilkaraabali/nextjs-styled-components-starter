import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer data-testid='footer'>
      <S.Content>
        <S.Logo href='/'>
          <S.Image src='/logo.svg' alt='Nextjs Logo' width={90} height={18} />
        </S.Logo>
      </S.Content>
    </S.Footer>
  );
};
