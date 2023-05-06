import * as S from './styles';

export const Header = () => {
  return (
    <S.Header data-testid='header'>
      <S.Content>
        <S.Logo href='/'>
          <S.Image src='/logo-brandmark.svg' alt='Nextjs Logo' width={32} height={25} />
        </S.Logo>
      </S.Content>
    </S.Header>
  );
};
