import { user } from '../../models';
import { LiStyled, H3Styled, H4Styled } from './StyledComponents';

interface LisItemProps {
  user: user;
}

export const ListItem = ({ user }: LisItemProps) => {
  const { name, username, email } = user;

  return (
    <LiStyled>
      <H3Styled>{name}</H3Styled>
      <H4Styled>{username}</H4Styled>
      <H4Styled>{email}</H4Styled>
    </LiStyled>
  );
};
