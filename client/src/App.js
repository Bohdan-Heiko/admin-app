import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './component/PostList';
import PostCreate from './component/PostCreate';
import PostEdit from './component/PostEdit';

import UserList from './component/UserList';
import UserCreate from './component/UserCreate';
import UserEdit from './component/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')} >
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
    </Admin>
  );
}

export default App;
