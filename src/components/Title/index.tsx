import { TitleStyled } from './StyledComponents';

interface ITilteProps {
  text: string;
}

export const Title = ({ text }: ITilteProps) => {
  return <TitleStyled>{text}</TitleStyled>;
};
