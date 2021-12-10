import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './component/PostPage/PostList';
import PostCreate from './component/PostPage/PostCreate';
import PostEdit from './component/PostPage/PostEdit';

import UserList from './component/UserPage/UserList';
import UserCreate from './component/UserPage/UserCreate';
import UserEdit from './component/UserPage/UserEdit';

import DashBoard from './component/DashBoard';
import AuthProvider from './component/AuthProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

function App() {
  return (
    <Admin dashboard={DashBoard} authProvider={AuthProvider} dataProvider={restProvider('http://localhost:3000')} >
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} />
    </Admin>
  );
}

export default App;
