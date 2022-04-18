import { useEffect, useState } from 'react';
import { user } from './models';
import { updateUserPatchProps } from './services/JsonPlaceholderApi/models';
import { JsonPlaceholderEndPoints } from './services';
import { GlobalStyles, Title, List, ButtonsContainer, ButtonStyled } from './components';

export const App = () => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    JsonPlaceholderEndPoints.getAllUsers().then(results => setUsers(results));
  }, []);

  const newUser: user = {
    id: 11,
    name: 'Newman Ferrer',
    username: 'newmanf',
    email: 'newmanferrer@gmail.com'
  };

  const handleCreateUser = (newUser: user) => {
    JsonPlaceholderEndPoints.createUser(newUser).then(result => {
      setUsers(prevUsers => prevUsers.concat(result));
    });
  };

  const updateUserPut: user = {
    id: 10,
    name: 'Amanda Ferrer',
    username: 'amandaf',
    email: 'amandaferrer@gmail.com'
  };

  const handleUpdatePut = (updateUserPut: user) => {
    JsonPlaceholderEndPoints.updateUserPut(updateUserPut).then(result => {
      setUsers(prevUsers => prevUsers.concat(result));
    });
  };

  const updateUserPatch: updateUserPatchProps = {
    id: 10,
    email: 'email_update_patch@mail.com'
  };

  const handleUpdatePatch = (updateUserPatch: updateUserPatchProps) => {
    JsonPlaceholderEndPoints.updateUserPatch(updateUserPatch).then(result => {
      setUsers(prevUsers => prevUsers.concat(result));
    });
  };

  const handleFilterUser = (id: number) => {
    JsonPlaceholderEndPoints.filterUser(id).then(result => {
      setUsers(prevUsers => prevUsers.concat(result));
    });
  };

  const handleDeleteUser = (id: number) => {
    JsonPlaceholderEndPoints.deleteUser(id).then(response => console.log(response));
  };

  return (
    <>
      <GlobalStyles />
      <Title text='Feching of Data: Fetch Api' />
      <List users={users} />
      <ButtonsContainer>
        <ButtonStyled onClick={() => handleCreateUser(newUser)}>Create</ButtonStyled>
        <ButtonStyled onClick={() => handleUpdatePut(updateUserPut)}>Update Put</ButtonStyled>
        <ButtonStyled onClick={() => handleUpdatePatch(updateUserPatch)}>Update Patch</ButtonStyled>
        <ButtonStyled onClick={() => handleFilterUser(10)}>Filter</ButtonStyled>
        <ButtonStyled onClick={() => handleDeleteUser(10)}>Delete</ButtonStyled>
      </ButtonsContainer>
    </>
  );
};
