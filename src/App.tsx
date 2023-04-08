import React, { useEffect, useReducer, useState } from 'react';

import './App.css';
import Cards from './Components/Card';
import AddedUsers from './Components/AddedUsers';
export interface IUserInfo {
  name: string,
  age: string
}

type simpleType = IUserInfo[];

function App() {
  const [addedUsers, setAddedUsers] = useState<simpleType>();
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(()=> {

  },[addedUsers]);

  const getAddUser = (userInfo: simpleType) => {
    setAddedUsers(userInfo);
  }

  const deleteUser = (index: number) => {
    const userToDelete = addedUsers != null ? addedUsers[index] : null;
    if (userToDelete) {
      addedUsers?.splice(addedUsers.indexOf(userToDelete), 1);
    }
    setAddedUsers(set => addedUsers);
    //força os componentes a re-render
    forceUpdate()
  }

  return (
    <React.Fragment>
      <Cards
        onAddUser={getAddUser}
        Id={Math.random().toString()}
        FieldName='Username'>
      </Cards>
      {addedUsers?.map((x, index) =>
          <AddedUsers 
            key={index}
            UserData={x}
            Index={index}
            OnDelete={deleteUser}/>
        )
      }
    </React.Fragment>
  );
}

export default App;
