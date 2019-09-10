import styled, { CreateStyled } from '@emotion/styled';
import Theme from 'react-tailwhip';

export const MyTheme = { ...Theme };

export const Styled: CreateStyled<typeof MyTheme> = styled;
