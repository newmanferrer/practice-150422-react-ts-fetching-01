import { user } from '../../../../models';
import { apiUser } from '../../models';

export const adapterUser = (apiUser: apiUser) => {
  const formattedUser: user = {
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username,
    email: apiUser.email
  };

  return formattedUser;
};
