import { adapterUser } from './adapters';
import { user } from '../../models';
import { apiUser, updateUserPatchProps } from './models';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ALL_USERS = 'users';
const ONE_USER = 'users?id=';

const getAllUsers = (): Promise<user[]> => {
  return fetch(`${BASE_URL}/${ALL_USERS}`)
    .then(response => response.json())
    .then((dataJson: apiUser[]) => {
      const usersFormatted: user[] = [];
      dataJson.map((apiUser: apiUser) => usersFormatted.push(adapterUser(apiUser)));
      return usersFormatted;
    });
};

const createUser = ({ id, name, username, email }: user): Promise<user> => {
  return fetch(`${BASE_URL}/${ALL_USERS}`, {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      username,
      email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then((dataJson: user) => dataJson);
};

const updateUserPut = ({ id, name, username, email }: user): Promise<user> => {
  return fetch(`${BASE_URL}/${ALL_USERS}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      username,
      email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then((dataJson: user) => dataJson);
};

const updateUserPatch = ({ id, ...rest }: user | updateUserPatchProps): Promise<user> => {
  return fetch(`${BASE_URL}/${ALL_USERS}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      id,
      name: rest.name && rest.name,
      username: rest.username && rest.username,
      email: rest.email && rest.email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then((dataJson: apiUser) => {
      const userFormatted: user = adapterUser(dataJson);
      return userFormatted;
    });
};

const filterUser = (id: number): Promise<user> => {
  return fetch(`${BASE_URL}/${ONE_USER}${id}`)
    .then(response => response.json())
    .then((dataJson: apiUser[]) => {
      const userFormatted: user = adapterUser(dataJson[0]);
      return userFormatted;
    });
};

const deleteUser = (id: number): Promise<Response> => {
  return fetch(`${BASE_URL}/${ALL_USERS}/${id}`, {
    method: 'DELETE'
  }).then(response => response);
};

export const JsonPlaceholderEndPoints = {
  getAllUsers,
  createUser,
  updateUserPut,
  updateUserPatch,
  filterUser,
  deleteUser
};
