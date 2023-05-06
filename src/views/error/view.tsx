import { NextPage } from 'next';

import * as S from './styles';
import { ErrorViewPropsInterface } from './view-props.interface';

export const ErrorView: NextPage<ErrorViewPropsInterface> = (props) => (
  <S.Container>
    <S.Title>{props.statusCode}</S.Title>
    <S.Description>{props.title}</S.Description>
  </S.Container>
);
