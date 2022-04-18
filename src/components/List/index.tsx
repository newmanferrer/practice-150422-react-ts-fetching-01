import { user } from '../../models';
import { ListItem } from '../';
import { UlStyled } from './StyledComponents';

interface ListProps {
  users: user[];
}

export const List = ({ users }: ListProps) => {
  return (
    <UlStyled>
      {users.map((user: user) => (
        <ListItem key={user.id} user={user} />
      ))}
    </UlStyled>
  );
};
