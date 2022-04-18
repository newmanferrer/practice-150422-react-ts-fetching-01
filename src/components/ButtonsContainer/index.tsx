import { FC, ReactNode } from 'react';
import { ButtonsContainerStyled } from './StyledComponents';

interface ButtonsContainerProps {
  children: ReactNode;
}

export const ButtonsContainer: FC<ButtonsContainerProps> = ({ children }): JSX.Element => {
  return <ButtonsContainerStyled>{children}</ButtonsContainerStyled>;
};
